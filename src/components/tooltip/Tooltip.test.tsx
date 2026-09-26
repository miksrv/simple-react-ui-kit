import React from 'react'

import { act, fireEvent, render, screen } from '@testing-library/react'

import { FloatingPortalContext } from '../../floatingPortal'

import { Tooltip } from './Tooltip'
import { TOOLTIP_SHOW_DELAY } from './useTooltip'
import { hasTooltipContent, normalizeTooltip, TOOLTIP_MAX_LENGTH, truncateTooltipText } from './utils'

import styles from './styles.module.sass'

const visibleRect = { top: 100, left: 100, width: 40, height: 30, right: 140, bottom: 130, x: 100, y: 100 }

const mockTriggerRect = (rect: Partial<DOMRect> = visibleRect) =>
    jest
        .spyOn(Element.prototype, 'getBoundingClientRect')
        .mockReturnValue({ ...visibleRect, ...rect, toJSON: () => ({}) } as DOMRect)

const hover = (element: Element) => fireEvent.pointerEnter(element, { pointerType: 'mouse' })

const openWithHover = (element: Element) => {
    hover(element)
    act(() => {
        jest.advanceTimersByTime(TOOLTIP_SHOW_DELAY)
    })
}

// Other tooltips closed within the "skip delay" window open instantly; move past it between tests
const resetSkipDelayWindow = () => {
    act(() => {
        jest.advanceTimersByTime(1000)
    })
}

// jsdom does not implement PointerEvent, so `pointerType` would be dropped from fired events
class PointerEventPolyfill extends MouseEvent {
    public pointerType: string

    public constructor(type: string, init: PointerEventInit = {}) {
        super(type, init)
        this.pointerType = init.pointerType ?? ''
    }
}

window.PointerEvent ??= PointerEventPolyfill as unknown as typeof PointerEvent

describe('Tooltip Component', () => {
    beforeEach(() => {
        jest.useFakeTimers()
        mockTriggerRect()
    })

    afterEach(() => {
        resetSkipDelayWindow()
        jest.useRealTimers()
        jest.restoreAllMocks()
    })

    it('renders only the child while hidden and adds no wrapper elements', () => {
        const { container } = render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        expect(container.innerHTML).toBe('<button>Trigger</button>')
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('shows the tooltip after the delay on hover', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        hover(screen.getByText('Trigger'))
        act(() => {
            jest.advanceTimersByTime(TOOLTIP_SHOW_DELAY - 1)
        })
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

        act(() => {
            jest.advanceTimersByTime(1)
        })
        expect(screen.getByRole('tooltip')).toHaveTextContent('Hint')
    })

    it('renders the tooltip into document.body, outside of the trigger container', () => {
        const { container } = render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        openWithHover(screen.getByText('Trigger'))

        const tooltip = screen.getByRole('tooltip')
        expect(tooltip.parentElement).toBe(document.body)
        expect(container).not.toContainElement(tooltip)
    })

    it('respects a custom delay', () => {
        render(
            <Tooltip
                content='Hint'
                delay={1000}
            >
                <button>Trigger</button>
            </Tooltip>
        )

        hover(screen.getByText('Trigger'))
        act(() => {
            jest.advanceTimersByTime(TOOLTIP_SHOW_DELAY)
        })
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

        act(() => {
            jest.advanceTimersByTime(1000 - TOOLTIP_SHOW_DELAY)
        })
        expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('shows immediately when delay is 0', () => {
        render(
            <Tooltip
                content='Hint'
                delay={0}
            >
                <button>Trigger</button>
            </Tooltip>
        )

        hover(screen.getByText('Trigger'))
        expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('does not show when the pointer leaves before the delay ends', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        hover(trigger)
        fireEvent.pointerLeave(trigger)
        act(() => {
            jest.advanceTimersByTime(TOOLTIP_SHOW_DELAY * 2)
        })

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('hides after the pointer leaves and removes the tooltip from the DOM', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        openWithHover(trigger)
        fireEvent.pointerLeave(trigger)
        expect(screen.getByRole('tooltip')).toBeInTheDocument()

        act(() => {
            jest.advanceTimersByTime(100)
        })
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('stays open while the pointer moves from the trigger onto the tooltip', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        openWithHover(trigger)
        fireEvent.pointerLeave(trigger)
        fireEvent.pointerEnter(screen.getByRole('tooltip'))
        act(() => {
            jest.advanceTimersByTime(500)
        })
        expect(screen.getByRole('tooltip')).toBeInTheDocument()

        fireEvent.pointerLeave(screen.getByRole('tooltip'))
        act(() => {
            jest.advanceTimersByTime(100)
        })
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('opens the next tooltip instantly right after another one was closed', () => {
        render(
            <>
                <Tooltip content='First'>
                    <button>One</button>
                </Tooltip>
                <Tooltip content='Second'>
                    <button>Two</button>
                </Tooltip>
            </>
        )

        openWithHover(screen.getByText('One'))
        fireEvent.pointerLeave(screen.getByText('One'))
        act(() => {
            jest.advanceTimersByTime(100)
        })

        hover(screen.getByText('Two'))
        expect(screen.getByRole('tooltip')).toHaveTextContent('Second')
    })

    it('ignores touch pointers', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.pointerEnter(screen.getByText('Trigger'), { pointerType: 'touch' })
        act(() => {
            jest.advanceTimersByTime(TOOLTIP_SHOW_DELAY)
        })

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('shows immediately on keyboard focus and hides on blur', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        fireEvent.focus(trigger)
        expect(screen.getByRole('tooltip')).toBeInTheDocument()

        fireEvent.blur(trigger)
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('does not show on the focus caused by a mouse click', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        fireEvent.pointerDown(trigger)
        fireEvent.focus(trigger)

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('shows on keyboard focus after an earlier click on the same trigger', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        fireEvent.pointerDown(trigger)
        fireEvent.focus(trigger)
        fireEvent.blur(trigger)
        fireEvent.focus(trigger)

        expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('hides on pointer down (click)', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        openWithHover(trigger)
        fireEvent.pointerDown(trigger)

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('hides on Escape', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        openWithHover(screen.getByText('Trigger'))
        fireEvent.keyDown(document, { key: 'Escape' })

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('keeps the tooltip open on other keys', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        openWithHover(screen.getByText('Trigger'))
        fireEvent.keyDown(document, { key: 'Enter' })

        expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('links the trigger to the tooltip with aria-describedby only while open', () => {
        render(
            <Tooltip content='Hint'>
                <button aria-describedby='external'>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        expect(trigger).toHaveAttribute('aria-describedby', 'external')

        openWithHover(trigger)
        const tooltip = screen.getByRole('tooltip')
        expect(trigger).toHaveAttribute('aria-describedby', `external ${tooltip.id}`)
    })

    it('calls the child own handlers', () => {
        const handlers = {
            onPointerEnter: jest.fn(),
            onPointerLeave: jest.fn(),
            onPointerDown: jest.fn(),
            onFocus: jest.fn(),
            onBlur: jest.fn()
        }

        render(
            <Tooltip content='Hint'>
                <button {...handlers}>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        hover(trigger)
        fireEvent.pointerLeave(trigger)
        fireEvent.pointerDown(trigger)
        fireEvent.focus(trigger)
        fireEvent.blur(trigger)

        Object.values(handlers).forEach((handler) => expect(handler).toHaveBeenCalledTimes(1))
    })

    it('does not remount the child when the tooltip toggles', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        openWithHover(trigger)
        expect(screen.getByText('Trigger')).toBe(trigger)

        fireEvent.keyDown(document, { key: 'Escape' })
        expect(screen.getByText('Trigger')).toBe(trigger)
    })

    it.each([
        ['undefined', undefined],
        ['null', null],
        ['an empty string', ''],
        ['whitespace', '   ']
    ])('renders nothing extra when content is %s', (_, content) => {
        render(
            <Tooltip content={content}>
                <button>Trigger</button>
            </Tooltip>
        )

        const trigger = screen.getByText('Trigger')
        fireEvent.focus(trigger)

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
        expect(trigger).not.toHaveAttribute('aria-describedby')
    })

    it('does not show when disabled', () => {
        render(
            <Tooltip
                content='Hint'
                disabled
            >
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('closes when it becomes disabled while open', () => {
        const { rerender } = render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        expect(screen.getByRole('tooltip')).toBeInTheDocument()

        rerender(
            <Tooltip
                content='Hint'
                disabled
            >
                <button>Trigger</button>
            </Tooltip>
        )
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('clears the pending show timer on unmount', () => {
        const { unmount } = render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        hover(screen.getByText('Trigger'))
        unmount()

        expect(() =>
            act(() => {
                jest.advanceTimersByTime(TOOLTIP_SHOW_DELAY)
            })
        ).not.toThrow()
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('removes the tooltip when the trigger unmounts while open', () => {
        const { unmount } = render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        unmount()

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('renders React node content without truncation or line clamping', () => {
        render(
            <Tooltip content={<strong>Bold hint</strong>}>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))

        const content = screen.getByText('Bold hint')
        expect(content.tagName).toBe('STRONG')
        expect(content.parentElement).not.toHaveClass(styles.clamped)
    })

    it('clamps string content and truncates it to the maximum length', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})

        render(
            <Tooltip content={'a'.repeat(TOOLTIP_MAX_LENGTH + 20)}>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))

        const content = screen.getByRole('tooltip').firstElementChild
        expect(content).toHaveClass(styles.clamped)
        expect(content?.textContent).toHaveLength(TOOLTIP_MAX_LENGTH)
        expect(content?.textContent?.endsWith('…')).toBe(true)
        expect(warn).toHaveBeenCalled()
    })

    it('applies a custom className to the bubble', () => {
        render(
            <Tooltip
                content='Hint'
                className='custom-tooltip'
            >
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        expect(screen.getByRole('tooltip')).toHaveClass('custom-tooltip')
    })

    it('positions the tooltip with the resolved placement and arrow offset', () => {
        render(
            <Tooltip
                content='Hint'
                placement='bottom'
            >
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))

        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toHaveClass(styles.bottom, styles.visible)
        expect(tooltip.style.top).toBe('138px')
        expect(tooltip.style.visibility).toBe('')
        expect((tooltip.lastElementChild as HTMLElement).style.left).not.toBe('')
    })

    it('flips to the bottom when the trigger is at the top of the viewport', () => {
        mockTriggerRect({ top: 0, bottom: 30, y: 0 })

        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        expect(screen.getByRole('tooltip')).toHaveClass(styles.bottom)
    })

    it('sets the vertical arrow offset for side placements', () => {
        render(
            <Tooltip
                content='Hint'
                placement='right'
            >
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))

        const tooltip = screen.getByRole('tooltip')
        expect(tooltip).toHaveClass(styles.right)
        expect((tooltip.lastElementChild as HTMLElement).style.top).not.toBe('')
    })

    it('repositions on scroll and hides when the trigger scrolls out of view', () => {
        const rectSpy = mockTriggerRect()

        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        expect(screen.getByRole('tooltip')).toBeInTheDocument()

        rectSpy.mockReturnValue({ ...visibleRect, top: 200, bottom: 230, y: 200, toJSON: () => ({}) } as DOMRect)
        fireEvent.scroll(window)
        expect(screen.getByRole('tooltip').style.top).not.toBe('')

        rectSpy.mockReturnValue({ ...visibleRect, top: -100, bottom: -70, y: -100, toJSON: () => ({}) } as DOMRect)
        fireEvent.scroll(window)
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('repositions on window resize', () => {
        render(
            <Tooltip content='Hint'>
                <button>Trigger</button>
            </Tooltip>
        )

        fireEvent.focus(screen.getByText('Trigger'))
        act(() => {
            window.dispatchEvent(new Event('resize'))
        })

        expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    it('registers its portal with a parent floating element while open', () => {
        const unregister = jest.fn()
        const registerChildPortal = jest.fn(() => unregister)

        render(
            <FloatingPortalContext.Provider value={{ registerChildPortal }}>
                <Tooltip content='Hint'>
                    <button>Trigger</button>
                </Tooltip>
            </FloatingPortalContext.Provider>
        )

        const trigger = screen.getByText('Trigger')
        fireEvent.focus(trigger)
        expect(registerChildPortal).toHaveBeenCalledWith(screen.getByRole('tooltip'))

        fireEvent.blur(trigger)
        expect(unregister).toHaveBeenCalled()
    })

    it('renders non-element children as is', () => {
        const { container } = render(<Tooltip content='Hint'>{'plain text' as unknown as React.ReactElement}</Tooltip>)
        expect(container).toHaveTextContent('plain text')
    })
})

describe('Tooltip utils', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('normalizeTooltip returns null for missing or empty text', () => {
        expect(normalizeTooltip(undefined)).toBeNull()
        expect(normalizeTooltip(null)).toBeNull()
        expect(normalizeTooltip('')).toBeNull()
        expect(normalizeTooltip('  ')).toBeNull()
        expect(normalizeTooltip({ content: '' })).toBeNull()
    })

    it('normalizeTooltip accepts a string or an options object', () => {
        expect(normalizeTooltip(' Hint ')).toStrictEqual({ content: 'Hint' })
        expect(normalizeTooltip({ content: 'Hint', placement: 'left', delay: 0 })).toStrictEqual({
            content: 'Hint',
            placement: 'left',
            delay: 0
        })
    })

    it('truncateTooltipText keeps short text untouched', () => {
        const text = 'a'.repeat(TOOLTIP_MAX_LENGTH)
        expect(truncateTooltipText(text)).toBe(text)
    })

    it('truncateTooltipText does not split emoji and warns only once per text', () => {
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})
        const text = '😀'.repeat(TOOLTIP_MAX_LENGTH + 1)

        const result = truncateTooltipText(text)
        truncateTooltipText(text)

        expect(Array.from(result)).toHaveLength(TOOLTIP_MAX_LENGTH)
        expect(result.endsWith('😀…')).toBe(true)
        expect(warn).toHaveBeenCalledTimes(1)
    })

    it('hasTooltipContent detects renderable content', () => {
        expect(hasTooltipContent(undefined)).toBe(false)
        expect(hasTooltipContent(false)).toBe(false)
        expect(hasTooltipContent(' ')).toBe(false)
        expect(hasTooltipContent(0)).toBe(true)
        expect(hasTooltipContent(<span />)).toBe(true)
    })
})
