import React from 'react'

import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/tools'

/**
 * Props for the Input component.
 *
 * @interface InputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {string} [label] - The label for the input field.
 * @property {string} [error] - Error message to display below the input.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

/**
 * A functional component that renders an input field with an optional label and error message.
 * @param label
 * @param error
 * @param props
 * @returns {JSX.Element} The rendered input component.
 */
const Input: React.FC<InputProps> = ({ label, error, ...props }: InputProps): JSX.Element => (
    <div
        className={cn(
            styles.input,
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
    </div>
)

export default Input
