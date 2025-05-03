import React from 'react'

import { ElementSizeType } from '../../types'
import { cn } from '../../utils'
import Icon, { IconTypes } from '../icon'

import styles from './styles.module.sass'

/**
 * Badge component properties
 */
export interface BadgeProps {
    /** Additional class names for custom styling */
    className?: string
    /** Text label to display inside the badge */
    label?: string | number
    /** Icon to display alongside the badge label */
    icon?: IconTypes
    /** Size of the badge */
    size?: ElementSizeType
    /** Callback function to handle badge removal when the remove button is clicked */
    onClickRemove?: (key?: string | number) => void
}

const Badge: React.FC<BadgeProps> = ({ className, icon, size = 'medium', label, onClickRemove }) => (
    <div className={cn(className, styles.badge, size && styles[size])}>
        {icon && <Icon name={icon} />}
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

export default Badge
