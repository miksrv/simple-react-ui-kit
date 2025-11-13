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
    icon,
    children,
    label,
    ...props
}) => {
    const button = (
        <button
            {...props}
            type={props.type ?? 'button'}
            className={cn(
                className,
                styles.button,
                mode && styles[mode],
                variant && styles[variant],
                size && styles[size],
                stretched && styles.stretched,
                loading && styles.loading,
                !children && !label?.length && styles.noText
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
            href={link}
            title={''}
            rel={noIndex ? 'noindex nofollow' : ''}
        >
            {button}
        </a>
    ) : (
        button
    )
}
