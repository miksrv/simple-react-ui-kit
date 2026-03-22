import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Button, type ButtonProps, iconNames } from '../../src'

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A versatile button component that supports four visual modes, three sizes, positive/negative variants, icons, a loading spinner, and an optional link wrapper. Use the `link` prop to render the button inside an `<a>` tag without changing its appearance.'
            }
        }
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Button label content (takes precedence over `label` when both are provided)'
        },
        label: {
            control: 'text',
            description: 'Alternative text label (use when children is not a plain string)'
        },
        mode: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'link'],
            description: 'Visual style of the button',
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: '"primary" | "secondary" | "outline" | "link"' }
            }
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
            description: 'Size of the button',
            table: {
                defaultValue: { summary: 'medium' },
                type: { summary: '"small" | "medium" | "large"' }
            }
        },
        variant: {
            control: 'select',
            options: [undefined, 'positive', 'negative'],
            description: 'Applies a semantic colour overlay — green for positive, red for negative',
            table: { type: { summary: '"positive" | "negative"' } }
        },
        icon: {
            control: 'select',
            options: Object.keys(iconNames),
            description: 'Named icon rendered inside the button (replaces spinner when `loading` is false)',
            table: { type: { summary: 'IconTypes' } }
        },
        loading: {
            control: 'boolean',
            description: 'Replaces the button content with a spinner and prevents interaction',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
            table: { defaultValue: { summary: 'false' } }
        },
        stretched: {
            control: 'boolean',
            description: 'Expands the button to fill 100% of its container width',
            table: { defaultValue: { summary: 'false' } }
        },
        link: {
            control: 'text',
            description: 'When provided, wraps the button in an `<a>` tag pointing to this URL'
        },
        noIndex: {
            control: 'boolean',
            description: 'Adds `rel="noindex nofollow"` to the link wrapper (effective only with `link`)'
        },
        onClick: {
            control: false,
            description: 'Standard button click handler'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Click me',
        mode: 'primary',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: { story: 'Default interactive button. Use the Controls panel to explore all available props.' }
        }
    }
}

export const Modes: Story = {
    name: 'Modes',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button mode='primary'>Primary</Button>
            <Button mode='secondary'>Secondary</Button>
            <Button mode='outline'>Outline</Button>
            <Button mode='link'>Link</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'All four `mode` options shown side by side.' }
        }
    }
}

export const Sizes: Story = {
    name: 'Sizes',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size='small'>Small</Button>
            <Button size='medium'>Medium</Button>
            <Button size='large'>Large</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'The three available sizes: `small`, `medium`, and `large`.' }
        }
    }
}

export const WithIcon: Story = {
    name: 'With Icon',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button icon='Map'>With Map Icon</Button>
            <Button icon='Settings'>Settings</Button>
            <Button
                icon='Bell'
                mode='secondary'
            >
                Notifications
            </Button>
            <Button
                icon='Download'
                mode='outline'
            >
                Download
            </Button>
            {/* Icon-only button (no text) */}
            <Button
                icon='Settings'
                aria-label='Settings'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Buttons with icons. When no text is provided the button renders as a compact icon-only square.'
            }
        }
    }
}

export const LoadingState: Story = {
    name: 'Loading State',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button loading>Primary Loading</Button>
            <Button
                loading
                mode='secondary'
            >
                Secondary Loading
            </Button>
            <Button
                loading
                mode='outline'
            >
                Outline Loading
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'When `loading` is `true` the button content is replaced with a spinner and the button becomes non-interactive.'
            }
        }
    }
}

export const Variants: Story = {
    name: 'Positive / Negative Variants',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant='positive'>Confirm</Button>
            <Button variant='negative'>Delete</Button>
            <Button
                mode='outline'
                variant='positive'
            >
                Outline Positive
            </Button>
            <Button
                mode='outline'
                variant='negative'
            >
                Outline Negative
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The `variant` prop overlays a semantic colour — green (`positive`) for confirmatory actions and red (`negative`) for destructive ones.'
            }
        }
    }
}

export const AsLink: Story = {
    name: 'As Link',
    args: {
        children: 'Open GitHub',
        link: 'https://github.com/miksrv/simple-react-ui-kit',
        mode: 'primary',
        icon: 'External'
    },
    parameters: {
        docs: {
            description: {
                story: 'When the `link` prop is set the button is wrapped in an `<a>` tag. The visual appearance is identical to a regular button.'
            }
        }
    }
}

export const Stretched: Story = {
    name: 'Stretched (Full Width)',
    render: () => (
        <div style={{ maxWidth: '400px', width: '100%' }}>
            <Button stretched>Full Width Button</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'With `stretched` the button expands to 100% of its parent container width.' }
        }
    }
}

export const Disabled: Story = {
    name: 'Disabled',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button disabled>Disabled Primary</Button>
            <Button
                disabled
                mode='secondary'
            >
                Disabled Secondary
            </Button>
            <Button
                disabled
                mode='outline'
            >
                Disabled Outline
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'Disabled buttons are visually muted and do not respond to clicks.' }
        }
    }
}
