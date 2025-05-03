import React from 'react'

import { ElementSizeType } from '../../types'
import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * InputProps interface, representing the properties for the Input component.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Additional class names for custom styling */
    className?: string
    /** Label text displayed above the input field */
    label?: string
    /** Size of the input field */
    size?: ElementSizeType
    /** Error message displayed below the input field when an error occurs */
    error?: string
}

const Input: React.FC<InputProps> = ({ className, label, error, size = 'medium', ...props }) => (
    <div
        className={cn(
            className,
            styles.inputContainer,
            error && styles.error,
            size && styles[size],
            props.required && styles.required,
            props.disabled && styles.disabled
        )}
    >
        {label && <label className={styles.label}>{label}</label>}

        <span className={styles.formField}>
            <input
                {...props}
                className={styles.input}
            />
        </span>

        {!!error?.length && <div className={styles.error}>{error}</div>}
    </div>
)

export default Input
