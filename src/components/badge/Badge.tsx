import React from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'
import { normalizeTooltip, useTooltip } from '../tooltip'

import { BadgeProps } from './types'

import styles from './styles.module.sass'

export const Badge: React.FC<BadgeProps> = ({
    className,
    icon,
    size = 'medium',
    label,
    onClickRemove,
    tooltip,
    ...props
}) => {
    const { triggerProps, tooltip: tooltipElement } = useTooltip<HTMLDivElement>(normalizeTooltip(tooltip), props)

    return (
        <>
            <div
                className={cn(styles.badge, size && styles[size], className)}
                {...props}
                {...triggerProps}
            >
                {icon &&
                    (React.isValidElement(icon) ? <span className={styles.icon}>{icon}</span> : <Icon name={icon} />)}
                <span className={styles.content}>{label}</span>
                {onClickRemove && (
                    <button
                        type='button'
                        className={styles.close}
                        aria-label={label != null ? `Remove ${label}` : 'Remove'}
                        onClick={() => onClickRemove?.(label)}
                    >
                        <Icon name={'Close'} />
                    </button>
                )}
            </div>
            {tooltipElement}
        </>
    )
}
