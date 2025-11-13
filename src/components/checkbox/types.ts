import React from 'react'

/** Checkbox component properties */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Label for the checkbox (can be a string or a React node) */
    label?: string | React.ReactNode
    /** Set to true for an indeterminate state (partially checked) */
    indeterminate?: boolean
    /** Additional class names for custom styling */
    className?: string
}
