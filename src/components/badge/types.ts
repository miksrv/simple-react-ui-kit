import React from 'react'

import { ElementSizeType } from '../../types'
import { IconTypes } from '../icon'

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
}
