import React from 'react'

import { ElementSizeType } from '../../types'
import { IconTypes } from '../icon'
import { TooltipProp } from '../tooltip'

/**
 * Badge component properties
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Additional class names for custom styling */
    className?: string
    /** Text label to display inside the badge */
    label?: string | number
    /** Icon to display alongside the badge label */
    icon?: IconTypes | React.ReactElement
    /** Size of the badge */
    size?: ElementSizeType
    /** Callback function to handle badge removal when the remove button is clicked */
    onClickRemove?: (key?: string | number) => void
    /** Tooltip shown on hover: the text, or `{ content, placement, delay, ... }`.
     *  Pass `tabIndex={0}` to also show it on keyboard focus. */
    tooltip?: TooltipProp
}
