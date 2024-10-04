import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Skeleton component properties
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Additional class names for custom styling */
    className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ ...props }) => (
    <div
        {...props}
        className={cn(styles.skeleton, props.className)}
    />
)

export default Skeleton
