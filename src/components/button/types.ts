import React from 'react'

import { ButtonModeType, ElementSizeType } from '../../types'
import { IconTypes } from '../icon'

/**
 * Button component properties
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Additional class names for custom styling */
    className?: string
    /** URL for a link if the button acts as a link */
    link?: string
    /** Set to true to prevent search engines from indexing the button (if used as a link) */
    noIndex?: boolean
    /** Whether the button takes up the full width of the container */
    stretched?: boolean
    /** Show loading spinner instead of button content */
    loading?: boolean
    /** Size of the button */
    size?: ElementSizeType
    /** Visual style of the button */
    mode?: ButtonModeType
    /** Button variant for styling */
    variant?: 'positive' | 'negative'
    /** Strip all default chrome (background, padding, border-radius, min-height) while
     *  keeping the button's semantics — type, disabled, aria-busy/loading spinner, icon+label
     *  layout. Use for icon-only or fully custom-styled triggers (e.g. a burger menu button,
     *  a dialog close icon) instead of reaching for a raw `<button>`. Ignores `mode`/`variant`/
     *  `size`, since those style the chrome this prop removes. */
    unstyled?: boolean
    /** Icon to display inside the button */
    icon?: IconTypes
    /** Content inside the button */
    children?: React.ReactNode
    /** Content to display inside the button (as text) */
    label?: string
}
