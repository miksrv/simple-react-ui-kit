import React, { useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '../../utils'
import Button, { ButtonProps } from '../button'
import Icon, { IconTypes } from '../icon'
import Spinner from '../spinner'

import OptionsList from './OptionsList'
import styles from './styles.module.sass'

/**
 * Dropdown option type, representing a single option in the dropdown list
 */
export type DropdownOption<T> = {
    /** Unique key to identify the option */
    key: T
    /** Display value of the option */
    value: string
    /** Optional icon to display next to the option */
    icon?: IconTypes
    /** Optional image to display next to the option */
    image?: MediaImage
    /** Disable the option from being selected */
    disabled?: boolean
}

/**
 * Dropdown component properties
 */
export interface DropdownProps<T> extends Pick<ButtonProps, 'size' | 'mode'> {
    /** Additional class names for custom styling */
    className?: string
    /** Array of options to display in the dropdown */
    options?: DropdownOption<T>[]
    /** Mark the dropdown as required */
    required?: boolean
    /** Disable the dropdown */
    disabled?: boolean
    /** Whether the dropdown can be cleared (reset to no selection) */
    clearable?: boolean
    /** Allow searching within options */
    searchable?: boolean
    /** Show loading spinner */
    loading?: boolean
    /** Placeholder text to display when no option is selected */
    placeholder?: string
    /** Text to display in the options list if there are no options or nothing found */
    notFoundCaption?: string
    /** Label text for the dropdown */
    label?: string
    /** Error message to display when validation fails */
    error?: string
    /** Current selected value (key) in the dropdown */
    value?: T
    /** Callback function triggered when an option is selected */
    onSelect?: (selectedOption: DropdownOption<T> | undefined) => void
    /** Callback function triggered when a search is made */
    onSearch?: (text?: string) => void
    /** Callback function triggered when the dropdown is opened */
    onOpen?: () => void
}

const Dropdown = <T,>({
    className,
    required,
    options,
    disabled,
    clearable,
    searchable,
    loading,
    value,
    placeholder,
    notFoundCaption,
    label,
    error,
    onSearch,
    onSelect,
    onOpen,
    ...props
}: DropdownProps<T>) => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [search, setSearch] = useState<string>('')
    const [localLoading, setLocalLoading] = useState<boolean>(false)
    const [optionsListTop, setOptionsListTop] = useState<number>(30)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<DropdownOption<T> | undefined>(undefined)

    const filteredOptions = useMemo(
        () =>
            options?.filter(({ value }) =>
                searchable ? value.toLocaleLowerCase().includes(search.toLocaleLowerCase()) : true
            ),
        [options, searchable, search]
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

        if ((event.key === 'Backspace' || event.key === 'Delete') && selectedOption?.key) {
            setSearch(selectedOption?.value)
            setSelectedOption(undefined)
            onSelect?.(undefined)
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

    const handleSelect = (option: DropdownOption<T> | undefined) => {
        if (selectedOption?.key !== option?.key) {
            setSelectedOption(option)
            onSelect?.(option ?? undefined)
        }

        if (searchable) {
            setSearch('')
            onSearch?.('')
        }

        setIsOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    const handleClearClick = (event: React.MouseEvent | React.KeyboardEvent) => {
        event.stopPropagation()
        handleSelect(undefined)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        setOptionsListTop(dropdownRef?.current?.clientHeight ?? 0)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [props.size, searchable])

    useEffect(() => {
        if (!value) {
            setSelectedOption(undefined)
        } else {
            const selected = filteredOptions?.find((opt) => opt.key === value)
            setSelectedOption(selected)
        }
    }, [value, filteredOptions])

    return (
        <div className={cn(className, styles.dropdown, required && styles.required, disabled && styles.disabled)}>
            {label && <label className={styles.label}>{label}</label>}
            <div
                ref={dropdownRef}
                className={cn(styles.container, isOpen && styles.open, disabled && styles.disabled)}
            >
                {!searchable && (
                    <Button
                        size={props?.size ?? 'small'}
                        mode={props?.mode ?? 'secondary'}
                        variant={error ? 'negative' : undefined}
                        disabled={disabled}
                        onClick={toggleDropdown}
                        className={cn(styles.dropdownButton, selectedOption && styles.selected, isOpen && styles.open)}
                    >
                        <span className={styles.value}>
                            {selectedOption?.icon && <Icon name={selectedOption.icon} />}

                            {selectedOption?.image && (
                                <img
                                    src={selectedOption.image.src}
                                    alt={''}
                                />
                            )}

                            {selectedOption?.value ? (
                                selectedOption?.value
                            ) : (
                                <span className={styles.placeholder}>{placeholder ?? ''}</span>
                            )}
                        </span>

                        <span className={styles.buttonContainer}>
                            {clearable && selectedOption?.key && (
                                <span
                                    role={'button'}
                                    tabIndex={0}
                                    className={styles.clearButton}
                                    onClick={handleClearClick}
                                    onKeyDown={(e) => e.key === 'Enter' && handleClearClick(e)}
                                >
                                    <Icon name={'Close'} />
                                </span>
                            )}
                            {isOpen ? <Icon name={'KeyboardUp'} /> : <Icon name={'KeyboardDown'} />}
                        </span>
                    </Button>
                )}

                {searchable && (
                    <div className={cn(styles.searchContainer, isOpen && styles.open)}>
                        {selectedOption?.icon && <Icon name={selectedOption.icon} />}

                        {selectedOption?.image && (
                            <img
                                src={selectedOption.image.src}
                                alt={''}
                            />
                        )}

                        <input
                            type={'text'}
                            value={selectedOption?.value || search || ''}
                            className={styles.searchInput}
                            placeholder={placeholder ?? ''}
                            onMouseMove={(e) => e.stopPropagation()}
                            onWheelCapture={(e) => e.stopPropagation()}
                            onKeyDown={handleSearchKeyPress}
                            onChange={handleSearchChange}
                        />

                        <span className={styles.buttonContainer}>
                            {loading || localLoading ? (
                                <Spinner />
                            ) : clearable && selectedOption?.key ? (
                                <span
                                    role={'button'}
                                    tabIndex={0}
                                    className={styles.clearButton}
                                    onClick={handleClearClick}
                                    onKeyDown={(e) => e.key === 'Enter' && handleClearClick(e)}
                                >
                                    <Icon name={'Close'} />
                                </span>
                            ) : (
                                <span
                                    role={'button'}
                                    tabIndex={0}
                                    className={styles.toggleButton}
                                    onClick={toggleDropdown}
                                    onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
                                >
                                    {isOpen ? <Icon name={'KeyboardUp'} /> : <Icon name={'KeyboardDown'} />}
                                </span>
                            )}
                        </span>
                    </div>
                )}

                {!!error?.length && <div className={styles.error}>{error}</div>}

                {isOpen && (
                    <OptionsList<T>
                        notFoundCaption={notFoundCaption}
                        style={{ top: optionsListTop }}
                        options={filteredOptions}
                        selectedOption={selectedOption}
                        onOptionSelect={handleSelect}
                    />
                )}
            </div>
        </div>
    )
}

export default Dropdown
