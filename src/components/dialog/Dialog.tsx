import React, { useEffect, useRef, useState } from 'react'

import { cn } from '../../utils'
import Button from '../button'
import Icon from '../icon'
import Overlay from '../overlay'

import styles from './styles.module.sass'

/**
 * Dialog component properties
 */
export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
    /** Controls whether the dialog is open or closed */
    open?: boolean
    /** Header text for the dialog */
    title?: string
    /** Height of the dialog content */
    contentHeight?: string
    /** Maximum width of the dialog */
    maxWidth?: string
    /** Caption for the backlink button */
    backLinkCaption?: string
    /** Determines if the backlink button is displayed */
    showBackLink?: boolean
    showCloseButton?: boolean
    /** Reference to the parent element for positioning the dialog */
    parentRef?: React.RefObject<HTMLElement | null>
    /** Actions to be displayed in the dialog header */
    actions?: React.ReactNode
    /** Content to be displayed inside the dialog */
    children?: React.ReactNode
    /** Callback function triggered when the backlink is clicked */
    onBackClick?: () => void
    /** Callback function triggered when the dialog is closed */
    onCloseDialog?: () => void
}

const Dialog: React.FC<DialogProps> = ({
    open,
    title,
    contentHeight,
    maxWidth = '500px',
    backLinkCaption,
    showBackLink,
    showCloseButton,
    parentRef,
    children,
    onBackClick,
    onCloseDialog,
    ...props
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [dialogStyle, setDialogStyle] = useState({})

    const handleResize = () => {
        const parentElement = parentRef?.current || document.documentElement
        const parentHeight = parentElement.clientHeight
        const dialogHeight = dialogRef.current?.offsetHeight || 0
        const top = (parentHeight - dialogHeight) / 2

        setDialogStyle({
            maxWidth,
            top: `${top}px`
        })
    }

    useEffect(() => {
        if (open) {
            handleResize()
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    return (
        <>
            <Overlay
                open={open}
                parentRef={parentRef}
                overlayId={'dialog-overlay'}
                onClose={onCloseDialog}
            />

            {open && (
                <dialog
                    {...props}
                    open={open}
                    ref={dialogRef}
                    className={styles.dialog}
                    style={dialogStyle}
                >
                    {(title || showBackLink || showCloseButton) && (
                        <div className={styles.header}>
                            {showBackLink && (
                                <button
                                    className={styles.innerButton}
                                    onClick={onBackClick}
                                >
                                    <Icon name={'KeyboardLeft'} />
                                    <div>{backLinkCaption}</div>
                                </button>
                            )}

                            {title && (
                                <h2>{title}</h2>
                            )}

                            {showCloseButton && (
                                <button
                                    aria-label={'Close Dialog'}
                                    className={cn(styles.innerButton, styles.closeButton)}
                                    onClick={onCloseDialog}
                                >
                                    <Icon name={'Close'} />
                                </button>
                            )}
                        </div>
                    )}
                    <div
                        className={styles.content}
                        style={{ height: contentHeight ? contentHeight : 'auto' }}
                    >
                        {children}
                    </div>
                </dialog>
            )}
        </>
    )
}

export default Dialog
