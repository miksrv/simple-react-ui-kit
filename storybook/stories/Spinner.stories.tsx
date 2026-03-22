import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Spinner, type SpinnerProps } from '../../src'

const meta: Meta<SpinnerProps> = {
    title: 'Components/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'An animated SVG loading spinner. Size is controlled via `style` (`width` / `height`) or `className`. The spinner inherits its colour from the surrounding CSS — override it with the `fill` prop or CSS variables.'
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
            description: 'Inline styles — use `width` and `height` to control the spinner size'
        },
        fill: {
            control: 'color',
            description: 'SVG fill colour — overrides the colour inherited from CSS context'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        style: { width: 32, height: 32 }
    },
    parameters: {
        docs: {
            description: {
                story: 'Default spinner at 32px. Use the Controls panel to change `width`, `height`, or `fill` colour.'
            }
        }
    }
}

export const Sizes: Story = {
    name: 'Sizes',
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {[16, 24, 32, 48, 64].map((size) => (
                <div
                    key={size}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
                >
                    <Spinner style={{ width: size, height: size }} />
                    <span style={{ fontSize: 12, color: '#666' }}>{size}px</span>
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'The spinner at five common sizes: 16px, 24px, 32px, 48px, and 64px.' }
        }
    }
}

export const CustomColor: Story = {
    name: 'Custom Color',
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <Spinner
                style={{ width: 32, height: 32 }}
                fill='#3b82f6'
            />
            <Spinner
                style={{ width: 32, height: 32 }}
                fill='#ef4444'
            />
            <Spinner
                style={{ width: 32, height: 32 }}
                fill='#22c55e'
            />
            <Spinner
                style={{ width: 32, height: 32 }}
                fill='#f59e0b'
            />
            <Spinner
                style={{ width: 32, height: 32 }}
                fill='#8b5cf6'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'Spinners with different `fill` colours applied directly to the SVG element.' }
        }
    }
}

export const InlineWithText: Story = {
    name: 'Inline with Text',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Spinner style={{ width: 16, height: 16 }} />
                <span style={{ fontSize: 14 }}>Saving changes...</span>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 16px',
                    background: '#1e293b',
                    borderRadius: 8,
                    color: '#fff'
                }}
            >
                <Spinner
                    style={{ width: 20, height: 20 }}
                    fill='#fff'
                />
                <span>Loading data, please wait...</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The spinner paired with text in different contexts — light background and dark banner — showing how it adapts to surrounding styles.'
            }
        }
    }
}
