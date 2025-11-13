import React from 'react'

/**
 * Dialog component properties
 */
export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
    /** Controls whether the dialog is open or closed */
    open?: boolean
    /** Header text for the dialog */
    title?: string
    /** Height of the dialog content */
    contentHeight?: string
    /** Maximum width of the dialog */
    maxWidth?: string
    /** Caption for the backlink button */
    backLinkCaption?: string
    /** Determines if the overlay is displayed */
    showOverlay?: boolean
    /** Determines if the backlink button is displayed */
    showBackLink?: boolean
    /** Determines if the close button is displayed */
    showCloseButton?: boolean
    /** Reference to the parent element for positioning the dialog */
    parentRef?: React.RefObject<HTMLElement | null>
    /** Content to be displayed inside the dialog */
    children?: React.ReactNode
    /** Callback function triggered when the backlink is clicked */
    onBackClick?: () => void
    /** Callback function triggered when the dialog is closed */
    onCloseDialog?: () => void
}
