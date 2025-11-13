import React from 'react'

import { ElementSizeType } from '../../types'

/**
 * InputProps interface, representing the properties for the Input component.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Additional class names for custom styling */
    className?: string
    /** Label text displayed above the input field */
    label?: string
    /** Size of the input field */
    size?: ElementSizeType
    /** Error message displayed below the input field when an error occurs */
    error?: string
}
