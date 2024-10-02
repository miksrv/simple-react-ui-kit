import React from 'react'

import styles from './styles.module.sass'

import { concatClassNames as cn } from '@/tools'

/**
 * Interface for the properties of a container component.
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The title of the container. Displayed at the top of the container */
    title?: string
    /** Additional class names to apply to the container */
    className?: string
    /** An action element, typically a button or link, displayed in the container header */
    action?: React.ReactNode
    /** Custom header content for the container */
    header?: React.ReactNode
    /** The content of the container */
    children?: React.ReactNode
    /** Custom footer content for the container */
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
        {footer}
    </section>
)

export default Container
