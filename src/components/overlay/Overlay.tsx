import React, { useEffect, useState } from 'react'

import { cn } from '../../utils'

import { OverlayProps } from './types'

import styles from './styles.module.sass'

export const Overlay: React.FC<OverlayProps> = ({ open, parentRef, overlayId, onClose }) => {
    const [localOpen, setLocalOpen] = useState<boolean>(open || false)

    useEffect(() => {
        const parentElement = parentRef?.current || document.body
        let overlayElement = parentElement.querySelector(`[data-overlay-id="${overlayId}"]`) as HTMLElement

        if (!overlayElement) {
            overlayElement = document.createElement('div')
            overlayElement.dataset.overlayId = overlayId
            overlayElement.setAttribute('role', 'button')
            overlayElement.setAttribute('aria-label', 'Overlay')
            overlayElement.tabIndex = 0
            overlayElement.onclick = onClose || null
            overlayElement.className = cn(styles.overlay, !open && styles.noInitialized)
            parentElement.appendChild(overlayElement)
        }

        if (localOpen === open) {
            return
        }

        overlayElement.className = cn(styles.overlay, open ? styles.displayed : styles.hidden)

        setLocalOpen(open || false)

        return () => {
            if (overlayElement && parentElement.contains(overlayElement)) {
                overlayElement.remove()
            }
        }
    }, [overlayId, parentRef, open, onClose])

    return null
}
