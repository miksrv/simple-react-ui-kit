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

// Shared between all tooltips: moving the pointer along a toolbar shows tooltips instantly
// after the first one, instead of waiting for the delay on every button.
let lastHiddenAt = 0

export interface UseTooltipConfig extends TooltipOptions {
    /** Content of the tooltip. Nothing is rendered or attached when it is empty */
    content?: React.ReactNode
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

    const [open, setOpenState] = useState<boolean>(false)
    const [position, setPosition] = useState<TooltipPosition | null>(null)

    const openRef = useRef<boolean>(false)
    const triggerRef = useRef<Element | null>(null)
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    const showTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
    // Set on pointer down so the focus that follows a mouse click does not open the tooltip
    const suppressFocusRef = useRef<boolean>(false)

    const content = config?.content
    const placement = config?.placement ?? 'top'
    const delay = config?.delay ?? TOOLTIP_SHOW_DELAY
    const enabled = !!config && !config.disabled && hasTooltipContent(content)

    const setOpen = useCallback((value: boolean) => {
        if (openRef.current && !value) {
            lastHiddenAt = Date.now()
        }

        openRef.current = value
        setOpenState(value)

        if (!value) {
            setPosition(null)
        }
    }, [])

    const clearTimers = useCallback(() => {
        clearTimeout(showTimerRef.current)
        clearTimeout(hideTimerRef.current)
        showTimerRef.current = undefined
        hideTimerRef.current = undefined
    }, [])

    const hide = useCallback(() => {
        clearTimers()
        setOpen(false)
    }, [clearTimers, setOpen])

    const show = useCallback(
        (target: Element, immediate: boolean) => {
            triggerRef.current = target
            clearTimeout(hideTimerRef.current)
            hideTimerRef.current = undefined

            if (openRef.current || showTimerRef.current) {
                return
            }

            if (immediate || delay <= 0 || Date.now() - lastHiddenAt < TOOLTIP_SKIP_DELAY_WINDOW) {
                setOpen(true)
            } else {
                showTimerRef.current = setTimeout(() => {
                    showTimerRef.current = undefined
                    setOpen(true)
                }, delay)
            }
        },
        [delay, setOpen]
    )

    const scheduleHide = useCallback(() => {
        clearTimeout(showTimerRef.current)
        showTimerRef.current = undefined

        if (openRef.current && !hideTimerRef.current) {
            hideTimerRef.current = setTimeout(() => {
                hideTimerRef.current = undefined
                setOpen(false)
            }, TOOLTIP_HIDE_DELAY)
        }
    }, [setOpen])

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

        if (!trigger.isConnected || isOutOfViewport(rect, viewport)) {
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

    // Close (and drop pending timers) when the tooltip gets disabled or loses its content
    useEffect(() => {
        if (!enabled) {
            hide()
        }
    }, [enabled, hide])

    useEffect(() => clearTimers, [clearTimers])

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

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                hide()
            }
        }

        window.addEventListener('scroll', updatePosition, { capture: true, passive: true })
        window.addEventListener('resize', updatePosition)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('scroll', updatePosition, true)
            window.removeEventListener('resize', updatePosition)
            document.removeEventListener('keydown', handleKeyDown)
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
            suppressFocusRef.current = true
            hide()
        },
        onFocus: (event) => {
            userProps.onFocus?.(event)

            if (suppressFocusRef.current) {
                suppressFocusRef.current = false
                return
            }

            show(event.currentTarget, true)
        },
        onBlur: (event) => {
            userProps.onBlur?.(event)
            suppressFocusRef.current = false
            hide()
        },
        'aria-describedby': isOpen ? cn(userProps['aria-describedby'], id) : userProps['aria-describedby']
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
