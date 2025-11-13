import React from 'react'

/**
 * Container component properties, representing a flexible layout wrapper
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional title for the container, typically displayed in the header */
    title?: string
    /** Additional class names for custom styling */
    className?: string
    /** Optional action element (button, link, etc.) displayed in the header */
    action?: React.ReactNode
    /** Custom header content, if different from the default title and action */
    header?: React.ReactNode
    /** Main content of the container */
    children?: React.ReactNode
    /** Optional footer content, typically used for additional actions or information */
    footer?: React.ReactNode
}
