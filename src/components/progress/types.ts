import React from 'react'

/**
 * Progress component properties
 */
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Current progress value (percentage) */
    value?: number
    /** Height of the progress bar */
    height?: number
    /** Color theme for the progress bar */
    color?: 'main' | 'red' | 'orange' | 'green'
    /** Additional class names for custom styling */
    className?: string
}
