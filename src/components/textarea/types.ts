import React from 'react'

import { ElementSizeType } from '../../types'

/**
 * TextAreaProps interface, representing the properties for the TextArea component.
 */
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    /** Additional class names for custom styling */
    className?: string
    /** Label text displayed above the textarea */
    label?: string
    /** Visual style of the textarea */
    mode?: 'primary' | 'ghost'
    /** Size of the textarea field */
    size?: ElementSizeType
    /** Error message displayed below the textarea when an error occurs */
    error?: string
    /** Controls resize behavior of the textarea */
    resize?: 'none' | 'vertical' | 'horizontal' | 'both'
    /** When true, the textarea height grows automatically to fit its content */
    autoResize?: boolean
}
