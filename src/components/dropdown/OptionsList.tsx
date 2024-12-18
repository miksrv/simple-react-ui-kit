import React from 'react'

import { cn } from '../../utils'
import Icon from '../icon'

import type { DropdownOption } from './Dropdown'
import styles from './styles.module.sass'

interface DropdownProps<T> extends React.HTMLAttributes<HTMLUListElement> {
    notFoundCaption?: string
    options?: DropdownOption<T>[]
    selectedOption?: DropdownOption<T>
    onOptionSelect?: (selectedOption: DropdownOption<T>) => void
}

const OptionsList = <T,>({ notFoundCaption, selectedOption, options, onOptionSelect, ...props }: DropdownProps<T>) => (
    <ul
        className={styles.optionsList}
        style={props.style}
    >
        {options?.map((option, i) => (
            <li
                key={`option-${option.key ?? i}`}
                className={cn(option.key === selectedOption?.key && styles.active, option.disabled && styles.disabled)}
            >
                <button onClick={() => (!option.disabled ? onOptionSelect?.(option) : undefined)}>
                    {option?.icon && <Icon name={option.icon} />}

                    {option?.image && (
                        <img
                            src={option.image.src}
                            alt={''}
                            width={22}
                            height={26}
                        />
                    )}

                    <span>{option.value}</span>
                </button>
            </li>
        ))}

        {!options?.length && <li className={styles.noResult}>{notFoundCaption ?? 'Nothing found'}</li>}
    </ul>
)

export default OptionsList
