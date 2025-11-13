import React from 'react'

import { cn } from '../../utils'

import { MessageProps } from './types'

import styles from './styles.module.sass'

export const Message: React.FC<MessageProps> = ({ title, children, type, ...props }) => (
    <section
        {...props}
        className={cn(styles.message, type && styles[type])}
    >
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.content}>{children}</div>}
    </section>
)
