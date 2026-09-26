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
    const hasText = !!children || !!label?.length
    // An icon-only button without its own name is named by its tooltip, so the tooltip must not
    // also describe it. With `aria-labelledby` the button already has a name: keep the description.
    const hasOwnName = props['aria-label'] != null || props['aria-labelledby'] != null
    const ariaLabel = hasOwnName || hasText ? props['aria-label'] : tooltipOptions?.content
    const { triggerProps, tooltip: tooltipElement } = useTooltip<HTMLButtonElement>(
        tooltipOptions && { ...tooltipOptions, describeTrigger: ariaLabel !== tooltipOptions.content },
        props
    )

    const button = (
        <button
            {...props}
            {...triggerProps}
            aria-label={ariaLabel}
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
