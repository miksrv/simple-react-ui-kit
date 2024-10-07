import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Container component properties, representing a flexible layout wrapper
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional title for the container, typically displayed in the header */
    title?: string
    /** Additional class names for custom styling */
    className?: string
    /** Optional action element (button, link, etc.) displayed in the header */
    action?: React.ReactNode
    /** Custom header content, if different from the default title and action */
    header?: React.ReactNode
    /** Main content of the container */
    children?: React.ReactNode
    /** Optional footer content, typically used for additional actions or information */
    footer?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, title, action, header, children, footer, ...props }) => (
    <section
        {...props}
        className={cn(className, styles.container)}
    >
        {(header || title || action) && (
            <div className={styles.header}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {header}
                {action && <div className={styles.actions}>{action}</div>}
            </div>
        )}
        {children}
        {footer && <div className={styles.footer}>{footer}</div>}
    </section>
)

export default Container
