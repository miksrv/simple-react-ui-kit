import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * InputProps interface, representing the properties for the Input component.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Label text displayed above the input field */
    label?: string
    /** Error message displayed below the input field when an error occurs */
    error?: string
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
    <div
        className={cn(
            styles.inputContainer,
            error && styles.error,
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
