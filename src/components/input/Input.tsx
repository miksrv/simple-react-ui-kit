import React from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'

import { InputProps } from './types'

import styles from './styles.module.sass'

export const Input: React.FC<InputProps> = ({
    className,
    label,
    error,
    mode = 'primary',
    size = 'medium',
    clearable,
    value,
    onChange,
    ...props
}) => {
    const handleClear = () => {
        if (onChange) {
            const syntheticEvent = {
                target: { value: '' }
            } as React.ChangeEvent<HTMLInputElement>
            onChange(syntheticEvent)
        }
    }

    const showClearButton = !!(clearable && value && !props.disabled)

    return (
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

            <span className={cn(styles.formField, mode && styles[mode])}>
                <input
                    {...props}
                    className={cn(styles.input, showClearButton && styles.withClearButton)}
                    value={value}
                    onChange={onChange}
                />
                {showClearButton && (
                    <button
                        type='button'
                        className={styles.clearButton}
                        onClick={handleClear}
                        aria-label='Clear input'
                    >
                        <Icon name='Close' />
                    </button>
                )}
            </span>

            {!!error?.length && <div className={styles.error}>{error}</div>}
        </div>
    )
}
