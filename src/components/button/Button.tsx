import React from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'
import { Spinner } from '../spinner'

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
    ...props
}) => {
    const button = (
        <button
            {...props}
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
                !children && !label?.length && styles.noText,
                unstyled && styles.unstyled
            )}
        >
            {loading ? <Spinner className={styles.loader} /> : icon && <Icon name={icon} />}
            {label?.length ? label : children}
        </button>
    )

    return link ? (
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
}
