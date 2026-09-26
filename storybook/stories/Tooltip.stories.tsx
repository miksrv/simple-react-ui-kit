import React, { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Badge, Button, Icon, Tooltip, TOOLTIP_MAX_LENGTH, type TooltipProps } from '../../src'

const meta: Meta<TooltipProps> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A lightweight tooltip that appears on hover (after a short delay) and immediately on keyboard focus. ' +
                    'It is rendered into `document.body` with fixed positioning only while visible, so it adds nothing to the DOM ' +
                    'when hidden, never adds scrollbars and is never clipped by `overflow: hidden` parents. When there is not ' +
                    'enough room it flips to the opposite side and shifts along the edge to stay inside the viewport, keeping ' +
                    'the arrow pointed at the trigger.\n\n' +
                    '`Button`, `Icon`, `Badge` and Table columns (`headerTooltip`) accept a `tooltip` prop directly: ' +
                    '`<Button icon="Close" tooltip="Close" />`. Use the `Tooltip` component for any other element — it does ' +
                    'not wrap the child, so the child must forward pointer and focus handlers to a DOM node.\n\n' +
                    `String content is limited to ${TOOLTIP_MAX_LENGTH} characters and 6 lines; longer text is truncated with an ellipsis.\n\n` +
                    'Only one tooltip is visible at a time. Escape dismisses the tooltip without closing a parent Dialog or Popout. ' +
                    'Focus opens it only after keyboard interaction, not after a click or programmatic focus. Touch devices have no ' +
                    'hover, so the tooltip is not shown there — never put essential information only into a tooltip.'
            }
        }
    },
    argTypes: {
        content: {
            control: 'text',
            description: `Tooltip content. Strings are truncated to ${TOOLTIP_MAX_LENGTH} characters; React nodes are rendered as is`,
            table: { type: { summary: 'React.ReactNode' } }
        },
        placement: {
            control: 'inline-radio',
            options: ['top', 'bottom', 'left', 'right'],
            description: 'Preferred side. Flips to the opposite side when there is not enough room',
            table: {
                defaultValue: { summary: 'top' },
                type: { summary: '"top" | "bottom" | "left" | "right"' }
            }
        },
        delay: {
            control: 'number',
            description: 'Delay in milliseconds before showing on hover. Keyboard focus shows the tooltip immediately',
            table: { defaultValue: { summary: '400' } }
        },
        disabled: {
            control: 'boolean',
            description: 'Temporarily disables the tooltip',
            table: { defaultValue: { summary: 'false' } }
        },
        className: {
            control: 'text',
            description: 'Additional class names for the tooltip bubble'
        },
        children: {
            control: false,
            description: 'A single element that forwards pointer/focus handlers to a DOM node'
        }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '60px 0', display: 'flex', justifyContent: 'center' }}>
                <Story />
            </div>
        )
    ]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        content: 'Tooltip text',
        placement: 'top',
        children: <Button mode='secondary'>Hover or focus me</Button>
    },
    parameters: {
        docs: {
            description: { story: 'Use the Controls panel to explore all available props.' }
        }
    }
}

export const TooltipProp: Story = {
    name: 'Via tooltip Prop',
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button
                icon='Pencil'
                mode='secondary'
                tooltip='Edit'
            />
            <Button
                icon='Download'
                mode='secondary'
                tooltip='Download report'
            />
            <Button
                icon='Close'
                mode='secondary'
                tooltip={{ content: 'Delete', placement: 'bottom' }}
            />
            <Icon
                name='QuestionCircle'
                style={{ width: 20, height: 20 }}
                tooltip='Icons with a tooltip become focusable and are announced with the tooltip text'
            />
            <Badge
                label='Beta'
                tooltip='This feature is still in beta'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The most common case: icon-only buttons. The tooltip text also becomes the accessible name of an icon-only button. Move the pointer along the toolbar — after the first tooltip the next ones open instantly.'
            }
        }
    }
}

export const Placements: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12 }}>
            {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
                <Tooltip
                    key={placement}
                    content={`Placement: ${placement}`}
                    placement={placement}
                >
                    <Button mode='outline'>{placement}</Button>
                </Tooltip>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'The four preferred placements.' }
        }
    }
}

export const ViewportEdges: Story = {
    name: 'Viewport Edges (Flip & Shift)',
    render: () => {
        const corner = (style: React.CSSProperties, placement: TooltipProps['placement']) => (
            <div style={{ position: 'fixed', ...style }}>
                <Button
                    icon='Settings'
                    mode='secondary'
                    tooltip={{
                        content: `Preferred placement is "${placement}", but this tooltip stays inside the viewport`,
                        placement
                    }}
                />
            </div>
        )

        return (
            <>
                {corner({ top: 4, left: 4 }, 'top')}
                {corner({ top: 4, right: 4 }, 'right')}
                {corner({ bottom: 4, left: 4 }, 'left')}
                {corner({ bottom: 4, right: 4 }, 'bottom')}
                <p style={{ textAlign: 'center', paddingTop: 110, margin: 0 }}>
                    Hover the buttons in the corners of the viewport
                </p>
            </>
        )
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            // Rendered in its own iframe, so the fixed buttons sit in the corners of the story, not of the docs page
            story: { inline: false, iframeHeight: 280 },
            description: {
                story: 'Buttons pinned to the viewport corners. Each tooltip prefers a side without enough room, so it flips to the opposite side and shifts along the edge; the arrow keeps pointing at the button.'
            }
        }
    }
}

export const Multiline: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12 }}>
            <Tooltip content='A longer description wraps onto several lines instead of stretching across the whole screen.'>
                <Button mode='outline'>Wrapped text</Button>
            </Tooltip>
            <Tooltip content={'Line breaks\nare preserved\nin string content'}>
                <Button mode='outline'>Line breaks</Button>
            </Tooltip>
            <Tooltip content='https://example.com/a/very/long/url/without/any/spaces/that/still/wraps/correctly'>
                <Button mode='outline'>Long word</Button>
            </Tooltip>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Text wraps at a maximum width of 240px (or the viewport width minus padding), `\\n` line breaks are kept, and long words or URLs break instead of overflowing.'
            }
        }
    }
}

export const LengthLimit: Story = {
    name: 'Length Limit',
    render: () => (
        <Tooltip content={'This tooltip text is far too long for a tooltip. '.repeat(8)}>
            <Button mode='outline'>Truncated text</Button>
        </Tooltip>
    ),
    parameters: {
        docs: {
            description: {
                story: `String content longer than ${TOOLTIP_MAX_LENGTH} characters is truncated with an ellipsis (with a console warning in development) and clamped to 6 lines. For rich or long content, use a Popout or a Dialog instead.`
            }
        }
    }
}

export const CustomContent: Story = {
    name: 'Custom Content',
    render: () => (
        <Tooltip
            content={
                <>
                    <strong>Keyboard shortcut</strong>
                    <br />
                    Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save
                </>
            }
        >
            <Button icon='Download'>Save</Button>
        </Tooltip>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The standalone component accepts React nodes. They are not truncated, so keep them short.'
            }
        }
    }
}

export const Disabled: Story = {
    name: 'Disabled Trigger',
    render: () => (
        <Button
            disabled
            tooltip='You do not have permission to publish'
        >
            Publish
        </Button>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Tooltips work on disabled buttons in browsers that dispatch pointer events to disabled controls, which is handy to explain why an action is unavailable. A disabled button cannot receive focus, so keyboard users will not see it — do not put essential information only there.'
            }
        }
    }
}

const ThemeDemo: React.FC = () => {
    const [dark, setDark] = useState(false)

    // The tooltip is rendered into document.body, so theme variables must be defined on :root
    // (or body), not on a wrapper around the trigger.
    useEffect(() => {
        const root = document.documentElement

        if (dark) {
            root.style.setProperty('--text-color-primary', 'rgba(255, 255, 255, 0.9)')
            root.style.setProperty('--container-background-color', '#2c2d2e')
        }

        return () => {
            root.style.removeProperty('--text-color-primary')
            root.style.removeProperty('--container-background-color')
        }
    }, [dark])

    return (
        <div
            style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                padding: 24,
                borderRadius: 8,
                background: dark ? '#19191a' : 'transparent'
            }}
        >
            <Button
                mode='secondary'
                onClick={() => setDark((value) => !value)}
            >
                {dark ? 'Switch to light theme' : 'Switch to dark theme'}
            </Button>
            <Button
                icon='Moon'
                mode='secondary'
                tooltip='Tooltip colors follow the theme'
            />
        </div>
    )
}

export const Theming: Story = {
    render: () => <ThemeDemo />,
    parameters: {
        docs: {
            // Theme variables are changed on :root, so keep them away from the docs page itself
            story: { inline: false, iframeHeight: 200 },
            description: {
                story: 'The tooltip has no dedicated variables: it is an inverted bubble built from `--text-color-primary` (background) and `--container-background-color` (text), so a dark theme that swaps these colors gets a light tooltip automatically. Define theme variables on `:root` — the tooltip is rendered into `document.body`.'
            }
        }
    }
}
