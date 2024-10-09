import React from 'react'

import Icon, { IconTypes } from '../icon'

import styles from './styles.module.sass'

/**
 * Badge component properties
 */
export interface BadgeProps {
    /** Unique key for identifying the badge */
    key?: string | number
    /** Text label to display inside the badge */
    label?: string | number
    /** Icon to display alongside the badge label */
    icon?: IconTypes
    /** Callback function to handle badge removal when the remove button is clicked */
    onClickRemove?: (key?: string | number) => void
}

const Badge: React.FC<BadgeProps> = ({ key, icon, label, onClickRemove }) => (
    <div className={styles.badge}>
        {icon && <Icon name={icon} />}
        <span className={styles.content}>{label}</span>
        {onClickRemove && (
            <button
                className={styles.close}
                onClick={() => onClickRemove?.(key ?? label)}
            >
                <Icon name={'Close'} />
            </button>
        )}
    </div>
)

export default Badge
