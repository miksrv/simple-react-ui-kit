import React from 'react'

import { ElementSizeType } from '../../types'
import { IconTypes } from '../icon'

/**
 * InputProps interface, representing the properties for the Input component.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Additional class names for custom styling */
    className?: string
    /** Label text displayed above the input field */
    label?: string
    /** Visual style of the button */
    mode?: 'primary' | 'ghost'
    /** Size of the input field */
    size?: ElementSizeType
    /** Error message displayed below the input field when an error occurs */
    error?: string
    /** Shows a clear button when the input has a value */
    clearable?: boolean
    /** Icon to display on the left side of the input */
    icon?: IconTypes
}
