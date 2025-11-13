import React from 'react'

import { IconTypes } from '../icon'

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

/** OptionsList component properties */
export interface OptionsListProps<T> extends React.HTMLAttributes<HTMLUListElement> {
    /** Text to display when no options are found */
    notFoundCaption?: string
    /** List of selectable options */
    options?: Array<SelectOptionType<T>>
    /** Currently selected options (array for multi-select, single for regular) */
    selectedOptions?: Array<SelectOptionType<T>>
    /** Index of the highlighted option (for keyboard navigation) */
    highlightedIndex?: number
    /** Callback triggered when an option is selected */
    onOptionSelect?: (option: SelectOptionType<T>) => void
}

/** Represents a selectable option in the Select component */
export type SelectOptionType<T> = {
    /** Unique key for the option */
    key: T
    /** Display value for the option */
    value: string
    /** Optional icon to display with the option */
    icon?: IconTypes
    /** Optional image to display with the option */
    image?: MediaImage
    /** Optional emoji to display with the option */
    emoji?: string
    /** Whether the option is disabled */
    disabled?: boolean
}
