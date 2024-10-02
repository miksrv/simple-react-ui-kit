import React, { useEffect, useRef, useState } from 'react'

import styles from './styles.module.sass'

import Icon from '@/icon'

/**
 * Dialog component properties
 */
export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
    /** Whether the dialog is open or closed */
    open?: boolean
    /** Header text for the dialog */
    header?: string
    /** Height for the content area of the dialog (e.g., in 'px', 'rem', etc.) */
    contentHeight?: string
    /** Maximum width for the dialog (e.g., in 'px', 'rem', etc.) */
    maxWidth?: string
    /** Text for the back link (if applicable) */
    backLinkCaption?: string
    /** Show or hide the back link in the dialog */
    showBackLink?: boolean
    /** Actions or buttons to be displayed at the bottom of the dialog */
    actions?: React.ReactNode
    /** Content inside the dialog */
    children?: React.ReactNode
    /** Callback function triggered when the back link is clicked */
    onBackClick?: () => void
    /** Callback function triggered when the dialog is closed */
    onCloseDialog?: () => void
}

const Dialog: React.FC<DialogProps> = ({
    open,
    header,
    contentHeight,
    maxWidth = '500px',
    backLinkCaption,
    showBackLink,
    actions,
    children,
    onBackClick,
    onCloseDialog,
    ...props
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [dialogStyle, setDialogStyle] = useState({})

    const handleResize = () => {
        // const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // const dialogWidth = dialogRef?.current?.offsetWidth || 0
        const dialogHeight = dialogRef.current?.offsetHeight || 0

        // const left = (viewportWidth - dialogWidth) / 2
        const top = (viewportHeight - dialogHeight) / 2

        setDialogStyle({
            // left: `${left}px`,
            maxWidth,
            top: `${top}px`
        })
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onCloseDialog?.()
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
            onCloseDialog?.()
        }
    }

    useEffect(() => {
        document.addEventListener('resize', handleResize)
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('resize', handleResize)
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    useEffect(() => {
        if (open) {
            handleResize()
        }
    }, [open])

    return open ? (
        <dialog
            {...props}
            open={open}
            ref={dialogRef}
            className={styles.dialog}
            style={dialogStyle}
        >
            {(header || showBackLink) && (
                <div className={styles.header}>
                    {showBackLink && (
                        <button
                            className={styles.backLink}
                            onClick={onBackClick}
                        >
                            <Icon name={'Left'} />
                            <div>{backLinkCaption}</div>
                        </button>
                    )}
                    <h2>{header}</h2>
                    {actions && <div className={styles.actions}>{actions}</div>}
                </div>
            )}
            <div
                className={styles.content}
                style={{ height: contentHeight ? contentHeight : 'auto' }}
            >
                {children}
            </div>
        </dialog>
    ) : (
        <></>
    )
}

export default Dialog
