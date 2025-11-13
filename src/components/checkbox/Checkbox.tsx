import React, { forwardRef, useEffect, useId, useRef } from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon'

import { CheckboxProps } from './types'

import styles from './styles.module.sass'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, indeterminate, className, disabled, checked, id, ...props }, ref) => {
        const generatedId = useId()
        const inputId = id ?? generatedId
        const inputRef = useRef<HTMLInputElement>(null)

        useEffect(() => {
            if (ref) {
                if (typeof ref === 'function') {
                    ref(inputRef.current)
                } else {
                    ref.current = inputRef.current
                }
            }
        }, [ref])

        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = !!indeterminate
            }
        }, [indeterminate])

        return (
            <div className={cn(styles.checkbox, disabled && styles.disabled, className)}>
                <label
                    htmlFor={inputId}
                    className={styles.label}
                    aria-disabled={disabled}
                >
                    <span
                        className={cn(
                            styles.formField,
                            (checked || indeterminate) && styles.checked,
                            indeterminate && styles.indeterminate
                        )}
                        aria-hidden='true'
                    >
                        {indeterminate ? (
                            <Icon name='CheckboxIndeterminate' />
                        ) : checked ? (
                            <Icon name='CheckboxChecked' />
                        ) : (
                            <Icon name='CheckboxUnchecked' />
                        )}
                    </span>

                    <input
                        {...props}
                        id={inputId}
                        ref={inputRef}
                        type='checkbox'
                        checked={checked}
                        disabled={disabled}
                        className={styles.input}
                        aria-checked={indeterminate ? 'mixed' : checked}
                    />

                    {label && <span className={styles.labelText}>{label}</span>}
                </label>
            </div>
        )
    }
)

Checkbox.displayName = 'Checkbox'
