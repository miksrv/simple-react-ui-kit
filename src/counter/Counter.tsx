import React from 'react'

import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/functions/helpers'

interface CounterProps {
    value?: number
    className?: string
}

const Counter: React.FC<CounterProps> = ({ value, className }) =>
    value ? <div className={cn(className, styles.counter)}>{value}</div> : <></>

export default Counter
