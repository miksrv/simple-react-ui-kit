import React from 'react'

import styles from './styles.module.sass'

import Icon from '@/icon'
import { concatClassNames as cn } from '@/tools'

/**
 * Props for the Checkbox component.
 *
 * @interface CheckboxProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {string | React.ReactNode} [label] - The label for the checkbox, which can be a string or a React node.
 * @property {boolean} [indeterminate] - Indicates if the checkbox is in an indeterminate state.
 */
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode
    indeterminate?: boolean
}

/**
 * A functional component that renders a checkbox with an optional label and support for an indeterminate state.
 *
 * @param label
 * @param indeterminate
 * @param {CheckboxProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered checkbox component.
 */
const Checkbox: React.FC<CheckboxProps> = ({ label, indeterminate, ...props }): JSX.Element => (
    <div className={styles.checkbox}>
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
