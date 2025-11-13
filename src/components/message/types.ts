import React from 'react'

/**
 * Message component properties
 */
export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Type of the message that defines the visual style ('negative', 'positive', 'warning', or 'info') */
    type?: 'error' | 'warning' | 'success' | 'info'
    /** Title to be displayed at the top of the message */
    title?: string
    /** Content or children elements inside the message */
    children?: React.ReactNode
}
