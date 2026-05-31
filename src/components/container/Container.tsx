import React, { useId } from 'react'

import { cn } from '../../utils'

import { ContainerProps } from './types'

import styles from './styles.module.sass'

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
    ({ className, title, action, header, children, footer, ...props }, ref) => {
        const generatedId = useId()
        const titleId = `${generatedId}-title`

        return (
            <section
                {...props}
                ref={ref}
                className={cn(styles.container, className)}
                aria-labelledby={title ? titleId : props['aria-labelledby']}
            >
                {(header || title || action) && (
                    <div className={styles.header}>
                        {title && (
                            <h2
                                id={titleId}
                                className={styles.title}
                            >
                                {title}
                            </h2>
                        )}
                        {header}
                        {action && <div className={styles.actions}>{action}</div>}
                    </div>
                )}
                {children}
                {footer && <div className={styles.footer}>{footer}</div>}
            </section>
        )
    }
)

Container.displayName = 'Container'
