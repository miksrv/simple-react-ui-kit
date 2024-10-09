import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Message component properties
 */
export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Type of the message that defines the visual style ('negative', 'positive', 'warning', or 'info') */
    type?: 'error' | 'warning' | 'success' | 'info'
    /** Title to be displayed at the top of the message */
    title?: string
    /** Content or children elements inside the message */
    children?: React.ReactNode
}

const Message: React.FC<MessageProps> = ({ title, children, type, ...props }) => (
    <section
        {...props}
        className={cn(styles.message, type && styles[type])}
    >
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.content}>{children}</div>}
    </section>
)

export default Message
