import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Progress component properties
 */
export interface ProgressProps {
    /** Current progress value (percentage) */
    value?: number
    /** Color theme for the progress bar */
    color?: 'main' | 'red' | 'orange' | 'green'
    /** Additional class names for custom styling */
    className?: string
}

export const Progress: React.FC<ProgressProps> = ({ value = 0, color = 'main', className }) => {
    const safeValue = Math.min(Math.max(value, 0), 100)

    return (
        <div className={cn(styles.progress, className)}>
            <div
                className={cn(styles.line, styles[color])}
                style={{ width: `${safeValue}%` }}
            />
        </div>
    )
}

export default Progress
