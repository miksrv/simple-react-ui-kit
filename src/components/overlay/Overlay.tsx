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
    overlayId: string
    /** Callback function triggered when the overlay is closed */
    onClose?: () => void
}

const Overlay: React.FC<OverlayProps> = ({ open, parentRef, overlayId, onClose }) => {
    const [localOpen, setLocalOpen] = useState<boolean>(open || false)

    useEffect(() => {
        const parentElement = parentRef?.current || document.body
        let overlayElement = parentElement.querySelector(`[data-overlay-id="${overlayId}"]`) as HTMLElement

        if (!overlayElement) {
            overlayElement = document.createElement('div')
            overlayElement.setAttribute('data-overlay-id', overlayId)
            overlayElement.setAttribute('role', 'button')
            overlayElement.setAttribute('aria-label', 'Overlay')
            overlayElement.tabIndex = 0
            overlayElement.onclick = onClose || null
            overlayElement.className = cn(styles.overlay, styles.noInitialized)
            parentElement.appendChild(overlayElement)
        }

        if (localOpen === open) {
            return
        }

        overlayElement.className = cn(styles.overlay, open ? styles.displayed : styles.hidden)

        setLocalOpen(open || false)

        return () => {
            if (overlayElement && parentElement.contains(overlayElement)) {
                parentElement.removeChild(overlayElement)
            }
        }
    }, [overlayId, parentRef, open, onClose])

    return null
}

export default Overlay
