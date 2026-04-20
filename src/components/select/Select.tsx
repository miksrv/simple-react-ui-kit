import React, {
    ChangeEvent,
    KeyboardEvent,
    useCallback,
    useEffect,
    useId,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../../utils'
import { Badge } from '../badge'
import { Icon } from '../icon'
import { Spinner } from '../spinner'

import { OptionsList } from './OptionsList'
import { SelectOptionType, SelectProps } from './types'

import styles from './styles.module.sass'

export const Select = <T,>({
    className,
    required,
    disabled,
    multiple = false,
    searchable = false,
    clearable = false,
    loading = false,
    closeOnSelect = true,
    size = 'medium',
    options = [],
    placeholder,
    notFoundCaption,
    label,
    error,
    value,
    onSelect,
    onSearch,
    onOpen,
    ...props
}: SelectProps<T>) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const selectId = useId()
    const optionsListId = `${selectId}-options`
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)
    const [portalStyle, setPortalStyle] = useState<React.CSSProperties>({ visibility: 'hidden' })
    const [positionCalculated, setPositionCalculated] = useState(false)

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

    // Reset highlighted index when dropdown closes or filteredOptions change
    useEffect(() => {
        if (!isOpen) {
            setHighlightedIndex(-1)
        }
    }, [isOpen])

    // Filtered options based on search and selected options
    const filteredOptions = useMemo(() => {
        const lower = search.toLowerCase()
        return options.filter((opt) => {
            const matchesSearch = opt.value.toLowerCase().includes(lower)
            const notSelected = !selectedOptions?.some((s) => s.key === opt.key)
            return matchesSearch && (multiple ? notSelected : true)
        })
    }, [options, search, selectedOptions, multiple])

    // Returns next valid (non-disabled) index in given direction, or current if boundary reached
    const getNextIndex = useCallback(
        (current: number, direction: 1 | -1): number => {
            const len = filteredOptions.length
            if (len === 0) {
                return -1
            }
            let idx = current + direction
            if (idx < 0 || idx >= len) {
                return current
            }
            while (filteredOptions[idx]?.disabled) {
                idx += direction
                if (idx < 0 || idx >= len) {
                    return current
                }
            }
            return idx
        },
        [filteredOptions]
    )

    // True when options list is empty and no search text has been entered.
    // Used to hide the toggle arrow and block dropdown opening in autocomplete mode.
    const isEmpty = options.length === 0 && !search

    // Handle dropdown toggle
    const toggleDropdown = useCallback(() => {
        if (disabled) {
            return
        }
        if (!isOpen && isEmpty) {
            return
        }
        if (!isOpen) {
            onOpen?.()
        }
        setIsOpen(!isOpen)
    }, [disabled, isOpen, isEmpty, onOpen])

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
            setHighlightedIndex(-1)
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
            if (e.key === 'Enter') {
                e.preventDefault()
                const target =
                    highlightedIndex >= 0
                        ? filteredOptions[highlightedIndex]
                        : filteredOptions.find((opt) => !opt.disabled)
                if (target) {
                    handleSelect(target)
                }
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault()
                if (!isOpen) {
                    if (isEmpty) {
                        return
                    }
                    setIsOpen(true)
                    setHighlightedIndex(getNextIndex(-1, 1))
                    return
                }
                setHighlightedIndex((prev) => getNextIndex(prev, 1))
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault()
                if (!isOpen) {
                    return
                }
                setHighlightedIndex((prev) => getNextIndex(prev, -1))
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
        },
        [
            filteredOptions,
            highlightedIndex,
            search,
            selectedOptions,
            selectedOption,
            handleSelect,
            handleRemove,
            isOpen,
            isEmpty,
            multiple,
            onSelect,
            getNextIndex
        ]
    )

    const handleToggleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                if (isOpen && highlightedIndex >= 0) {
                    handleSelect(filteredOptions[highlightedIndex])
                } else {
                    toggleDropdown()
                }
            }
            if (e.key === 'Escape' && isOpen) {
                e.preventDefault()
                setIsOpen(false)
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                if (disabled || isEmpty) {
                    return
                }
                if (!isOpen) {
                    onOpen?.()
                    setIsOpen(true)
                    setHighlightedIndex(getNextIndex(-1, 1))
                    return
                }
                setHighlightedIndex((prev) => getNextIndex(prev, 1))
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault()
                if (!isOpen) {
                    return
                }
                setHighlightedIndex((prev) => getNextIndex(prev, -1))
            }
        },
        [toggleDropdown, isOpen, highlightedIndex, filteredOptions, handleSelect, disabled, isEmpty, onOpen, getNextIndex]
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

    const updatePosition = useCallback(() => {
        if (!rootRef.current) {
            setPortalStyle({ visibility: 'hidden' })
            setPositionCalculated(false)
            return
        }
        const rect = rootRef.current.getBoundingClientRect()
        setPortalStyle({
            position: 'absolute' as const,
            top: rect.bottom + window.scrollY - 34, // -1px to overlap border
            left: rect.left + window.scrollX,
            width: rect.width,
            zIndex: 9999,
            pointerEvents: 'auto' as const,
            visibility: 'visible' as const
        })
        setPositionCalculated(true)
    }, [])

    // Calculate position synchronously before paint to prevent flicker
    useLayoutEffect(() => {
        if (isOpen) {
            updatePosition()
        } else {
            setPositionCalculated(false)
        }
    }, [isOpen, updatePosition])

    // Update position on scroll and resize
    useEffect(() => {
        if (!isOpen) {
            return
        }

        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', updatePosition, { capture: true, passive: true })

        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [isOpen, updatePosition])

    const displayValue = multiple ? search : selectedOption?.value || search || ''
    const hasSelection = multiple ? selectedOptions && selectedOptions.length > 0 : !!selectedOption

    return (
        <div
            className={cn(className, styles.select, required && styles.required, disabled && styles.disabled)}
            {...props}
        >
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
                    error && styles.error,
                    size && styles[size]
                )}
                role='combobox'
                aria-expanded={isOpen}
                aria-haspopup='listbox'
                aria-disabled={disabled}
                aria-multiselectable={multiple}
                aria-activedescendant={
                    isOpen && highlightedIndex >= 0 ? `${optionsListId}-option-${highlightedIndex}` : undefined
                }
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
                                aria-controls={optionsListId}
                                aria-activedescendant={
                                    isOpen && highlightedIndex >= 0
                                        ? `${optionsListId}-option-${highlightedIndex}`
                                        : undefined
                                }
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
                        ) : isEmpty ? null : (
                            <button
                                type='button'
                                tabIndex={0}
                                className={styles.toggleButton}
                                onClick={toggleDropdown}
                                onKeyDown={handleToggleKeyDown}
                                aria-disabled={disabled}
                                aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
                            >
                                <Icon name={isOpen ? 'KeyboardUp' : 'KeyboardDown'} />
                            </button>
                        )}
                    </span>
                </div>

                {error && <div className={styles.error}>{error}</div>}
            </div>

            {/* Portal with options */}
            {isOpen &&
                portalNode &&
                createPortal(
                    <div
                        style={{
                            ...portalStyle,
                            visibility: positionCalculated ? 'visible' : 'hidden'
                        }}
                    >
                        <OptionsList<T>
                            id={optionsListId}
                            options={filteredOptions}
                            selectedOptions={selectedOptions}
                            highlightedIndex={highlightedIndex}
                            onOptionSelect={handleSelect}
                            notFoundCaption={notFoundCaption}
                        />
                    </div>,
                    portalNode
                )}
        </div>
    )
}
