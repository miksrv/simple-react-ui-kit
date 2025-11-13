import React from 'react'

import { cn } from '../../utils'
import Icon from '../icon'

import { BadgeProps } from './types'

import styles from './styles.module.sass'

export const Badge: React.FC<BadgeProps> = ({ className, icon, size = 'medium', label, onClickRemove, ...props }) => (
    <div
        className={cn(className, styles.badge, size && styles[size])}
        {...props}
    >
        {icon && (React.isValidElement(icon) ? <span className={styles.icon}>{icon}</span> : <Icon name={icon} />)}
        <span className={styles.content}>{label}</span>
        {onClickRemove && (
            <button
                className={styles.close}
                onClick={() => onClickRemove?.(label)}
            >
                <Icon name={'Close'} />
            </button>
        )}
    </div>
)
