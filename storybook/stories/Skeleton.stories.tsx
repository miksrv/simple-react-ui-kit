import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Skeleton, type SkeletonProps } from '../../src'

const meta: Meta<SkeletonProps> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A pulsing placeholder element used to indicate loading content. Size it via `style` (width / height) or `className`. Combine multiple Skeleton instances to replicate the shape of the content being loaded.'
            }
        }
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        },
        style: {
            control: 'object',
            description: 'Inline styles — use `width`, `height`, `borderRadius`, etc. to shape the placeholder'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        style: { width: 200, height: 20, borderRadius: 4 }
    },
    parameters: {
        docs: {
            description: {
                story: 'A single skeleton block. Adjust `width` and `height` in the Controls panel.'
            }
        }
    }
}

export const TextPlaceholder: Story = {
    name: 'Text Placeholder',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
            <Skeleton style={{ width: '60%', height: 20, borderRadius: 4 }} />
            <Skeleton style={{ width: '100%', height: 14, borderRadius: 4 }} />
            <Skeleton style={{ width: '100%', height: 14, borderRadius: 4 }} />
            <Skeleton style={{ width: '80%', height: 14, borderRadius: 4 }} />
            <Skeleton style={{ width: '70%', height: 14, borderRadius: 4 }} />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Simulates a heading followed by a paragraph of body text — a common loading pattern for article or description sections.'
            }
        }
    }
}

export const CardPlaceholder: Story = {
    name: 'Card Placeholder',
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: 16,
                maxWidth: 500,
                padding: 16,
                border: '1px solid #e5e7eb',
                borderRadius: 8
            }}
        >
            {/* Avatar / image block */}
            <Skeleton style={{ width: 64, height: 64, borderRadius: '50%', flexShrink: 0 }} />

            {/* Text lines */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
                <Skeleton style={{ width: '50%', height: 18, borderRadius: 4 }} />
                <Skeleton style={{ width: '100%', height: 13, borderRadius: 4 }} />
                <Skeleton style={{ width: '80%', height: 13, borderRadius: 4 }} />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'A card skeleton with a circular avatar and text lines — typical for user profile or list item loading states.'
            }
        }
    }
}

export const TablePlaceholder: Story = {
    name: 'Table Placeholder',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 600 }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    style={{ display: 'flex', gap: 12 }}
                >
                    <Skeleton style={{ width: 40, height: 16, borderRadius: 4 }} />
                    <Skeleton style={{ flex: 2, height: 16, borderRadius: 4 }} />
                    <Skeleton style={{ flex: 1, height: 16, borderRadius: 4 }} />
                    <Skeleton style={{ flex: 1, height: 16, borderRadius: 4 }} />
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Simulates a loading table with five rows and four columns — mirrors the shape of the `Table` component loading state.'
            }
        }
    }
}

export const Custom: Story = {
    name: 'Custom (Button / Badge Shape)',
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Skeleton style={{ width: 120, height: 36, borderRadius: 6 }} />
            <Skeleton style={{ width: 80, height: 36, borderRadius: 6 }} />
            <Skeleton style={{ width: 60, height: 22, borderRadius: 20 }} />
            <Skeleton style={{ width: 80, height: 22, borderRadius: 20 }} />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Skeleton shapes can mimic buttons (rounded-rectangle) or badges (pill) by adjusting `width`, `height`, and `borderRadius`.'
            }
        }
    }
}
