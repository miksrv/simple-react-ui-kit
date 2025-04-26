import React, { useEffect, useState } from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

/**
 * Overlay component properties
 */
interface OverlayProps {
    /** Controls whether the overlay is open or closed */
    open?: boolean
    /** Reference to the parent element for positioning the dialog */
    parentRef?: React.RefObject<HTMLElement | null>
    /** Unique identifier for the overlay element */
    overlayId?: string
    /** Callback function triggered when the overlay is closed */
    onClose?: () => void
}

const Overlay: React.FC<OverlayProps> = ({ open, parentRef, overlayId = 'default-overlay', onClose }) => {
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        if (!isInitialized && open) {
            setIsInitialized(true)
        }
    }, [open])

    useEffect(() => {
        const parentElement = parentRef?.current || document.body
        let overlayElement = parentElement.querySelector(`[data-overlay-id="${overlayId}"]`) as HTMLElement

        if (!overlayElement) {
            overlayElement = document.createElement('div')
            overlayElement.setAttribute('data-overlay-id', overlayId)
            parentElement.appendChild(overlayElement)
        }

        // Apply styles and attributes
        overlayElement.className = cn(
            styles.overlay,
            isInitialized ? (open ? styles.displayed : styles.hidden) : styles.noInitialized
        )
        overlayElement.tabIndex = 0
        overlayElement.setAttribute('role', 'button')
        overlayElement.setAttribute('aria-label', 'Overlay')
        overlayElement.onclick = onClose || null

        return () => {
            if (overlayElement) {
                parentElement.removeChild(overlayElement)
            }
        }
    }, [overlayId, parentRef, open, onClose, isInitialized])

    return null
}

export default Overlay
