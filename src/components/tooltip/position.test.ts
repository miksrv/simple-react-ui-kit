import {
    ARROW_EDGE_PADDING,
    computeTooltipPosition,
    isOutOfViewport,
    resolvePlacement,
    TOOLTIP_OFFSET,
    VIEWPORT_PADDING
} from './position'

const viewport = { width: 1000, height: 800 }
const tooltip = { width: 100, height: 40 }
const centerTrigger = { top: 400, left: 480, width: 40, height: 30 }

describe('Tooltip position', () => {
    describe('resolvePlacement', () => {
        it.each(['top', 'bottom', 'left', 'right'] as const)(
            'keeps the preferred %s side when there is room',
            (side) => {
                expect(resolvePlacement(side, centerTrigger, tooltip, viewport)).toBe(side)
            }
        )

        it('flips from top to bottom when the trigger is at the top edge', () => {
            const trigger = { top: 10, left: 480, width: 40, height: 30 }
            expect(resolvePlacement('top', trigger, tooltip, viewport)).toBe('bottom')
        })

        it('flips from bottom to top when the trigger is at the bottom edge', () => {
            const trigger = { top: 770, left: 480, width: 40, height: 30 }
            expect(resolvePlacement('bottom', trigger, tooltip, viewport)).toBe('top')
        })

        it('flips from left to right when the trigger is at the left edge', () => {
            const trigger = { top: 400, left: 10, width: 40, height: 30 }
            expect(resolvePlacement('left', trigger, tooltip, viewport)).toBe('right')
        })

        it('flips from right to left when the trigger is at the right edge', () => {
            const trigger = { top: 400, left: 950, width: 40, height: 30 }
            expect(resolvePlacement('right', trigger, tooltip, viewport)).toBe('left')
        })

        it('uses the side with more room when neither side fits', () => {
            const smallViewport = { width: 1000, height: 100 }
            const trigger = { top: 40, left: 480, width: 40, height: 30 }

            // 40 - 8 - 8 = 24px above vs 100 - 70 - 8 - 8 = 14px below
            expect(resolvePlacement('bottom', trigger, tooltip, smallViewport)).toBe('top')
            expect(resolvePlacement('top', trigger, tooltip, smallViewport)).toBe('top')
        })

        it('does not flip when both sides are equally tight', () => {
            const smallViewport = { width: 1000, height: 90 }
            const trigger = { top: 30, left: 480, width: 40, height: 30 }

            expect(resolvePlacement('bottom', trigger, tooltip, smallViewport)).toBe('bottom')
        })
    })

    describe('computeTooltipPosition', () => {
        it('centers the tooltip above the trigger', () => {
            expect(computeTooltipPosition('top', centerTrigger, tooltip, viewport)).toStrictEqual({
                placement: 'top',
                top: centerTrigger.top - TOOLTIP_OFFSET - tooltip.height,
                left: 450,
                arrowOffset: 50
            })
        })

        it('centers the tooltip below the trigger', () => {
            expect(computeTooltipPosition('bottom', centerTrigger, tooltip, viewport)).toStrictEqual({
                placement: 'bottom',
                top: centerTrigger.top + centerTrigger.height + TOOLTIP_OFFSET,
                left: 450,
                arrowOffset: 50
            })
        })

        it('centers the tooltip to the left of the trigger', () => {
            expect(computeTooltipPosition('left', centerTrigger, tooltip, viewport)).toStrictEqual({
                placement: 'left',
                top: 395,
                left: centerTrigger.left - TOOLTIP_OFFSET - tooltip.width,
                arrowOffset: 20
            })
        })

        it('centers the tooltip to the right of the trigger', () => {
            expect(computeTooltipPosition('right', centerTrigger, tooltip, viewport)).toStrictEqual({
                placement: 'right',
                top: 395,
                left: centerTrigger.left + centerTrigger.width + TOOLTIP_OFFSET,
                arrowOffset: 20
            })
        })

        it('shifts the tooltip inside the viewport near the right edge and keeps the arrow on the trigger', () => {
            const trigger = { top: 400, left: 970, width: 20, height: 20 }
            const position = computeTooltipPosition('top', trigger, tooltip, viewport)

            expect(position.left).toBe(viewport.width - VIEWPORT_PADDING - tooltip.width)
            // Trigger center is at 980, the tooltip starts at 892
            expect(position.arrowOffset).toBe(88)
        })

        it('shifts the tooltip inside the viewport near the left edge', () => {
            const trigger = { top: 400, left: 0, width: 20, height: 20 }
            const position = computeTooltipPosition('bottom', trigger, tooltip, viewport)

            expect(position.left).toBe(VIEWPORT_PADDING)
            expect(position.arrowOffset).toBe(ARROW_EDGE_PADDING)
        })

        it('shifts a side tooltip vertically near the top edge', () => {
            const trigger = { top: 0, left: 480, width: 20, height: 10 }
            const position = computeTooltipPosition('right', trigger, tooltip, viewport)

            expect(position.top).toBe(VIEWPORT_PADDING)
            expect(position.arrowOffset).toBe(ARROW_EDGE_PADDING)
        })

        it('never places the tooltip outside the viewport when it does not fit anywhere', () => {
            const tinyViewport = { width: 300, height: 60 }
            const trigger = { top: 20, left: 140, width: 20, height: 20 }
            const position = computeTooltipPosition('top', trigger, tooltip, tinyViewport)

            expect(position.top).toBeGreaterThanOrEqual(VIEWPORT_PADDING)
            expect(position.top + tooltip.height).toBeLessThanOrEqual(tinyViewport.height)
        })

        it('pins a tooltip wider than the viewport to the left padding', () => {
            const wide = { width: 600, height: 40 }
            const narrow = { width: 400, height: 800 }
            const position = computeTooltipPosition('top', centerTrigger, wide, narrow)

            expect(position.left).toBe(VIEWPORT_PADDING)
        })
    })

    describe('isOutOfViewport', () => {
        it('returns false for a visible trigger', () => {
            expect(isOutOfViewport(centerTrigger, viewport)).toBe(false)
        })

        it('returns false for a partially visible trigger', () => {
            expect(isOutOfViewport({ top: -10, left: 10, width: 20, height: 20 }, viewport)).toBe(false)
        })

        it.each([
            ['above', { top: -40, left: 10, width: 20, height: 20 }],
            ['below', { top: 800, left: 10, width: 20, height: 20 }],
            ['left of', { top: 10, left: -40, width: 20, height: 20 }],
            ['right of', { top: 10, left: 1000, width: 20, height: 20 }]
        ])('returns true for a trigger %s the viewport', (_, rect) => {
            expect(isOutOfViewport(rect, viewport)).toBe(true)
        })
    })
})
