import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Popout component properties
 */
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
    ({ className, disabled, position, trigger, children, closeOnChildrenClick, onOpenChange, ...props }, ref) => {
        const popoutRef = useRef<HTMLDivElement>(null)
        const popoutChildrenRef = useRef<HTMLDivElement>(null)
        const [isOpen, setIsOpen] = useState<boolean>(false)

        const close = () => {
            setIsOpen(false)
        }

        useImperativeHandle(ref, () => ({ close }))

        const toggleDropdown = (event: React.MouseEvent) => {
            event.stopPropagation()

            if (!disabled) {
                setIsOpen(!isOpen)
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (popoutRef?.current && !popoutRef?.current?.contains(event.target as Node)) {
                close()
            }

            if (popoutChildrenRef?.current && !popoutChildrenRef?.current?.contains(event.target as Node)) {
                close()
            }
        }

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }, [])

        useEffect(() => {
            if (onOpenChange) {
                onOpenChange(isOpen)
            }
        }, [isOpen, onOpenChange])

        return (
            <div
                ref={popoutRef}
                className={cn(className, styles.popout)}
            >
                <span
                    onClick={toggleDropdown}
                    className={cn(styles.trigger, disabled && styles.disabled)}
                    role={'button'}
                    {...props}
                >
                    {trigger}
                </span>

                {isOpen && (
                    <div
                        ref={popoutChildrenRef}
                        className={styles.content}
                        onClick={() => (closeOnChildrenClick ? close() : undefined)}
                        style={position === 'left' ? { left: 0 } : { right: 0 }}
                    >
                        {children}
                    </div>
                )}
            </div>
        )
    }
)

Popout.displayName = 'Popout'

export default Popout
