import React, { useEffect, useRef, useState } from 'react'

import { cn } from '../../utils'
import Button, { ButtonProps } from '../button'
import Icon, { IconTypes } from '../icon'

import OptionsList from './OptionsList'
import styles from './styles.module.sass'

/**
 * Dropdown option type, representing a single option in the dropdown list
 */
export type DropdownOption<T> = {
    /** Unique key to identify the option */
    key: T
    /** Display value of the option (can be text, number, or a React node) */
    value: React.ReactNode | string | number
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
    /** Placeholder text to display when no option is selected */
    placeholder?: string
    /** Label text for the dropdown */
    label?: string
    /** Error message to display when validation fails */
    error?: string
    /** Current selected value (key) in the dropdown */
    value?: T
    /** Callback function triggered when an option is selected */
    onSelect?: (selectedOption: DropdownOption<T> | undefined) => void
    /** Callback function triggered when the dropdown is opened */
    onOpen?: () => void
}

const Dropdown = <T,>({
    className,
    required,
    options,
    disabled,
    clearable,
    value,
    placeholder,
    label,
    error,
    onSelect,
    onOpen,
    ...props
}: DropdownProps<T>) => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [optionsListTop, setOptionsListTop] = useState<number>(30)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<DropdownOption<T> | undefined>(undefined)

    const toggleDropdown = () => {
        if (onOpen) {
            onOpen()
        } else {
            setIsOpen(!isOpen)
        }
    }

    const handleSelect = (option: DropdownOption<T> | undefined) => {
        if (selectedOption?.key !== option?.key) {
            setSelectedOption(option)
            onSelect?.(option ?? undefined)
        }

        setIsOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    const handleClearClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        handleSelect(undefined)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        setOptionsListTop(dropdownRef?.current?.clientHeight ?? 0)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (!value) {
            setSelectedOption(undefined)
        } else {
            const selected = options?.find((opt) => opt.key === value)
            setSelectedOption(selected)
        }
    }, [value, options])

    return (
        <div className={cn(className, styles.dropdown, required && styles.required, disabled && styles.disabled)}>
            {label && <label className={styles.label}>{label}</label>}
            <div
                ref={dropdownRef}
                className={cn(styles.container, isOpen && styles.open, disabled && styles.disabled)}
            >
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
                                className={styles.categoryIcon}
                                src={selectedOption.image.src}
                                alt={''}
                                width={22}
                                height={26}
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
                            <button
                                type={'button'}
                                className={styles.clearButton}
                                onClick={handleClearClick}
                            >
                                <Icon name={'Close'} />
                            </button>
                        )}
                        {isOpen ? <Icon name={'KeyboardUp'} /> : <Icon name={'KeyboardDown'} />}
                    </span>
                </Button>

                {!!error?.length && <div className={styles.error}>{error}</div>}

                {isOpen && (
                    <OptionsList<T>
                        style={{ top: optionsListTop }}
                        options={options}
                        selectedOption={selectedOption}
                        onOptionSelect={handleSelect}
                    />
                )}
            </div>
        </div>
    )
}

export default Dropdown
