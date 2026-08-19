import React, {
    forwardRef,
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import { createPortal } from 'react-dom'

import { FloatingPortalContext, useFloatingChildPortals } from '../../floatingPortal'
import { cn } from '../../utils'

import { PopoutHandleProps, PopoutProps } from './types'

import styles from './styles.module.sass'

export const Popout = forwardRef<PopoutHandleProps, PopoutProps>(
    (
        {
            className,
            disabled,
            position = 'right',
            trigger,
            children,
            closeOnChildrenClick,
            onOpenChange,
            portal = false,
            ...props
        },
        ref
    ) => {
        const triggerRef = useRef<HTMLSpanElement>(null)
        const contentRef = useRef<HTMLDivElement>(null)
        const [isOpen, setIsOpen] = useState<boolean>(false)
        const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)
        const [portalStyle, setPortalStyle] = useState<React.CSSProperties>({})
        const [positionCalculated, setPositionCalculated] = useState<boolean>(false)

        // See src/floatingPortal.ts - lets a floating element nested inside
        // this Popout's children (e.g. a Select) register its own portal so
        // clicks inside it aren't treated as "outside" this Popout, and lets
        // this Popout itself register with a further ancestor, if any.
        const parentFloating = useContext(FloatingPortalContext)
        const { registerChildPortal, isInsideChildPortal } = useFloatingChildPortals()
        const floatingContextValue = useMemo(() => ({ registerChildPortal }), [registerChildPortal])

        // Create portal container
        useEffect(() => {
            const div = document.createElement('div')
            div.className = styles.portal
            document.body.appendChild(div)
            setPortalNode(div)

            const unregister = parentFloating?.registerChildPortal(div)

            return () => {
                if (document.body.contains(div)) {
                    document.body.removeChild(div)
                }
                setPortalNode(null)
                unregister?.()
            }
        }, [parentFloating])

        const close = useCallback(() => {
            setIsOpen(false)
            setPositionCalculated(false)
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

        const handleTriggerKeyDown = useCallback(
            (event: React.KeyboardEvent) => {
                if (disabled) {
                    return
                }
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setIsOpen((prev) => !prev)
                } else if (event.key === 'Escape') {
                    setIsOpen(false)
                }
            },
            [disabled]
        )

        // Calculate position for portal mode with fixed positioning
        const updatePortalPosition = useCallback(() => {
            if (!triggerRef.current || !isOpen) {
                return
            }

            const rect = triggerRef.current.getBoundingClientRect()

            if (portal) {
                // Fixed positioning - stays in place during scroll
                const style: React.CSSProperties = {
                    position: 'fixed',
                    top: rect.bottom + 4,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                }

                if (position === 'left') {
                    style.left = rect.left
                } else {
                    style.right = window.innerWidth - rect.right
                }

                setPortalStyle(style)
                setPositionCalculated(true)
            } else {
                // Absolute positioning - default behavior
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

                setPortalStyle(style)
                setPositionCalculated(true)
            }
        }, [isOpen, position, portal])

        // Use useLayoutEffect to calculate position before paint
        useLayoutEffect(() => {
            if (isOpen) {
                updatePortalPosition()
            }
        }, [isOpen, updatePortalPosition])

        // Update position on scroll and resize when dropdown is open
        useEffect(() => {
            if (!isOpen) {
                return
            }

            window.addEventListener('scroll', updatePortalPosition, { capture: true, passive: true })
            window.addEventListener('resize', updatePortalPosition)

            return () => {
                window.removeEventListener('scroll', updatePortalPosition, true)
                window.removeEventListener('resize', updatePortalPosition)
            }
        }, [isOpen, portal, updatePortalPosition])

        // Handle click outside
        useEffect(() => {
            if (!isOpen || !portalNode) {
                return
            }

            const handleClickOutside = (event: MouseEvent) => {
                const target = event.target as Node

                const isOutsideTrigger = triggerRef.current && !triggerRef.current.contains(target)
                const isOutsideContent = portalNode && !portalNode.contains(target)

                if (isOutsideTrigger && isOutsideContent && !isInsideChildPortal(target)) {
                    close()
                }
            }

            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }, [isOpen, portalNode, close, isInsideChildPortal])

        useEffect(() => {
            onOpenChange?.(isOpen)
        }, [isOpen, onOpenChange])

        return (
            <>
                <div className={cn(className, styles.popout)}>
                    <span
                        ref={triggerRef}
                        onClick={toggleDropdown}
                        onKeyDown={handleTriggerKeyDown}
                        className={cn(styles.trigger, disabled && styles.disabled)}
                        role='button'
                        tabIndex={disabled ? -1 : 0}
                        aria-expanded={isOpen}
                        aria-haspopup='true'
                        aria-disabled={disabled || undefined}
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
                            style={{
                                ...portalStyle,
                                visibility: positionCalculated ? 'visible' : 'hidden'
                            }}
                            onClick={(e) => {
                                if (closeOnChildrenClick) {
                                    close()
                                }
                                e.stopPropagation()
                            }}
                        >
                            <FloatingPortalContext.Provider value={floatingContextValue}>
                                {children}
                            </FloatingPortalContext.Provider>
                        </div>,
                        portalNode
                    )}
            </>
        )
    }
)

Popout.displayName = 'Popout'
