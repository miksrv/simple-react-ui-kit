import React from 'react'

import type { DropdownOption } from './Dropdown'
import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/tools'

interface DropdownProps {
    options?: DropdownOption[]
    selectedOption?: DropdownOption
    onSelect?: (selectedOption: DropdownOption) => void
}

const OptionsList: React.FC<DropdownProps> = ({ selectedOption, options, onSelect }) => (
    <ul className={styles.optionsList}>
        {options?.map((option) => (
            <li
                key={option.key}
                className={cn(option.key === selectedOption?.key && styles.active, option.disabled && styles.disabled)}
            >
                <button onClick={() => (!option.disabled ? onSelect?.(option) : undefined)}>
                    {option.image && (
                        <img
                            src={option.image}
                            alt={''}
                            width={22}
                            height={26}
                        />
                    )}
                    <span>{option.value}</span>
                </button>
            </li>
        ))}
    </ul>
)

export default OptionsList
