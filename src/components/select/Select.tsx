import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../../utils'
import Badge from '../badge'
import Icon from '../icon'
import Spinner from '../spinner'

import OptionsList from './OptionsList'
import { SelectOptionType } from './types'

import styles from './styles.module.sass'

/**
 * Select component properties
 */
export interface SelectProps<T> {
    /** Additional class names for custom styling */
    className?: string
    /** Mark the select as required */
    required?: boolean
    /** Disable the select */
    disabled?: boolean
    /** Enable multiple selection */
    multiple?: boolean
    /** Enable search input */
    searchable?: boolean
    /** Show clear button to remove selection */
    clearable?: boolean
    /** Show loading spinner */
    loading?: boolean
    /** Whether the dropdown should close after selecting an option */
    closeOnSelect?: boolean
    /** Array of options to display in the select */
    options?: Array<SelectOptionType<T>>
    /** Placeholder text to display when no option is selected */
    placeholder?: string
    /** Text to display if no options are found */
    notFoundCaption?: string
    /** Label text for the select */
    label?: string
    /** Error message to display when validation fails */
    error?: string
    /** Currently selected value(s) */
    value?: T | T[]
    /** Callback triggered when options are selected */
    onSelect?: (selected: Array<SelectOptionType<T>> | undefined) => void
    /** Callback triggered when a search is made */
    onSearch?: (text?: string) => void
    /** Callback triggered when the dropdown is opened */
    onOpen?: () => void
}

const Select = <T,>({
    className,
    required,
    disabled,
    multiple = false,
    searchable = false,
    clearable = false,
    loading = false,
    closeOnSelect = true,
    options = [],
    placeholder,
    notFoundCaption,
    label,
    error,
    value,
    onSelect,
    onSearch,
    onOpen
}: SelectProps<T>) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

    // Portal for dropdown
    useEffect(() => {
        const div = document.createElement('div')
        div.style.position = 'absolute'
        div.style.top = '0'
        div.style.left = '0'
        div.style.pointerEvents = 'none'
        document.body.appendChild(div)
        setPortalNode(div)

        return () => {
            if (document.body.contains(div)) {
                document.body.removeChild(div)
            }
            setPortalNode(null)
        }
    }, [])

    // Selected options based on value prop
    const selectedOptions = useMemo(() => {
        if (!value || !options.length) {
            return undefined
        }

        if (Array.isArray(value)) {
            return multiple ? options.filter((opt) => opt.key != null && value.includes(opt.key)) : undefined
        }

        return !multiple
            ? options.find((opt) => opt.key === value)
                ? [options.find((opt) => opt.key === value)!]
                : undefined
            : undefined
    }, [options, value, multiple])

    const selectedOption = multiple ? undefined : selectedOptions?.[0]

    // Filtered options based on search and selected options
    const filteredOptions = useMemo(() => {
        const lower = search.toLowerCase()
        return options.filter((opt) => {
            const matchesSearch = opt.value.toLowerCase().includes(lower)
            const notSelected = !selectedOptions?.some((s) => s.key === opt.key)
            return matchesSearch && (multiple ? notSelected : true)
        })
    }, [options, search, selectedOptions, multiple])

    // Handle dropdown toggle
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
        (option?: SelectOptionType<T>) => {
            if (!option || option.disabled) {
                return
            }

            let newSelected: Array<SelectOptionType<T>> | undefined

            if (multiple) {
                const isSelected = selectedOptions?.some((s) => s.key === option.key)
                if (isSelected) {
                    return
                }
                newSelected = [...(selectedOptions || []), option]
            } else {
                newSelected = [option]
            }

            onSelect?.(newSelected)
            setSearch('')
            onSearch?.('')
            if (closeOnSelect) {
                setIsOpen(false)
            }
        },
        [multiple, selectedOptions, onSelect, onSearch, closeOnSelect]
    )

    const handleRemove = useCallback(
        (option?: SelectOptionType<T>) => {
            if (!option?.key || !multiple) {
                return
            }
            const newSelected = selectedOptions?.filter((opt) => opt.key !== option.key)
            onSelect?.(newSelected)
        },
        [multiple, selectedOptions, onSelect]
    )

    const handleClear = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            onSelect?.(undefined)
            setSearch('')
            onSearch?.('')
            inputRef.current?.focus()
        },
        [onSelect, onSearch]
    )

    const handleSearchChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value
            setSearch(val)
            onSearch?.(val)
            if (val && !isOpen) {
                setIsOpen(true)
            }
            if (!val && isOpen && !multiple) {
                setIsOpen(false)
            }
        },
        [onSearch, isOpen, multiple]
    )

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && filteredOptions[0] && !filteredOptions[0].disabled) {
                e.preventDefault()
                handleSelect(filteredOptions[0])
            }

            if (e.key === 'Backspace' || e.key === 'Delete') {
                if (!search && multiple && selectedOptions?.length) {
                    e.preventDefault()
                    handleRemove(selectedOptions[selectedOptions.length - 1])
                }

                if (!multiple && selectedOption) {
                    e.preventDefault()
                    onSelect?.(undefined)
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
        [filteredOptions, search, selectedOptions, handleSelect, handleRemove, isOpen, multiple]
    )

    const handleToggleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLSpanElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleDropdown()
            }
            if (e.key === 'Escape' && isOpen) {
                e.preventDefault()
                setIsOpen(false)
            }
        },
        [toggleDropdown, isOpen]
    )

    // Close dropdown on outside click
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
            top: rect.bottom + window.scrollY - (error ? 50 : 34),
            left: rect.left + window.scrollX,
            width: rect.width,
            zIndex: 9999,
            pointerEvents: 'auto' as const
        }
    }, [error])

    const displayValue = multiple ? search : selectedOption?.value || search || ''
    const hasSelection = multiple ? selectedOptions && selectedOptions.length > 0 : !!selectedOption

    return (
        <div className={cn(className, styles.select, required && styles.required, disabled && styles.disabled)}>
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
                aria-multiselectable={multiple}
            >
                <div
                    className={cn(
                        styles.trigger,
                        isOpen && styles.open,
                        isFocused && styles.focused,
                        searchable && styles.searchable
                    )}
                    onClick={() => !disabled && (searchable ? inputRef.current?.focus() : toggleDropdown())}
                >
                    {/* Left part: selected value / search */}
                    <div className={styles.valueContainer}>
                        {/* Icon/Image/Emoji of selected option (only for single) */}
                        {!multiple && selectedOption && (
                            <span className={styles.prefix}>
                                {selectedOption.icon && <Icon name={selectedOption.icon} />}
                                {selectedOption.image && (
                                    <img
                                        alt=''
                                        src={selectedOption.image.src}
                                        className={styles.image}
                                    />
                                )}
                                {selectedOption.emoji && <span className={styles.emoji}>{selectedOption.emoji}</span>}
                            </span>
                        )}

                        {/* Badges of selected options (only for multiple) */}
                        {multiple &&
                            selectedOptions?.map((option) => (
                                <Badge
                                    key={String(option.key ?? option.value)}
                                    className={styles.badge}
                                    label={option.value}
                                    icon={option?.emoji ? <>{option?.emoji}</> : option?.icon}
                                    onClickRemove={() => handleRemove(option)}
                                />
                            ))}

                        {/* Search input only if searchable */}
                        {searchable && (
                            <input
                                ref={inputRef}
                                type='text'
                                value={displayValue}
                                className={styles.search}
                                placeholder={hasSelection ? '' : (placeholder ?? '')}
                                disabled={disabled}
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                aria-autocomplete='list'
                                aria-controls='select-options'
                            />
                        )}

                        {/* Selected value for non-multiple or placeholder for multiple without selection */}
                        {(!multiple || !selectedOptions?.length) && !searchable && (
                            <span className={styles.value}>
                                {selectedOption?.value || (
                                    <span className={styles.placeholder}>{placeholder ?? ''}</span>
                                )}
                            </span>
                        )}
                    </div>

                    {/* Right part: clear / toggle button */}
                    <span className={styles.buttonContainer}>
                        {loading ? (
                            <Spinner />
                        ) : clearable && hasSelection ? (
                            <button
                                type='button'
                                className={styles.clearButton}
                                onClick={handleClear}
                                aria-label='Clear selection'
                                tabIndex={-1}
                            >
                                <Icon name='Close' />
                            </button>
                        ) : (
                            <span
                                role='button'
                                tabIndex={0}
                                className={styles.toggleButton}
                                onClick={toggleDropdown}
                                onKeyDown={handleToggleKeyDown}
                                aria-disabled={disabled}
                                aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
                            >
                                <Icon name={isOpen ? 'KeyboardUp' : 'KeyboardDown'} />
                            </span>
                        )}
                    </span>
                </div>

                {error && <div className={styles.error}>{error}</div>}
            </div>

            {/* Portal with options */}
            {isOpen &&
                portalNode &&
                createPortal(
                    <div style={getPortalStyle()}>
                        <OptionsList<T>
                            id='select-options'
                            options={filteredOptions}
                            selectedOptions={selectedOptions}
                            onOptionSelect={handleSelect}
                            notFoundCaption={notFoundCaption}
                        />
                    </div>,
                    portalNode
                )}
        </div>
    )
}

export default Select
