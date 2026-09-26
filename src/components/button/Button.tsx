import React from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'
import { Spinner } from '../spinner'
import { normalizeTooltip, useTooltip } from '../tooltip'

import { ButtonProps } from './types'

import styles from './styles.module.sass'

export const Button: React.FC<ButtonProps> = ({
    className,
    link,
    noIndex,
    stretched,
    loading,
    size = 'medium',
    mode = 'primary',
    variant,
    unstyled,
    icon,
    children,
    label,
    tooltip,
    ...props
}) => {
    const tooltipOptions = normalizeTooltip(tooltip)
    const { triggerProps, tooltip: tooltipElement } = useTooltip<HTMLButtonElement>(tooltipOptions, props)
    const hasText = !!children || !!label?.length

    const button = (
        <button
            {...props}
            {...triggerProps}
            aria-label={props['aria-label'] ?? (!hasText ? tooltipOptions?.content : undefined)}
            type={props.type ?? 'button'}
            aria-busy={loading || undefined}
            className={cn(
                className,
                styles.button,
                mode && !unstyled && styles[mode],
                variant && !unstyled && styles[variant],
                size && !unstyled && styles[size],
                stretched && styles.stretched,
                loading && styles.loading,
                !hasText && styles.noText,
                unstyled && styles.unstyled
            )}
        >
            {loading ? <Spinner className={styles.loader} /> : icon && <Icon name={icon} />}
            {label?.length ? label : children}
        </button>
    )

    const content = link ? (
        <a
            style={props?.style}
            className={cn(styles.buttonLink, props?.disabled && styles.disabled)}
            href={props?.disabled ? undefined : link}
            title={''}
            rel={noIndex ? 'noindex nofollow' : ''}
            aria-disabled={props?.disabled ? true : undefined}
            tabIndex={props?.disabled ? -1 : undefined}
        >
            {button}
        </a>
    ) : (
        button
    )

    return (
        <>
            {content}
            {tooltipElement}
        </>
    )
}
