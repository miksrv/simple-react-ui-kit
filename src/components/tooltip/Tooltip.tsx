import React, { cloneElement, isValidElement } from 'react'

import { TooltipProps, TooltipTriggerProps } from './types'
import { useTooltip } from './useTooltip'
import { truncateTooltipText } from './utils'

/**
 * Shows a tooltip for any element. The child is not wrapped: pointer/focus handlers
 * are attached to it directly, so the child must forward them to a DOM element.
 *
 * Components that have a `tooltip` prop (Button, Icon, Badge, Table columns) do not need this wrapper.
 */
export const Tooltip: React.FC<TooltipProps> = ({ children, content, ...options }) => {
    const child = isValidElement<TooltipTriggerProps>(children) ? children : null
    const resolvedContent = typeof content === 'string' ? truncateTooltipText(content.trim()) : content

    const { triggerProps, tooltip } = useTooltip(child ? { ...options, content: resolvedContent } : null, child?.props)

    if (!child) {
        return <>{children}</>
    }

    // The fragment keeps the tree shape identical whether the tooltip is open or not,
    // so the child is never remounted (and never loses focus) when the tooltip toggles.
    return (
        <>
            {cloneElement(child, triggerProps)}
            {tooltip}
        </>
    )
}
