import React from 'react'

/** Preferred side of the trigger to render the tooltip on */
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

/**
 * Options shared by the `tooltip` prop and the standalone Tooltip component
 */
export interface TooltipOptions {
    /** Preferred placement. The tooltip flips to the opposite side when there is not enough room */
    placement?: TooltipPlacement
    /** Delay in milliseconds before the tooltip appears on hover (keyboard focus shows it immediately) */
    delay?: number
    /** Temporarily disable the tooltip without removing it */
    disabled?: boolean
    /** Additional class names for the tooltip bubble */
    className?: string
}

/**
 * Value of the `tooltip` prop accepted by Button, Icon, Badge and Table columns.
 * Either the tooltip text, or an object with the text and extra options.
 * Text longer than TOOLTIP_MAX_LENGTH characters is truncated with an ellipsis.
 */
export type TooltipProp = string | (TooltipOptions & { content: string })

/**
 * Tooltip component properties
 */
export interface TooltipProps extends TooltipOptions {
    /** Tooltip content. Strings are truncated to TOOLTIP_MAX_LENGTH characters, React nodes are rendered as is */
    content?: React.ReactNode
    /** A single element that accepts pointer/focus handlers and forwards them to a DOM node */
    children: React.ReactElement
}

/**
 * Handlers and ARIA attributes the tooltip attaches to its trigger element
 */
export interface TooltipTriggerProps<E extends Element = Element> {
    onPointerEnter?: React.PointerEventHandler<E>
    onPointerLeave?: React.PointerEventHandler<E>
    onPointerDown?: React.PointerEventHandler<E>
    onFocus?: React.FocusEventHandler<E>
    onBlur?: React.FocusEventHandler<E>
    'aria-describedby'?: string
}
