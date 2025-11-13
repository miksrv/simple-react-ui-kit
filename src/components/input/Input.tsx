import React from 'react'

import { cn } from '../../utils'

import { InputProps } from './types'

import styles from './styles.module.sass'

export const Input: React.FC<InputProps> = ({ className, label, error, size = 'medium', ...props }) => (
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
