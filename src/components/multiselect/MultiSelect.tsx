import React, { useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '../../utils'
import Badge from '../badge'
import { DropdownOption } from '../dropdown'
import OptionsList from '../dropdown/OptionsList'
import Icon from '../icon'
import Spinner from '../spinner'

import styles from './styles.module.sass'

/**
 * Dropdown component properties
 */
export interface MultiSelectProps<T> {
    /** Additional class names for custom styling */
    className?: string
    /** Array of options to display in the dropdown */
    options?: Array<DropdownOption<T>>
    /** Mark the dropdown as required */
    required?: boolean
    /** Disable the dropdown */
    disabled?: boolean
    /** Show loading spinner */
    loading?: boolean
    /** Whether to close the dropdown when an option is selected */
    closeOnSelect?: boolean
    /** Placeholder text to display when no option is selected */
    placeholder?: string
    /** Text to display in the options list if there are no options or nothing found */
    notFoundCaption?: string
    /** Label text for the dropdown */
    label?: string
    /** Error message to display when validation fails */
    error?: string
    /** Current selected value (key) in the dropdown */
    value?: T[]
    /** Callback function triggered when an option is selected */
    onSelect?: (selectedOptions: Array<DropdownOption<T>> | undefined) => void
    /** Callback function triggered when a search is made */
    onSearch?: (text?: string) => void
    /** Callback function triggered when the dropdown is opened */
    onOpen?: () => void
}

const MultiSelect = <T,>({
    className,
    required,
    options,
    disabled,
    loading,
    closeOnSelect,
    value,
    placeholder,
    notFoundCaption,
    label,
    error,
    onSearch,
    onSelect,
    onOpen
}: MultiSelectProps<T>) => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [search, setSearch] = useState<string>('')
    const [localLoading, setLocalLoading] = useState<boolean>(false)
    const [optionsListTop, setOptionsListTop] = useState<number>(30)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<Array<DropdownOption<T>> | undefined>(undefined)

    const optionInValue = (option?: DropdownOption<T>): boolean =>
        option?.key ? !!value?.includes(option?.key) : false

    const filteredOptions = useMemo(
        () =>
            options?.filter(
                (option) =>
                    option.value.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && !optionInValue(option)
            ),
        [options, search, value]
    )

    const toggleDropdown = () => {
        if (onOpen) {
            onOpen()
        } else {
            setIsOpen(!isOpen)
        }
    }

    const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            event.key === 'Enter' &&
            filteredOptions?.length &&
            filteredOptions.length >= 1 &&
            search !== '' &&
            !filteredOptions[0]?.disabled
        ) {
            handleSelect(filteredOptions[0])
        }

        if (event.key === 'Backspace' || event.key === 'Delete') {
            if (search !== '') {
                return
            }

            const selected = [...(selectedOption || [])]

            selected.pop()

            setSelectedOption(selected)
            onSelect?.(selected)
        }

        if (event.key === 'Escape' && isOpen) {
            setIsOpen(false)
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        setLocalLoading(true)
        setSearch(value)

        if (value === '' && isOpen) {
            setIsOpen(false)
        }

        if (value !== '' && !isOpen) {
            setIsOpen(true)
        }

        onSearch?.(value)
        setLocalLoading(false)
    }

    const handleSelect = (option?: DropdownOption<T>) => {
        if (!optionInValue(option) && option) {
            const selected = [...(selectedOption || []), option]

            setSelectedOption(selected)
            onSelect?.(selected)
        }

        setSearch('')
        onSearch?.('')

        if (closeOnSelect) {
            setIsOpen(false)
        }
    }

    const handleRemoveOption = (option?: DropdownOption<T>) => {
        const selected = selectedOption?.filter(({ key }) => key !== option?.key)

        setSelectedOption(selected)
        onSelect?.(selected)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    const handleToggleDropdownClick = (event: React.KeyboardEvent<HTMLSpanElement>) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            toggleDropdown()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        setOptionsListTop(dropdownRef?.current?.clientHeight ?? 0)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [value, selectedOption])

    useEffect(() => {
        if (value) {
            setSelectedOption(options?.filter((option) => optionInValue(option)))
        } else {
            setSelectedOption(undefined)
        }
    }, [value, filteredOptions])

    return (
        <div className={cn(className, styles.multiselect, required && styles.required, disabled && styles.disabled)}>
            {label && <label className={styles.label}>{label}</label>}
            <div
                ref={dropdownRef}
                className={cn(
                    styles.container,
                    isOpen && styles.open,
                    disabled && styles.disabled,
                    error && styles.error
                )}
            >
                <div className={cn(styles.searchContainer, isOpen && styles.open, isFocused && styles.focused)}>
                    <div className={styles.controlsContainer}>
                        {selectedOption?.map((option) => (
                            <Badge
                                className={styles.badge}
                                key={option.value}
                                label={option.value}
                                icon={option.icon}
                                onClickRemove={() => handleRemoveOption(option)}
                            />
                        ))}

                        <input
                            type={'text'}
                            value={search || ''}
                            className={styles.searchInput}
                            placeholder={placeholder ?? ''}
                            disabled={disabled}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onMouseMove={(e) => e.stopPropagation()}
                            onWheelCapture={(e) => e.stopPropagation()}
                            onKeyDown={handleSearchKeyPress}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <span className={styles.buttonContainer}>
                        {loading || localLoading ? (
                            <Spinner />
                        ) : (
                            <span
                                role={'button'}
                                tabIndex={0}
                                className={styles.toggleButton}
                                onClick={toggleDropdown}
                                onKeyDown={handleToggleDropdownClick}
                            >
                                {isOpen ? <Icon name={'KeyboardUp'} /> : <Icon name={'KeyboardDown'} />}
                            </span>
                        )}
                    </span>
                </div>

                {!!error?.length && <div className={styles.error}>{error}</div>}

                {isOpen && (
                    <OptionsList<T>
                        notFoundCaption={notFoundCaption}
                        style={{ top: optionsListTop }}
                        options={filteredOptions}
                        onOptionSelect={handleSelect}
                    />
                )}
            </div>
        </div>
    )
}

export default MultiSelect
