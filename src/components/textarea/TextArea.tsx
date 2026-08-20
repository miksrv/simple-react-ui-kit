import React, { useCallback, useEffect, useId, useRef } from 'react'

import { cn } from '../../utils'

import { TextAreaProps } from './types'

import styles from './styles.module.sass'

export const TextArea: React.FC<TextAreaProps> = ({
    className,
    label,
    error,
    mode = 'primary',
    size = 'medium',
    resize,
    autoResize,
    style,
    onChange,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const generatedId = useId()
    const textareaId = props.id ?? generatedId
    const errorId = `${textareaId}-error`
    // `error` can be a message string (border + text below) or a bare `true`
    // (border only, e.g. for a field validated as part of a group where the
    // message is shown once elsewhere) — only a non-empty string renders the text.
    const errorMessage = typeof error === 'string' ? error : undefined
    const hasError = errorMessage ? errorMessage.length > 0 : !!error

    const adjustHeight = useCallback(() => {
        const el = textareaRef.current
        if (!el) {
            return
        }
        el.style.height = 'auto'
        el.style.height = `${el.scrollHeight}px`
    }, [])

    useEffect(() => {
        if (autoResize) {
            adjustHeight()
        }
    }, [autoResize, adjustHeight, props.value, props.defaultValue])

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (autoResize) {
                adjustHeight()
            }
            onChange?.(e)
        },
        [autoResize, adjustHeight, onChange]
    )

    return (
        <div
            className={cn(
                className,
                styles.textAreaContainer,
                error && styles.error,
                size && styles[size],
                props.required && styles.required,
                props.disabled && styles.disabled
            )}
        >
            {label && (
                <label
                    htmlFor={textareaId}
                    className={styles.label}
                >
                    {label}
                </label>
            )}

            <span className={cn(styles.formField, mode && styles[mode])}>
                <textarea
                    {...props}
                    id={textareaId}
                    ref={textareaRef}
                    className={styles.textarea}
                    style={{ resize: autoResize ? 'none' : (resize ?? 'vertical'), ...style }}
                    onChange={handleChange}
                    aria-invalid={hasError || undefined}
                    aria-describedby={errorMessage ? errorId : props['aria-describedby']}
                />
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
