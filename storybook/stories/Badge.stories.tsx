import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Badge, type BadgeProps, iconNames } from '../../src'

const meta: Meta<BadgeProps> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A compact label used to highlight status, categories, or metadata. Supports icons (named or custom React elements), three sizes, and an optional remove button for interactive tag-like use cases.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Text label displayed inside the badge',
            table: { type: { summary: 'string | number' } }
        },
        icon: {
            control: 'select',
            options: Object.keys(iconNames),
            description: 'Named icon or a custom React element displayed alongside the label',
            table: { type: { summary: 'IconTypes | React.ReactElement' } }
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
            description: 'Controls the visual size of the badge',
            table: {
                defaultValue: { summary: 'medium' },
                type: { summary: '"small" | "medium" | "large"' }
            }
        },
        onClickRemove: {
            control: false,
            description:
                'Callback fired when the remove (×) button is clicked. Receives the label value as the argument. Renders a remove button when provided.',
            table: { type: { summary: '(key?: string | number) => void' } }
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        },
        style: {
            control: 'object',
            description: 'Inline style object applied to the badge wrapper'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    name: 'Default',
    args: {
        label: 'Badge',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: { story: 'A basic badge with just a text label. Use the Controls panel to explore all props.' }
        }
    }
}

export const WithIcon: Story = {
    name: 'With Icon',
    args: {
        label: 'Wind Speed',
        icon: 'Wind',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: { story: 'Badge with a named icon rendered to the left of the label.' }
        }
    }
}

export const WithRemove: Story = {
    name: 'With Remove Button',
    args: {
        label: 'Removable',
        icon: 'Tag',
        size: 'medium',
        onClickRemove: (key: string | undefined) => alert(`Removed: ${String(key)}`)
    },
    parameters: {
        docs: {
            description: {
                story: 'When `onClickRemove` is provided a close (×) button appears. Clicking it fires the callback with the badge label as the argument — useful for tag-style inputs.'
            }
        }
    }
}

export const Sizes: Story = {
    name: 'Sizes',
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Badge
                label='Small'
                icon='Point'
                size='small'
            />
            <Badge
                label='Medium'
                icon='Point'
                size='medium'
            />
            <Badge
                label='Large'
                icon='Point'
                size='large'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The three available sizes — `small`, `medium`, and `large` — displayed side by side.'
            }
        }
    }
}

export const AllVariants: Story = {
    name: 'All Variants',
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <Badge
                label='Icon Badge'
                icon='StarFilled'
                size='medium'
            />
            <Badge
                label='Removable'
                icon='Tag'
                size='medium'
                onClickRemove={() => {}}
            />
            <Badge
                label='Emoji'
                icon={
                    <span
                        role='img'
                        aria-label='fire'
                    >
                        🔥
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Custom Color'
                size='medium'
                style={{ backgroundColor: '#3b82f6', color: '#fff' }}
            />
            <Badge
                label='No Icon'
                size='medium'
            />
            <Badge
                label='Small + Icon'
                icon='Bell'
                size='small'
            />
            <Badge
                label='Large + Remove'
                icon='Close'
                size='large'
                onClickRemove={() => {}}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'An overview of the most common badge configurations: icon-only, removable, emoji icon, custom colour, no icon, and mixed sizes.'
            }
        }
    }
}

export const WithEmojiIcon: Story = {
    name: 'With Emoji Icon',
    render: () => (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Badge
                label='Happy'
                icon={
                    <span
                        role='img'
                        aria-label='happy'
                    >
                        😊
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Cool'
                icon={
                    <span
                        role='img'
                        aria-label='cool'
                    >
                        😎
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Surprised'
                icon={
                    <span
                        role='img'
                        aria-label='surprised'
                    >
                        😲
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Love'
                icon={
                    <span
                        role='img'
                        aria-label='love'
                    >
                        😍
                    </span>
                }
                size='medium'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The `icon` prop accepts any `React.ReactElement`, making it easy to embed emoji spans or custom SVGs alongside the label.'
            }
        }
    }
}
