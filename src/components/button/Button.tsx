import React from 'react'

import { cn } from '../../utils'
import Icon, { IconTypes } from '../icon'
import Spinner from '../spinner'

import styles from './styles.module.sass'

/**
 * Button component properties
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Additional class names for custom styling */
    className?: string
    /** URL for link if button acts as a link */
    link?: string
    /** Set to true to prevent search engines from indexing the button (if used as a link) */
    noIndex?: boolean
    /** Whether the button takes up the full width of the container */
    stretched?: boolean
    /** Show loading spinner instead of button content */
    loading?: boolean
    /** Size of the button */
    size?: 'small' | 'medium'
    /** Visual style of the button */
    mode?: 'primary' | 'secondary' | 'outline' | 'link'
    /** Button variant for styling */
    variant?: 'positive' | 'negative'
    /** Icon to display inside the button */
    icon?: IconTypes
    /** Content inside the button */
    children?: React.ReactNode
    /** Content to display inside the button (as text) */
    label?: string
}

const Button: React.FC<ButtonProps> = ({
    className,
    link,
    noIndex,
    stretched,
    loading,
    size,
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
                !children && styles.noText
            )}
        >
            {loading ? <Spinner className={styles.loader} /> : icon && <Icon name={icon} />}
            {label?.length ? label : children}
        </button>
    )

    return link ? (
        <a
            className={styles.buttonLink}
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

export default Button
