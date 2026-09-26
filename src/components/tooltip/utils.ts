import React from 'react'

import { TooltipOptions, TooltipProp } from './types'

/** Maximum number of characters a string tooltip may contain; longer text is truncated with an ellipsis */
export const TOOLTIP_MAX_LENGTH = 150

const warnedTexts = new Set<string>()

// `process.env.NODE_ENV` is written out in full so bundlers can statically replace it;
// without a bundler `process` may not exist at all, which is treated as production.
const isDevelopment = (): boolean => {
    try {
        return process.env.NODE_ENV !== 'production'
    } catch {
        return false
    }
}

// Splits into user-perceived characters, so emoji sequences (👨‍👩‍👧, flags) are never cut in half.
// Falls back to code points where Intl.Segmenter is not available.
const splitCharacters = (text: string): string[] =>
    typeof Intl !== 'undefined' && 'Segmenter' in Intl
        ? Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), ({ segment }) => segment)
        : Array.from(text)

/**
 * Truncates the tooltip text to TOOLTIP_MAX_LENGTH characters (counting emoji as one character)
 * and warns about it once per text in development.
 */
export const truncateTooltipText = (text: string): string => {
    const chars = splitCharacters(text)

    if (chars.length <= TOOLTIP_MAX_LENGTH) {
        return text
    }

    if (isDevelopment() && !warnedTexts.has(text)) {
        warnedTexts.add(text)
        console.warn(
            `Tooltip: text is longer than ${TOOLTIP_MAX_LENGTH} characters and has been truncated. ` +
                'Keep tooltips short, or use the Tooltip component with custom content.'
        )
    }

    return `${chars
        .slice(0, TOOLTIP_MAX_LENGTH - 1)
        .join('')
        .trimEnd()}…`
}

/**
 * Converts the `tooltip` prop into tooltip options.
 * Returns null when there is nothing to show (no prop, empty or whitespace-only text).
 */
export const normalizeTooltip = (tooltip?: TooltipProp | null): (TooltipOptions & { content: string }) | null => {
    if (tooltip == null) {
        return null
    }

    const options = typeof tooltip === 'string' ? { content: tooltip } : tooltip
    const content = typeof options.content === 'string' ? options.content.trim() : ''

    return content ? { ...options, content: truncateTooltipText(content) } : null
}

/** Whether a React node renders anything visible */
export const hasTooltipContent = (content: React.ReactNode): boolean => {
    if (content == null || typeof content === 'boolean') {
        return false
    }

    if (typeof content === 'string') {
        return content.trim().length > 0
    }

    if (Array.isArray(content)) {
        return content.some(hasTooltipContent)
    }

    return true
}
