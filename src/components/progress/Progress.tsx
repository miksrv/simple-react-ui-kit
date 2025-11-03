import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Progress component properties
 */
export interface ProgressProps {
    /** Current progress value (percentage) */
    value?: number
    /** Additional class names for custom styling */
    className?: string
}

export const Progress: React.FC<ProgressProps> = ({ value = 0, className }) => {
    const safeValue = Math.min(Math.max(value, 0), 100)

    return (
        <div className={cn(styles.progress, className)}>
            <div
                className={styles.line}
                style={{ width: `${safeValue}%` }}
            />
        </div>
    )
}
