import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { cn } from '../../utils'
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
    /** Determines if the overlay is displayed */
    showOverlay?: boolean
    /** Determines if the backlink button is displayed */
    showBackLink?: boolean
    /** Determines if the close button is displayed */
    showCloseButton?: boolean
    /** Reference to the parent element for positioning the dialog */
    parentRef?: React.RefObject<HTMLElement | null>
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
    showOverlay = true,
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
    const [internalId] = useState(Math.random().toString(36).substr(2, 9))

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

    const handleChangeState = useCallback(() => {
        if (open) {
            handleResize()
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    useEffect(() => {
        handleChangeState()
    }, [open])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && open) {
                onCloseDialog?.()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        handleChangeState()

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open, onCloseDialog])

    return (
        <>
            {showOverlay && (
                <Overlay
                    open={open}
                    parentRef={parentRef}
                    overlayId={internalId}
                    onClose={onCloseDialog}
                />
            )}

            {open &&
                ReactDOM.createPortal(
                    <dialog
                        {...props}
                        open={open}
                        ref={dialogRef}
                        className={styles.dialog}
                        style={dialogStyle}
                    >
                        {(title || showBackLink || showCloseButton) && (
                            <div className={cn(styles.header, !showBackLink && styles.noBackLink)}>
                                {showBackLink && (
                                    <button
                                        className={styles.innerButton}
                                        onClick={onBackClick}
                                    >
                                        <Icon name={'KeyboardLeft'} />
                                        <div>{backLinkCaption}</div>
                                    </button>
                                )}

                                {title && <h2>{title}</h2>}

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
                    </dialog>,
                    (parentRef?.current as HTMLElement) || document.body
                )}
        </>
    )
}

export default Dialog
