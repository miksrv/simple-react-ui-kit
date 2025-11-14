import React, { useCallback, useEffect, useRef } from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'

import { OptionsListProps, SelectOptionType } from './types'

import styles from './styles.module.sass'

export const OptionsList = <T,>({
    notFoundCaption = 'Nothing found',
    options = [],
    selectedOptions,
    highlightedIndex = -1,
    onOptionSelect,
    className,
    ...props
}: OptionsListProps<T>) => {
    const listRef = useRef<HTMLUListElement>(null)
    const itemRefs = useRef<Map<number, HTMLLIElement>>(new Map())

    // Auto-scroll to highlighted item
    useEffect(() => {
        if (highlightedIndex < 0 || !listRef.current) {
            return
        }

        const item = itemRefs.current.get(highlightedIndex)
        if (item) {
            const listRect = listRef.current.getBoundingClientRect()
            const itemRect = item.getBoundingClientRect()

            if (itemRect.bottom > listRect.bottom) {
                listRef.current.scrollTop += itemRect.bottom - listRect.bottom + 8
            } else if (itemRect.top < listRect.top) {
                listRef.current.scrollTop -= listRect.top - itemRect.top + 8
            }
        }
    }, [highlightedIndex])

    const handleClick = useCallback(
        (option: SelectOptionType<T>) => {
            if (!option.disabled) {
                onOptionSelect?.(option)
            }
        },
        [onOptionSelect]
    )

    const isSelected = useCallback(
        (option: SelectOptionType<T>) => selectedOptions?.some((s) => s.key === option.key),
        [selectedOptions]
    )

    return (
        <ul
            ref={listRef}
            role='listbox'
            aria-multiselectable={Array.isArray(selectedOptions)}
            className={cn(styles.optionsList, className)}
            style={props.style}
            tabIndex={-1}
        >
            {options.map((option, index) => {
                const selected = isSelected(option)
                const highlighted = index === highlightedIndex

                return (
                    <li
                        key={String(option.key ?? option.value)}
                        ref={(el) => {
                            if (el) {
                                itemRefs.current.set(index, el)
                            } else {
                                itemRefs.current.delete(index)
                            }
                        }}
                        role='option'
                        aria-selected={selected}
                        aria-disabled={option.disabled}
                        className={cn(
                            styles.option,
                            selected && styles.active,
                            option.disabled && styles.disabled,
                            highlighted && styles.highlighted
                        )}
                    >
                        <button
                            type='button'
                            disabled={option.disabled}
                            className={styles.optionButton}
                            onClick={() => handleClick(option)}
                        >
                            {option.icon && <Icon name={option.icon} />}
                            {option.image && (
                                <img
                                    src={option.image.src}
                                    alt=''
                                    width={22}
                                    height={26}
                                    className={styles.image}
                                />
                            )}
                            {option.emoji && <span className={styles.emoji}>{option.emoji}</span>}
                            <span className={styles.label}>{option.value}</span>
                        </button>
                    </li>
                )
            })}

            {options.length === 0 && (
                <li
                    className={styles.noResult}
                    role='status'
                    aria-live='polite'
                >
                    {notFoundCaption}
                </li>
            )}
        </ul>
    )
}
