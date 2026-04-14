import React, { useCallback, useEffect, useRef } from 'react'

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
            {label && <label className={styles.label}>{label}</label>}

            <span className={cn(styles.formField, mode && styles[mode])}>
                <textarea
                    {...props}
                    ref={textareaRef}
                    className={styles.textarea}
                    style={{ resize: autoResize ? 'none' : (resize ?? 'vertical'), ...style }}
                    onChange={handleChange}
                />
            </span>

            {!!error?.length && <div className={styles.error}>{error}</div>}
        </div>
    )
}
