import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Icon, iconNames, type IconTypes } from '../../src'

type IconProps = React.ComponentPropsWithoutRef<typeof Icon>

const meta: Meta<IconProps> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'An inline SVG icon component. Size is controlled via CSS (`width` / `height` through `style` or `className`). The `name` prop selects from the built-in icon set — use the `AllIcons` story to browse all available icons.'
            }
        }
    },
    argTypes: {
        name: {
            control: 'select',
            options: Object.keys(iconNames),
            description: 'The icon to render. Must be one of the built-in `IconTypes`.',
            table: { type: { summary: 'IconTypes' } }
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        },
        style: {
            control: 'object',
            description: 'Inline styles — use `width` and `height` to control icon size'
        },
        fill: {
            control: 'color',
            description: 'SVG `fill` attribute — overrides the colour inherited from CSS'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'StarFilled',
        style: { width: 32, height: 32 }
    },
    parameters: {
        docs: {
            description: {
                story: 'Single icon. Use the Controls panel to pick any icon by name and adjust its colour or size.'
            }
        }
    }
}

export const AllIcons: Story = {
    name: 'All Icons',
    render: () => {
        const [search, setSearch] = useState('')
        const [copied, setCopied] = useState<string | null>(null)

        const filtered = Object.keys(iconNames).filter((name) =>
            name.toLowerCase().includes(search.toLowerCase())
        )

        const copyName = async (name: string) => {
            await navigator.clipboard.writeText(name)
            setCopied(name)
            setTimeout(() => setCopied(null), 1500)
        }

        return (
            <div>
                <input
                    type='text'
                    placeholder='Search icons...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        fontSize: 14,
                        border: '1px solid #d1d5db',
                        borderRadius: 6,
                        width: '100%',
                        maxWidth: 300,
                        marginBottom: 20,
                        outline: 'none'
                    }}
                />
                {filtered.length === 0 && <p style={{ color: '#999' }}>No icons found for "{search}"</p>}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {filtered.map((name) => (
                        <div
                            key={name}
                            title={`Click to copy: ${name}`}
                            onClick={() => copyName(name)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 6,
                                width: 80,
                                cursor: 'pointer',
                                padding: '8px 4px',
                                borderRadius: 6,
                                transition: 'background 0.15s'
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = '#f3f4f6')}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
                        >
                            <Icon name={name as IconTypes} style={{ width: 24, height: 24 }} />
                            <span style={{ fontSize: 11, textAlign: 'center', color: '#555', wordBreak: 'break-word' }}>
                                {name}
                            </span>
                            {copied === name && <span style={{ fontSize: 10, color: '#16a34a' }}>Copied!</span>}
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story:
                    'Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard.'
            }
        }
    }
}

export const Sizes: Story = {
    name: 'Sizes',
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {([16, 24, 32, 48] as const).map((size) => (
                <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <Icon name='StarFilled' style={{ width: size, height: size }} />
                    <span style={{ fontSize: 12, color: '#555' }}>{size}px</span>
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Icon size is controlled via the `style` prop — pass `width` and `height` values in pixels.'
            }
        }
    }
}

export const CustomColor: Story = {
    name: 'Custom Color',
    render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Icon name='HeartFilled' style={{ width: 28, height: 28 }} fill='#ef4444' />
            <Icon name='StarFilled' style={{ width: 28, height: 28 }} fill='#f59e0b' />
            <Icon name='CheckCircle' style={{ width: 28, height: 28 }} fill='#22c55e' />
            <Icon name='Cloud' style={{ width: 28, height: 28 }} fill='#3b82f6' />
            <Icon name='Bell' style={{ width: 28, height: 28 }} fill='#8b5cf6' />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Pass a `fill` colour directly to the SVG element to override the default inherited colour.'
            }
        }
    }
}
