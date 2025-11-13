import React from 'react'

/**
 * Overlay component properties
 */
export interface OverlayProps {
    /** Controls whether the overlay is open or closed */
    open?: boolean
    /** Reference to the parent element for positioning the dialog */
    parentRef?: React.RefObject<HTMLElement | null>
    /** Unique identifier for the overlay element */
    overlayId: string
    /** Callback function triggered when the overlay is closed */
    onClose?: () => void
}
