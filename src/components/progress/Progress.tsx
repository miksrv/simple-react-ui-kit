import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

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

export const Progress: React.FC<ProgressProps> = ({ value = 0, height = 2, color = 'main', className, ...props }) => {
    const safeValue = Math.min(Math.max(value, 0), 100)

    return (
        <div
            className={cn(styles.progress, className)}
            style={{ height: `${height}px` }}
            {...props}
        >
            <div
                className={cn(styles.line, styles[color])}
                style={{ width: `${safeValue}%` }}
            />
        </div>
    )
}

export default Progress
