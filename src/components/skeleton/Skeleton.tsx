import React from 'react'

import { cn } from '../../utils'

import { SkeletonProps } from './types'

import styles from './styles.module.sass'

export const Skeleton: React.FC<SkeletonProps> = ({ ...props }) => (
    <div
        {...props}
        className={cn(styles.skeleton, props.className)}
    />
)
