import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
    title: 'Foundations/Design Tokens',
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Every component is styled only through the CSS custom properties defined in `theme.css`. ' +
                    'Override a token at `:root` (or under `[data-theme="dark"]`) to retheme the whole kit. ' +
                    'Use the toolbar theme switcher to compare light and dark values.'
            }
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section style={{ marginBottom: 32 }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 'var(--font-size-large)', fontWeight: 600 }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>{children}</div>
    </section>
)

const Caption: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <code style={{ fontSize: 11, color: 'var(--text-color-secondary)', wordBreak: 'break-all' }}>{children}</code>
)

const Swatch: React.FC<{ token: string }> = ({ token }) => (
    <div style={{ width: 150, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div
            style={{
                height: 48,
                borderRadius: 'var(--radius-md)',
                background: `var(${token})`,
                boxShadow: '0 0 0 1px var(--border)'
            }}
        />
        <Caption>{token}</Caption>
    </div>
)

const Box: React.FC<{ token: string; style?: React.CSSProperties }> = ({ token, style }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
        <div
            style={{
                width: 72,
                height: 72,
                background: 'var(--surface-1)',
                boxShadow: '0 0 0 1px var(--border-strong)',
                ...style
            }}
        />
        <Caption>{token}</Caption>
    </div>
)

const Bar: React.FC<{ token: string }> = ({ token }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
        <div
            style={{
                height: `var(${token})`,
                width: 160,
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-main-background)',
                boxShadow: 'inset 0 0 0 1px var(--color-main)'
            }}
        />
        <Caption>{token}</Caption>
    </div>
)

const Space: React.FC<{ token: string }> = ({ token }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
        <div style={{ width: `var(${token})`, height: 16, background: 'var(--color-main)' }} />
        <Caption>{token}</Caption>
    </div>
)

const colours = {
    Surfaces: ['--body-background', '--surface-1', '--surface-2', '--surface-3', '--border', '--border-strong'],
    Text: ['--text-color-primary', '--text-color-secondary', '--text-color-disabled', '--color-contrast'],
    Brand: ['--color-main', '--color-main-hover', '--color-main-active', '--color-main-background'],
    Status: [
        '--color-green',
        '--color-green-background',
        '--color-orange',
        '--color-orange-background',
        '--color-red',
        '--color-red-background'
    ]
}

export const Overview: Story = {
    render: () => (
        <div style={{ fontFamily: 'var(--font-family)', color: 'var(--text-color-primary)' }}>
            {Object.entries(colours).map(([title, tokens]) => (
                <Section
                    key={title}
                    title={title}
                >
                    {tokens.map((token) => (
                        <Swatch
                            key={token}
                            token={token}
                        />
                    ))}
                </Section>
            ))}

            <Section title='Radii'>
                {['--radius-xs', '--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-full'].map(
                    (token) => (
                        <Box
                            key={token}
                            token={token}
                            style={{ borderRadius: `var(${token})` }}
                        />
                    )
                )}
            </Section>

            <Section title='Shadows'>
                {['--shadow-sm', '--shadow-md', '--shadow-lg', '--popout-shadow', '--container-shadow'].map((token) => (
                    <Box
                        key={token}
                        token={token}
                        style={{ boxShadow: `var(${token})`, borderRadius: 'var(--radius-lg)' }}
                    />
                ))}
            </Section>

            <Section title='Control heights'>
                {['--size-control-small', '--size-control-medium', '--size-control-large'].map((token) => (
                    <Bar
                        key={token}
                        token={token}
                    />
                ))}
            </Section>

            <Section title='Spacing'>
                {['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6'].map((token) => (
                    <Space
                        key={token}
                        token={token}
                    />
                ))}
            </Section>

            <Section title='Typography'>
                {['--font-size-small', '--font-size', '--font-size-large'].map((token) => (
                    <div
                        key={token}
                        style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 220 }}
                    >
                        <span style={{ fontSize: `var(${token})`, lineHeight: 'var(--line-height)' }}>
                            The quick brown fox
                        </span>
                        <Caption>{token}</Caption>
                    </div>
                ))}
            </Section>
        </div>
    )
}
