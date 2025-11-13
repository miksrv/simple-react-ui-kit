import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../../utils'
import Button, { ButtonProps } from '../button'
import Icon, { IconTypes } from '../icon'
import Spinner from '../spinner'

import ClearButton from './ClearButton'
import OptionsList from './OptionsList'

import styles from './styles.module.sass'

export type DropdownOption<T> = {
    key: T
    value: string
    icon?: IconTypes
    image?: MediaImage
    emoji?: string
    disabled?: boolean
}

/**
 * Dropdown component properties
 */
export interface DropdownProps<T> extends Pick<ButtonProps, 'size' | 'mode'> {
    /** Additional class names for custom styling */
    className?: string
    /** Array of options to display in the dropdown */
    options?: Array<DropdownOption<T>>
    /** Mark the dropdown as required */
    required?: boolean
    /** Disable the dropdown */
    disabled?: boolean
    /** Show clear button to reset selection */
    clearable?: boolean
    /** Enable search functionality */
    searchable?: boolean
    /** Show loading spinner */
    loading?: boolean
    /** Placeholder text to display when no option is selected */
    placeholder?: string
    /** Text to display if no options are found */
    notFoundCaption?: string
    /** Label text for the dropdown */
    label?: string
    /** Error message to display when validation fails */
    error?: string
    /** Currently selected value (key) in the dropdown */
    value?: T
    /** Callback triggered when an option is selected */
    onSelect?: (selectedOption: DropdownOption<T> | undefined) => void
    /** Callback triggered when a search is made */
    onSearch?: (text?: string) => void
    /** Callback triggered when the dropdown is opened */
    onOpen?: () => void
}

const Dropdown = <T,>({
    className,
    options = [],
    required,
    disabled,
    clearable,
    searchable,
    loading = false,
    placeholder,
    notFoundCaption,
    label,
    error,
    value,
    onSelect,
    onSearch,
    onOpen,
    size = 'medium',
    mode = 'primary'
}: DropdownProps<T>) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        const div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.top = '0'
        div.style.left = '0'
        div.style.pointerEvents = 'none'
        document.body.appendChild(div)
        setPortalNode(div)

        return () => {
            document.body.removeChild(div)
            setPortalNode(null)
        }
    }, [])

    const selectedOption = useMemo(() => {
        return value != null ? options.find((opt) => opt.key === value) : undefined
    }, [options, value])

    const filteredOptions = useMemo(() => {
        if (!searchable) {
            return options
        }
        const lower = search.toLowerCase()
        return options.filter((opt) => opt.value.toLowerCase().includes(lower))
    }, [options, searchable, search])

    const toggleDropdown = useCallback(() => {
        if (disabled) {
            return
        }
        if (!isOpen) {
            onOpen?.()
        }
        setIsOpen((prev) => !prev)
    }, [disabled, isOpen, onOpen])

    const handleSelect = useCallback(
        (option?: DropdownOption<T>) => {
            if (option?.disabled) {
                return
            }
            onSelect?.(option)
            setSearch('')
            onSearch?.('')
            setIsOpen(false)
        },
        [onSelect, onSearch]
    )

    const handleClear = useCallback(
        (e: React.MouseEvent | React.KeyboardEvent) => {
            e.stopPropagation()
            handleSelect(undefined)
        },
        [handleSelect]
    )

    const handleSearchChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value
            setSearch(val)
            onSearch?.(val)
            if (val && !isOpen) {
                setIsOpen(true)
            }
            if (!val && isOpen) {
                setIsOpen(false)
            }
        },
        [onSearch, isOpen]
    )

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => {
            if (e.key === 'Enter' && filteredOptions[0] && search && !filteredOptions[0].disabled) {
                e.preventDefault()
                handleSelect(filteredOptions[0])
            }

            if ((e.key === 'Backspace' || e.key === 'Delete') && selectedOption && !search) {
                e.preventDefault()
                handleSelect(undefined)
                if (searchable) {
                    setSearch(selectedOption.value)
                    inputRef.current?.focus()
                }
            }

            if (e.key === 'Escape' && isOpen) {
                e.preventDefault()
                setIsOpen(false)
                inputRef.current?.blur()
            }

            if (e.key === 'ArrowDown' && !isOpen) {
                e.preventDefault()
                setIsOpen(true)
            }
        },
        [filteredOptions, search, selectedOption, handleSelect, searchable, isOpen]
    )

    useEffect(() => {
        if (!isOpen || !portalNode) {
            return
        }

        const handleClickOutside = (e: globalThis.MouseEvent) => {
            const target = e.target as Node
            if (rootRef.current && !rootRef.current.contains(target) && portalNode && !portalNode.contains(target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen, portalNode])

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setTimeout(() => setIsFocused(false), 150)

    const getPortalStyle = useCallback(() => {
        if (!rootRef.current) {
            return { display: 'none' }
        }
        const rect = rootRef.current.getBoundingClientRect()
        return {
            position: 'absolute' as const,
            top: rect.bottom + window.scrollY - (error ? 52 : 34),
            left: rect.left + window.scrollX,
            width: rect.width,
            zIndex: 9999,
            pointerEvents: 'auto' as const
        }
    }, [error])

    return (
        <div className={cn(className, styles.dropdown, required && styles.required, disabled && styles.disabled)}>
            {label && (
                <label
                    className={styles.label}
                    onClick={() => inputRef.current?.focus()}
                >
                    {label}
                </label>
            )}

            <div
                ref={rootRef}
                className={cn(
                    styles.container,
                    isOpen && styles.open,
                    disabled && styles.disabled,
                    error && styles.error
                )}
                role='combobox'
                aria-expanded={isOpen}
                aria-haspopup='listbox'
                aria-disabled={disabled}
            >
                {!searchable && (
                    <Button
                        size={size}
                        mode={mode}
                        variant={error ? 'negative' : undefined}
                        disabled={disabled}
                        onClick={toggleDropdown}
                        onKeyDown={handleKeyDown}
                        className={cn(styles.dropdownButton, selectedOption && styles.selected, isOpen && styles.open)}
                    >
                        <span className={styles.value}>
                            {selectedOption?.icon && <Icon name={selectedOption.icon} />}
                            {selectedOption?.image && (
                                <img
                                    src={selectedOption.image.src}
                                    alt=''
                                />
                            )}
                            {selectedOption?.emoji && <span className={styles.emoji}>{selectedOption.emoji}</span>}
                            {selectedOption?.value ? (
                                selectedOption.value
                            ) : (
                                <span className={styles.placeholder}>{placeholder ?? ''}</span>
                            )}
                        </span>
                        <span className={styles.buttonContainer}>
                            {clearable && selectedOption?.key && <ClearButton onClick={handleClear} />}
                            <Icon name={isOpen ? 'KeyboardUp' : 'KeyboardDown'} />
                        </span>
                    </Button>
                )}

                {searchable && (
                    <div
                        className={cn(styles.searchContainer, isOpen && styles.open, isFocused && styles.focused)}
                        onClick={() => !disabled && inputRef.current?.focus()}
                    >
                        {selectedOption?.icon && <Icon name={selectedOption.icon} />}
                        {selectedOption?.image && (
                            <img
                                src={selectedOption.image.src}
                                alt=''
                            />
                        )}
                        {selectedOption?.emoji && <span className={styles.emoji}>{selectedOption.emoji}</span>}

                        <input
                            ref={inputRef}
                            type='text'
                            value={selectedOption?.value ?? search}
                            className={styles.searchInput}
                            placeholder={placeholder ?? ''}
                            disabled={disabled}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            aria-autocomplete='list'
                            aria-controls='dropdown-options'
                        />

                        <span className={styles.buttonContainer}>
                            {loading ? (
                                <Spinner />
                            ) : clearable && selectedOption?.key ? (
                                <ClearButton onClick={handleClear} />
                            ) : (
                                <span
                                    role='button'
                                    tabIndex={0}
                                    className={styles.toggleButton}
                                    onClick={toggleDropdown}
                                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDropdown()}
                                    aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
                                >
                                    <Icon name={isOpen ? 'KeyboardUp' : 'KeyboardDown'} />
                                </span>
                            )}
                        </span>
                    </div>
                )}

                {error && <div className={styles.error}>{error}</div>}
            </div>

            {isOpen &&
                portalNode &&
                createPortal(
                    <div style={getPortalStyle()}>
                        <OptionsList<T>
                            id='dropdown-options'
                            options={filteredOptions}
                            selectedOption={selectedOption}
                            onOptionSelect={handleSelect}
                            notFoundCaption={notFoundCaption}
                        />
                    </div>,
                    portalNode
                )}
        </div>
    )
}

export default Dropdown
