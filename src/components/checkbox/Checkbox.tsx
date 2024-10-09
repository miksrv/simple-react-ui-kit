import React from 'react'

import { cn } from '../../utils'
import Icon from '../icon'

import styles from './styles.module.sass'

/**
 * Checkbox component properties
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Label for the checkbox (can be a string or a React node) */
    label?: string | React.ReactNode
    /** Set to true for an indeterminate state (partially checked) */
    indeterminate?: boolean
    /** Additional class names for custom styling */
    className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, indeterminate, ...props }) => (
    <div className={cn(styles.checkbox, props.disabled && styles.disabled)}>
        <div className={cn(styles.formField, (props.checked || indeterminate) && styles.checked)}>
            {indeterminate ? (
                <Icon name={'CheckboxIndeterminate'} />
            ) : props.checked ? (
                <Icon name={'CheckboxChecked'} />
            ) : (
                <Icon name={'CheckboxUnchecked'} />
            )}
            <input
                {...props}
                type={'checkbox'}
            />
        </div>
        {label && <label htmlFor={props.id}>{label}</label>}
    </div>
)

export default Checkbox
