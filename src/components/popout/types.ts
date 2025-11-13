import React from 'react'

/** Props for handling popout actions via ref */
export interface PopoutHandleProps {
    /** Closes the popout */
    close: () => void
}

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
