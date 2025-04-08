import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { cn } from '../../utils'
import Button, { ButtonProps } from '../button'

import styles from './styles.module.sass'

/**
 * Popout component properties
 */
export interface PopoutProps extends Pick<ButtonProps, 'mode' | 'variant' | 'size' | 'icon'> {
    /** Additional class names for custom styling */
    className?: string
    /** Position of the popout relative to the trigger element ('left' or 'right') */
    position?: 'left' | 'right'
    /** Action button or link to be displayed in the popout */
    action?: React.ReactNode | string
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
    ({ className, position, action, children, closeOnChildrenClick, onOpenChange, ...props }, ref) => {
        const popoutRef = useRef<HTMLDivElement>(null)
        const popoutChildrenRef = useRef<HTMLDivElement>(null)
        const [isOpen, setIsOpen] = useState<boolean>(false)

        const close = () => {
            setIsOpen(false)
        }

        useImperativeHandle(ref, () => ({
            close
        }))

        const toggleDropdown = (event: React.MouseEvent) => {
            event.stopPropagation()
            setIsOpen(!isOpen)
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
                <Button
                    onClick={toggleDropdown}
                    {...props}
                >
                    {action}
                </Button>

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
