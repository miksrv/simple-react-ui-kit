import React from 'react'

import styles from './styles.module.sass'

import Icon, { IconTypes } from '@/icon'
import Spinner from '@/spinner'
import { concatClassNames as cn } from '@/tools'

/**
 * Button component properties
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'content'> {
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
    variant?: 'positive' | 'negative' | 'neutral'
    /** Icon to display inside the button */
    icon?: IconTypes
    /** Content inside the button */
    children?: React.ReactNode
    /** Content to display inside the button (as text or React nodes) */
    content?: React.ReactNode | string
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
    content,
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
                !children && styles.noText
            )}
        >
            {loading ? <Spinner className={styles.loader} /> : icon && <Icon name={icon} />}
            <div>{content ?? children}</div>
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
