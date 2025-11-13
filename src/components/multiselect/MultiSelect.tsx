import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../../utils'
import Badge from '../badge'
import { DropdownOption } from '../dropdown'
import OptionsList from '../dropdown/OptionsList'
import Icon from '../icon'
import Spinner from '../spinner'

import styles from './styles.module.sass'

/**
 * MultiSelect component properties
 */
export interface MultiSelectProps<T> {
    /** Additional class names for custom styling */
    className?: string
    /** Array of options to display in the multiselect */
    options?: Array<DropdownOption<T>>
    /** Mark the multiselect as required */
    required?: boolean
    /** Disable the multiselect */
    disabled?: boolean
    /** Show loading spinner */
    loading?: boolean
    /** Whether the dropdown should close after selecting an option */
    closeOnSelect?: boolean
    /** Placeholder text to display when no option is selected */
    placeholder?: string
    /** Text to display if no options are found */
    notFoundCaption?: string
    /** Label text for the multiselect */
    label?: string
    /** Error message to display when validation fails */
    error?: string
    /** Currently selected values (keys) in the multiselect */
    value?: T[]
    /** Callback triggered when options are selected */
    onSelect?: (selectedOptions: Array<DropdownOption<T>> | undefined) => void
    /** Callback triggered when a search is made */
    onSearch?: (text?: string) => void
    /** Callback triggered when the dropdown is opened */
    onOpen?: () => void
}

const MultiSelect = <T,>({
    className,
    options = [],
    required,
    disabled,
    loading = false,
    closeOnSelect = true,
    placeholder,
    notFoundCaption,
    label,
    error,
    value,
    onSelect,
    onSearch,
    onOpen
}: MultiSelectProps<T>) => {
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

    const selectedOptions = useMemo(() => {
        if (!value || !options.length) {
            return undefined
        }
        return options.filter((opt) => opt.key != null && value.includes(opt.key))
    }, [options, value])

    const filteredOptions = useMemo(() => {
        return options.filter(
            (opt) =>
                opt.value.toLowerCase().includes(search.toLowerCase()) &&
                !selectedOptions?.some((s) => s.key === opt.key)
        )
    }, [options, search, selectedOptions])

    const isOptionSelected = useCallback(
        (option?: DropdownOption<T>) => option?.key != null && value?.includes(option.key),
        [value]
    )

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
            if (!option || isOptionSelected(option) || option.disabled) {
                return
            }

            const newSelected = [...(selectedOptions || []), option]
            onSelect?.(newSelected)
            setSearch('')
            onSearch?.('')
            if (closeOnSelect) {
                setIsOpen(false)
            }
        },
        [selectedOptions, isOptionSelected, onSelect, onSearch, closeOnSelect]
    )

    const handleRemove = useCallback(
        (option?: DropdownOption<T>) => {
            if (!option?.key) {
                return
            }
            const newSelected = selectedOptions?.filter((opt) => opt.key !== option.key)
            onSelect?.(newSelected)
        },
        [selectedOptions, onSelect]
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
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && filteredOptions[0] && search && !filteredOptions[0].disabled) {
                e.preventDefault()
                handleSelect(filteredOptions[0])
            }

            if ((e.key === 'Backspace' || e.key === 'Delete') && !search && selectedOptions?.length) {
                e.preventDefault()
                handleRemove(selectedOptions[selectedOptions.length - 1])
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
        [filteredOptions, search, selectedOptions, handleSelect, handleRemove, isOpen]
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
        <div className={cn(className, styles.multiselect, required && styles.required, disabled && styles.disabled)}>
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
                <div
                    className={cn(styles.searchContainer, isOpen && styles.open, isFocused && styles.focused)}
                    onClick={() => !disabled && inputRef.current?.focus()}
                >
                    <div className={styles.controlsContainer}>
                        {selectedOptions?.map((option) => (
                            <Badge
                                key={String(option.key ?? option.value)}
                                className={styles.badge}
                                label={option.value}
                                icon={option.icon}
                                onClickRemove={() => handleRemove(option)}
                            />
                        ))}

                        <input
                            ref={inputRef}
                            type='text'
                            value={search}
                            className={styles.searchInput}
                            placeholder={selectedOptions?.length ? '' : (placeholder ?? '')}
                            disabled={disabled}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            aria-autocomplete='list'
                            aria-controls='multiselect-options'
                        />
                    </div>

                    <span className={styles.buttonContainer}>
                        {loading ? (
                            <Spinner />
                        ) : (
                            <span
                                role='button'
                                tabIndex={0}
                                className={styles.toggleButton}
                                onClick={toggleDropdown}
                                onKeyDown={handleToggleKeyDown}
                                aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
                            >
                                <Icon name={isOpen ? 'KeyboardUp' : 'KeyboardDown'} />
                            </span>
                        )}
                    </span>
                </div>

                {error && <div className={styles.error}>{error}</div>}
            </div>

            {/* Портал */}
            {isOpen &&
                portalNode &&
                createPortal(
                    <div style={getPortalStyle()}>
                        <OptionsList<T>
                            id='multiselect-options'
                            options={filteredOptions}
                            onOptionSelect={handleSelect}
                            notFoundCaption={notFoundCaption}
                        />
                    </div>,
                    portalNode
                )}
        </div>
    )
}

export default MultiSelect
