import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/** Popout component properties */
export interface PopoutProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Additional class names for custom styling */
    className?: string
    /** Whether the popout is disabled */
    disabled?: boolean
    /** Position of the popout relative to the trigger element ('left' or 'right') */
    position?: 'left' | 'right'
    /** Trigger button or link to be displayed in the popout */
    trigger?: React.ReactNode | string
    /** Content inside the popout */
    children?: React.ReactNode
    /** Whether the popout should close when a child element is clicked */
    closeOnChildrenClick?: boolean
    /** Callback function triggered when isOpen state changes */
    onOpenChange?: (isOpen: boolean) => void
}

export interface PopoutHandleProps {
    close: () => void
}

const Popout = forwardRef<PopoutHandleProps, PopoutProps>(
    (
        { className, disabled, position = 'right', trigger, children, closeOnChildrenClick, onOpenChange, ...props },
        ref
    ) => {
        const triggerRef = useRef<HTMLSpanElement>(null)
        const contentRef = useRef<HTMLDivElement>(null)
        const [isOpen, setIsOpen] = useState<boolean>(false)
        const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

        useEffect(() => {
            const div = document.createElement('div')
            div.style.position = 'absolute'
            div.style.top = '0'
            div.style.left = '0'
            div.style.pointerEvents = 'none'
            document.body.appendChild(div)
            setPortalNode(div)

            return () => {
                if (document.body.contains(div)) {
                    document.body.removeChild(div)
                }
                setPortalNode(null)
            }
        }, [])

        const close = useCallback(() => {
            setIsOpen(false)
        }, [])

        useImperativeHandle(ref, () => ({ close }), [close])

        const toggleDropdown = useCallback(
            (event: React.MouseEvent) => {
                event.stopPropagation()
                if (!disabled) {
                    setIsOpen((prev) => !prev)
                }
            },
            [disabled]
        )

        useEffect(() => {
            if (!isOpen || !portalNode) {
                return
            }

            const handleClickOutside = (event: MouseEvent) => {
                const target = event.target as Node

                const isOutsideTrigger = triggerRef.current && !triggerRef.current.contains(target)
                const isOutsideContent = portalNode && !portalNode.contains(target)

                if (isOutsideTrigger && isOutsideContent) {
                    close()
                }
            }

            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }, [isOpen, portalNode, close])

        useEffect(() => {
            onOpenChange?.(isOpen)
        }, [isOpen, onOpenChange])

        const getPortalStyle = useCallback(() => {
            if (!triggerRef.current) {
                return
            }

            const rect = triggerRef.current.getBoundingClientRect()
            const style: React.CSSProperties = {
                position: 'absolute',
                top: rect.bottom + window.scrollY + 4,
                zIndex: 9999,
                pointerEvents: 'auto'
            }

            if (position === 'left') {
                style.left = rect.left + window.scrollX
            } else {
                style.right = window.innerWidth - rect.right - window.scrollX
            }

            return style
        }, [position])

        return (
            <>
                <div className={cn(className, styles.popout)}>
                    <span
                        ref={triggerRef}
                        onClick={toggleDropdown}
                        className={cn(styles.trigger, disabled && styles.disabled)}
                        role='button'
                        tabIndex={0}
                        aria-expanded={isOpen}
                        aria-haspopup='true'
                        {...props}
                    >
                        {trigger}
                    </span>
                </div>

                {isOpen &&
                    portalNode &&
                    createPortal(
                        <div
                            ref={contentRef}
                            className={styles.popoutContent}
                            style={getPortalStyle()}
                            onClick={(e) => {
                                if (closeOnChildrenClick) {
                                    close()
                                }
                                e.stopPropagation()
                            }}
                        >
                            {children}
                        </div>,
                        portalNode
                    )}
            </>
        )
    }
)

Popout.displayName = 'Popout'

export default Popout
