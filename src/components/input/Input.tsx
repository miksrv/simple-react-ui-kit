import React, { useId } from 'react'

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
    icon,
    value,
    onChange,
    ...props
}) => {
    const generatedId = useId()
    const inputId = props.id ?? generatedId
    const errorId = `${inputId}-error`
    // `error` can be a message string (border + text below) or a bare `true`
    // (border only, e.g. for a field validated as part of a group where the
    // message is shown once elsewhere) — only a non-empty string renders the text.
    const errorMessage = typeof error === 'string' ? error : undefined
    const hasError = errorMessage ? errorMessage.length > 0 : !!error

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
            {label && (
                <label
                    htmlFor={inputId}
                    className={styles.label}
                >
                    {label}
                </label>
            )}

            <span className={cn(styles.formField, mode && styles[mode])}>
                {icon && (
                    <span className={styles.iconLeft}>
                        <Icon name={icon} />
                    </span>
                )}
                <input
                    {...props}
                    id={inputId}
                    className={cn(styles.input, showClearButton && styles.withClearButton, icon && styles.withIcon)}
                    value={value}
                    onChange={onChange}
                    aria-invalid={hasError || undefined}
                    aria-describedby={errorMessage ? errorId : props['aria-describedby']}
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

            {errorMessage && (
                <div
                    id={errorId}
                    className={styles.error}
                    role='alert'
                >
                    {errorMessage}
                </div>
            )}
        </div>
    )
}
