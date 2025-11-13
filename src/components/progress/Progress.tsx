import React from 'react'

import { cn } from '../../utils'

import { ProgressProps } from './types'

import styles from './styles.module.sass'

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
