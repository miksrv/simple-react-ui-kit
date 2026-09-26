import { TooltipPlacement } from './types'

/** Minimal distance between the tooltip and the viewport edge */
export const VIEWPORT_PADDING = 8
/** Gap between the trigger and the tooltip (the arrow sits inside this gap) */
export const TOOLTIP_OFFSET = 8
/** Minimal distance between the arrow and the tooltip corner, so it never overlaps the rounded border */
export const ARROW_EDGE_PADDING = 10

export interface Rect {
    top: number
    left: number
    width: number
    height: number
}

export interface Size {
    width: number
    height: number
}

export interface TooltipPosition {
    /** Viewport coordinates of the tooltip (for position: fixed) */
    top: number
    left: number
    /** Side the tooltip ended up on after flipping */
    placement: TooltipPlacement
    /** Arrow offset along the tooltip edge (from the left for top/bottom, from the top for left/right) */
    arrowOffset: number
}

const opposite: Record<TooltipPlacement, TooltipPlacement> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
}

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(value, max))

/** Space available between the trigger and the viewport edge on the given side */
const availableSpace = (placement: TooltipPlacement, trigger: Rect, viewport: Size): number => {
    switch (placement) {
        case 'top':
            return trigger.top - TOOLTIP_OFFSET - VIEWPORT_PADDING
        case 'bottom':
            return viewport.height - (trigger.top + trigger.height) - TOOLTIP_OFFSET - VIEWPORT_PADDING
        case 'left':
            return trigger.left - TOOLTIP_OFFSET - VIEWPORT_PADDING
        case 'right':
            return viewport.width - (trigger.left + trigger.width) - TOOLTIP_OFFSET - VIEWPORT_PADDING
    }
}

/**
 * Picks the side to render on: the preferred one if the tooltip fits, otherwise the opposite one
 * if it fits there, otherwise whichever of the two has more room.
 */
export const resolvePlacement = (
    preferred: TooltipPlacement,
    trigger: Rect,
    tooltip: Size,
    viewport: Size
): TooltipPlacement => {
    const required = (placement: TooltipPlacement) =>
        placement === 'top' || placement === 'bottom' ? tooltip.height : tooltip.width

    const fallback = opposite[preferred]
    const preferredSpace = availableSpace(preferred, trigger, viewport)

    if (preferredSpace >= required(preferred)) {
        return preferred
    }

    const fallbackSpace = availableSpace(fallback, trigger, viewport)

    if (fallbackSpace >= required(fallback) || fallbackSpace > preferredSpace) {
        return fallback
    }

    return preferred
}

/**
 * Computes viewport coordinates of the tooltip so that it stays inside the viewport:
 * flips to the opposite side when there is no room, shifts along the edge to avoid overflow,
 * and keeps the arrow pointing at the trigger center.
 */
export const computeTooltipPosition = (
    preferred: TooltipPlacement,
    trigger: Rect,
    tooltip: Size,
    viewport: Size
): TooltipPosition => {
    const placement = resolvePlacement(preferred, trigger, tooltip, viewport)
    const maxLeft = Math.max(VIEWPORT_PADDING, viewport.width - VIEWPORT_PADDING - tooltip.width)
    const maxTop = Math.max(VIEWPORT_PADDING, viewport.height - VIEWPORT_PADDING - tooltip.height)

    if (placement === 'top' || placement === 'bottom') {
        const triggerCenter = trigger.left + trigger.width / 2
        const left = clamp(triggerCenter - tooltip.width / 2, VIEWPORT_PADDING, maxLeft)
        const top = clamp(
            placement === 'top'
                ? trigger.top - TOOLTIP_OFFSET - tooltip.height
                : trigger.top + trigger.height + TOOLTIP_OFFSET,
            VIEWPORT_PADDING,
            maxTop
        )

        return {
            top,
            left,
            placement,
            arrowOffset: clamp(
                triggerCenter - left,
                ARROW_EDGE_PADDING,
                Math.max(ARROW_EDGE_PADDING, tooltip.width - ARROW_EDGE_PADDING)
            )
        }
    }

    const triggerCenter = trigger.top + trigger.height / 2
    const top = clamp(triggerCenter - tooltip.height / 2, VIEWPORT_PADDING, maxTop)
    const left = clamp(
        placement === 'left'
            ? trigger.left - TOOLTIP_OFFSET - tooltip.width
            : trigger.left + trigger.width + TOOLTIP_OFFSET,
        VIEWPORT_PADDING,
        maxLeft
    )

    return {
        top,
        left,
        placement,
        arrowOffset: clamp(
            triggerCenter - top,
            ARROW_EDGE_PADDING,
            Math.max(ARROW_EDGE_PADDING, tooltip.height - ARROW_EDGE_PADDING)
        )
    }
}

/** Whether the trigger is completely scrolled out of the viewport */
export const isOutOfViewport = (trigger: Rect, viewport: Size): boolean =>
    trigger.top + trigger.height <= 0 ||
    trigger.left + trigger.width <= 0 ||
    trigger.top >= viewport.height ||
    trigger.left >= viewport.width
