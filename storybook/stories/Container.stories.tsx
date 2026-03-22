import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button, Container, type ContainerProps, Progress } from '../../src'

const meta: Meta<ContainerProps> = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A card-style layout wrapper rendered as a `<section>` element. It composes a header area (title, custom header, action slot), a main content area (`children`), and an optional footer. All slots are optional — include only what you need.'
            }
        }
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Heading text rendered in the header as an `<h2>` element'
        },
        children: {
            control: false,
            description: 'Main body content of the container'
        },
        action: {
            control: false,
            description: 'React node placed in the header action slot (right-aligned). Typically a button or link.'
        },
        header: {
            control: false,
            description:
                'Custom header node that replaces or supplements the default title. Rendered between the title and the action slot.'
        },
        footer: {
            control: false,
            description: 'Footer content rendered below the main body, separated by a border'
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Container Title'
    },
    render: (args) => (
        <Container {...args}>
            <p>This is the main content area of the container. Add any React content here.</p>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: 'A container with a title and simple text content. Use the Controls panel to change the title and explore other props.'
            }
        }
    }
}

export const WithAction: Story = {
    name: 'With Action',
    render: () => (
        <Container
            title='Latest Updates'
            action={
                <Button
                    size='small'
                    mode='outline'
                >
                    See all
                </Button>
            }
        >
            <p>Content with an action button in the header.</p>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The `action` slot places a React node at the right edge of the header — ideal for "See all", "Edit", or settings buttons.'
            }
        }
    }
}

export const WithCustomHeader: Story = {
    name: 'With Custom Header',
    render: () => (
        <Container
            title='Profile Completion'
            header={
                <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>
                    Complete your profile to unlock all features
                    <Progress
                        value={60}
                        height={4}
                        color='main'
                    />
                </div>
            }
        >
            <p>The custom header is rendered between the title and the action slot.</p>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Use the `header` prop to inject arbitrary content (e.g. a progress bar, subtitle, or status badge) into the header area alongside the title.'
            }
        }
    }
}

export const WithFooter: Story = {
    name: 'With Footer',
    render: () => (
        <Container
            title='Invoice #1042'
            footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                    <Button
                        mode='outline'
                        size='small'
                    >
                        Cancel
                    </Button>
                    <Button size='small'>Pay now</Button>
                </div>
            }
        >
            <p>Invoice details and line items would go here.</p>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The `footer` slot renders below the body, separated by a line — great for action bars with confirm/cancel buttons.'
            }
        }
    }
}

export const FullExample: Story = {
    name: 'Full Example',
    render: () => (
        <Container
            title='User Registration'
            action={
                <Button
                    size='small'
                    mode='link'
                >
                    Need help?
                </Button>
            }
            header={
                <div style={{ fontSize: 12, color: '#666' }}>
                    Fill in all required fields to create your account
                    <Progress
                        value={40}
                        height={3}
                        color='main'
                    />
                </div>
            }
            footer={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: '#666' }}>Step 1 of 3</span>
                    <Button>Continue</Button>
                </div>
            }
            style={{ maxWidth: 500 }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '8px 0' }}>
                <p style={{ margin: 0 }}>Main form content goes here — inputs, selects, checkboxes, etc.</p>
            </div>
        </Container>
    ),
    parameters: {
        docs: {
            description: {
                story: 'A fully-composed example using all slots: `title`, `action`, `header` (with progress bar), body content, and `footer` (with step navigation).'
            }
        }
    }
}
