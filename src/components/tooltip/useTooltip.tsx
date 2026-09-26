import React, { useCallback, useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { FloatingPortalContext } from '../../floatingPortal'
import { cn } from '../../utils'

import { computeTooltipPosition, isOutOfViewport, TooltipPosition } from './position'
import { TooltipOptions, TooltipTriggerProps } from './types'
import { hasTooltipContent } from './utils'

import styles from './styles.module.sass'

/** Default delay before the tooltip appears on hover */
export const TOOLTIP_SHOW_DELAY = 400
/** Grace period that lets the pointer travel from the trigger onto the tooltip without closing it */
const TOOLTIP_HIDE_DELAY = 100
/** When another tooltip was closed within this window, the next one opens without delay */
const TOOLTIP_SKIP_DELAY_WINDOW = 300

// Shared between all tooltips. Only one tooltip is visible at a time: opening one closes the
// previous one, and while a tooltip is open (or has just closed) the next one opens without
// delay, so moving the pointer along a toolbar does not wait for the delay on every button.
let activeHide: (() => void) | null = null
let lastHiddenAt = 0

// The last input modality. Focus opens the tooltip only after keyboard interaction, the same
// heuristic browsers use for :focus-visible. This ignores the focus that follows a click
// (or does not follow it, as in Safari), programmatic focus, autofocus and focus restored
// when switching back to the browser tab.
let lastInputModality: 'keyboard' | 'pointer' | null = null
let isTrackingModality = false

const trackInputModality = () => {
    if (isTrackingModality || typeof document === 'undefined') {
        return
    }

    isTrackingModality = true

    const setPointer = () => {
        lastInputModality = 'pointer'
    }

    document.addEventListener(
        'keydown',
        (event) => {
            if (!event.metaKey && !event.ctrlKey && !event.altKey) {
                lastInputModality = 'keyboard'
            }
        },
        true
    )
    document.addEventListener('pointerdown', setPointer, true)
    document.addEventListener('mousedown', setPointer, true)
    document.addEventListener('touchstart', setPointer, { capture: true, passive: true })
}

export interface UseTooltipConfig extends TooltipOptions {
    /** Content of the tooltip. Nothing is rendered or attached when it is empty */
    content?: React.ReactNode
    /** Link the trigger to the tooltip with `aria-describedby` while it is open (default true).
     *  Pass false when the tooltip text is already the trigger's accessible name, so it is not announced twice */
    describeTrigger?: boolean
}

export interface UseTooltipResult<E extends Element> {
    /** Props to spread onto the trigger element. Empty when the tooltip is not active */
    triggerProps: TooltipTriggerProps<E>
    /** Portal with the tooltip bubble while it is open, otherwise null. Render it next to the trigger */
    tooltip: React.ReactNode
}

const samePosition = (a: TooltipPosition | null, b: TooltipPosition | null): boolean =>
    a === b ||
    (!!a &&
        !!b &&
        a.top === b.top &&
        a.left === b.left &&
        a.placement === b.placement &&
        a.arrowOffset === b.arrowOffset)

// The bubble is rendered through a portal, so React would bubble its events up to the trigger's
// React ancestors (e.g. a clickable card or table row). Clicking the tooltip must not activate them.
const stopPropagation = (event: React.SyntheticEvent) => event.stopPropagation()

/**
 * Attaches a tooltip to any element without adding wrappers to the DOM.
 * The tooltip bubble is mounted into `document.body` only while it is visible.
 *
 * @param config - tooltip content and options, or null to disable the tooltip entirely
 * @param userProps - the trigger's own handlers and `aria-describedby`, which are composed with the tooltip ones
 */
export const useTooltip = <E extends Element = Element>(
    config: UseTooltipConfig | null | undefined,
    userProps: TooltipTriggerProps<E> = {}
): UseTooltipResult<E> => {
    const id = useId()
    const parentFloating = useContext(FloatingPortalContext)

    const [open, setOpen] = useState<boolean>(false)
    const [position, setPosition] = useState<TooltipPosition | null>(null)

    const openRef = useRef<boolean>(false)
    // The tooltip was opened by keyboard focus: pointer leave must not close it while the trigger is focused
    const focusedRef = useRef<boolean>(false)
    const triggerRef = useRef<Element | null>(null)
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    const showTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

    const content = config?.content
    const placement = config?.placement ?? 'top'
    const delay = config?.delay ?? TOOLTIP_SHOW_DELAY
    const describeTrigger = config?.describeTrigger ?? true
    const enabled = !!config && !config.disabled && hasTooltipContent(content)

    const clearTimers = useCallback(() => {
        clearTimeout(showTimerRef.current)
        clearTimeout(hideTimerRef.current)
        showTimerRef.current = undefined
        hideTimerRef.current = undefined
    }, [])

    const hide = useCallback(() => {
        clearTimers()
        focusedRef.current = false

        if (activeHide === hide) {
            activeHide = null
        }

        if (openRef.current) {
            lastHiddenAt = Date.now()
            openRef.current = false
            setOpen(false)
            setPosition(null)
        }
    }, [clearTimers])

    const openNow = useCallback(() => {
        showTimerRef.current = undefined

        if (activeHide && activeHide !== hide) {
            activeHide()
        }

        activeHide = hide
        openRef.current = true
        setOpen(true)
    }, [hide])

    const show = useCallback(
        (target: Element, byFocus: boolean) => {
            triggerRef.current = target
            focusedRef.current ||= byFocus
            clearTimeout(hideTimerRef.current)
            hideTimerRef.current = undefined

            if (openRef.current || showTimerRef.current) {
                return
            }

            const anotherIsOpen = activeHide != null && activeHide !== hide

            if (byFocus || delay <= 0 || anotherIsOpen || Date.now() - lastHiddenAt < TOOLTIP_SKIP_DELAY_WINDOW) {
                openNow()
            } else {
                showTimerRef.current = setTimeout(openNow, delay)
            }
        },
        [delay, hide, openNow]
    )

    const scheduleHide = useCallback(() => {
        clearTimeout(showTimerRef.current)
        showTimerRef.current = undefined

        if (openRef.current && !focusedRef.current && !hideTimerRef.current) {
            hideTimerRef.current = setTimeout(hide, TOOLTIP_HIDE_DELAY)
        }
    }, [hide])

    const cancelHide = useCallback(() => {
        clearTimeout(hideTimerRef.current)
        hideTimerRef.current = undefined
    }, [])

    const updatePosition = useCallback(() => {
        const trigger = triggerRef.current
        const tooltip = tooltipRef.current

        if (!trigger || !tooltip) {
            return
        }

        const viewport = {
            width: document.documentElement.clientWidth || window.innerWidth,
            height: document.documentElement.clientHeight || window.innerHeight
        }
        const rect = trigger.getBoundingClientRect()

        // A disconnected, hidden (display: none, zero size) or scrolled away trigger closes its tooltip
        if (!trigger.isConnected || (!rect.width && !rect.height) || isOutOfViewport(rect, viewport)) {
            hide()
            return
        }

        const next = computeTooltipPosition(
            placement,
            rect,
            { width: tooltip.offsetWidth, height: tooltip.offsetHeight },
            viewport
        )

        setPosition((prev) => (samePosition(prev, next) ? prev : next))
    }, [placement, hide])

    useEffect(() => {
        if (enabled) {
            trackInputModality()
        } else if (openRef.current || showTimerRef.current) {
            // Close (and drop pending timers) when the tooltip gets disabled or loses its content
            hide()
        }
    }, [enabled, hide])

    useEffect(
        () => () => {
            clearTimers()

            if (activeHide === hide) {
                activeHide = null
            }
        },
        [clearTimers, hide]
    )

    // Measure and place the bubble before paint, so it never flashes in the wrong spot
    useLayoutEffect(() => {
        if (open && enabled) {
            updatePosition()
        }
    }, [open, enabled, content, updatePosition])

    useEffect(() => {
        if (!open) {
            return
        }

        // Capture phase + stopPropagation: Escape dismisses only the tooltip,
        // not the Dialog or Popout it is rendered in (WCAG 1.4.13)
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.stopPropagation()
                hide()
            }
        }

        // Follows layout shifts that do not fire scroll/resize: re-sorting, animations, content changes
        const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updatePosition)

        if (triggerRef.current) {
            resizeObserver?.observe(triggerRef.current)
        }

        if (tooltipRef.current) {
            resizeObserver?.observe(tooltipRef.current)
        }

        window.addEventListener('scroll', updatePosition, { capture: true, passive: true })
        window.addEventListener('resize', updatePosition)
        document.addEventListener('keydown', handleKeyDown, true)

        return () => {
            resizeObserver?.disconnect()
            window.removeEventListener('scroll', updatePosition, true)
            window.removeEventListener('resize', updatePosition)
            document.removeEventListener('keydown', handleKeyDown, true)
        }
    }, [open, updatePosition, hide])

    // A tooltip opened inside a Popout/Select portal must not count as a click "outside" of it
    useEffect(() => {
        if (!open || !tooltipRef.current) {
            return
        }

        return parentFloating?.registerChildPortal(tooltipRef.current)
    }, [open, parentFloating])

    if (!enabled) {
        return { triggerProps: {}, tooltip: null }
    }

    const isOpen = open && typeof document !== 'undefined'

    const triggerProps: TooltipTriggerProps<E> = {
        onPointerEnter: (event) => {
            userProps.onPointerEnter?.(event)

            // Touch has no hover: a tap would open the tooltip and leave it stuck
            if (event.pointerType !== 'touch') {
                show(event.currentTarget, false)
            }
        },
        onPointerLeave: (event) => {
            userProps.onPointerLeave?.(event)
            scheduleHide()
        },
        onPointerDown: (event) => {
            userProps.onPointerDown?.(event)
            hide()
        },
        onFocus: (event) => {
            userProps.onFocus?.(event)

            // Ignore focus bubbling up from focusable children (e.g. the remove button of a Badge):
            // aria-describedby is set on the trigger itself, so it would not be announced anyway
            if (event.target === event.currentTarget && lastInputModality === 'keyboard') {
                show(event.currentTarget, true)
            }
        },
        onBlur: (event) => {
            userProps.onBlur?.(event)

            if (event.target === event.currentTarget) {
                hide()
            }
        },
        'aria-describedby':
            isOpen && describeTrigger ? cn(userProps['aria-describedby'], id) : userProps['aria-describedby']
    }

    const vertical = position?.placement === 'top' || position?.placement === 'bottom'
    const arrowStyle: React.CSSProperties | undefined = position
        ? { [vertical ? 'left' : 'top']: position.arrowOffset }
        : undefined

    const tooltip = isOpen
        ? createPortal(
              <div
                  ref={tooltipRef}
                  id={id}
                  role='tooltip'
                  className={cn(
                      styles.tooltip,
                      position ? styles[position.placement] : undefined,
                      !!position && styles.visible,
                      config.className
                  )}
                  style={
                      position ? { top: position.top, left: position.left } : { top: 0, left: 0, visibility: 'hidden' }
                  }
                  onPointerEnter={cancelHide}
                  onPointerLeave={scheduleHide}
                  onClick={stopPropagation}
                  onDoubleClick={stopPropagation}
                  onContextMenu={stopPropagation}
                  onMouseDown={stopPropagation}
                  onMouseUp={stopPropagation}
                  onPointerDown={stopPropagation}
                  onPointerUp={stopPropagation}
                  onKeyDown={stopPropagation}
              >
                  <span className={cn(styles.content, typeof content === 'string' && styles.clamped)}>{content}</span>
                  <span
                      aria-hidden='true'
                      className={styles.arrow}
                      style={arrowStyle}
                  />
              </div>,
              document.body
          )
        : null

    return { triggerProps, tooltip }
}
