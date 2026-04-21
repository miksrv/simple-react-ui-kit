import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { cn } from '../../utils'
import { Icon } from '../icon'
import { Overlay } from '../overlay'

import { DialogProps } from './types'

import styles from './styles.module.sass'

export const Dialog: React.FC<DialogProps> = ({
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
    const [dialogStyle, setDialogStyle] = useState<React.CSSProperties>({})
    const [internalId] = useState(() => crypto.randomUUID())

    const handleResize = () => {
        const parentElement = parentRef?.current || document.documentElement
        const parentHeight = parentElement.clientHeight
        const dialogHeight = dialogRef.current?.offsetHeight || 0
        const top = (parentHeight - dialogHeight) / 2
        const newTop = `${top}px`

        setDialogStyle((prev) => {
            if (prev.top === newTop && prev.maxWidth === maxWidth) {
                return prev
            }
            return {
                maxWidth,
                top: newTop
            }
        })
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && open) {
                onCloseDialog?.()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open, onCloseDialog])

    useEffect(() => {
        if (!open) {
            return
        }

        const originalOverflow = document.body.style.overflow
        handleResize()
        document.body.style.overflow = 'hidden'

        const resizeObserver = new ResizeObserver(() => {
            handleResize()
        })

        if (dialogRef.current) {
            resizeObserver.observe(dialogRef.current)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            document.body.style.overflow = originalOverflow
            resizeObserver.disconnect()
            window.removeEventListener('resize', handleResize)
        }
    }, [open])

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
                            style={{ height: contentHeight || 'auto' }}
                        >
                            {children}
                        </div>
                    </dialog>,
                    (parentRef?.current as HTMLElement) || document.body
                )}
        </>
    )
}
