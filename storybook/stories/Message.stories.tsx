import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Message, type MessageProps } from '../../src'

const meta: Meta<MessageProps> = {
    title: 'Components/Message',
    component: Message,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'An inline alert/notification banner that communicates feedback to the user. Four semantic types are supported: `error`, `warning`, `success`, and `info`. An optional `title` renders as a bold heading above the content. The `children` prop accepts any React content.'
            }
        }
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['error', 'warning', 'success', 'info'],
            description: 'Semantic type that drives the colour scheme and icon',
            table: { type: { summary: '"error" | "warning" | "success" | "info"' } }
        },
        title: {
            control: 'text',
            description: 'Optional bold heading rendered above the message body'
        },
        children: {
            control: 'text',
            description: 'Message body content — accepts strings or any React node'
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
        type: 'info',
        title: 'Information',
        children: 'Use the Controls panel to change the type, title, and content of this message.'
    },
    parameters: {
        docs: {
            description: {
                story: 'Default message with `info` type. Switch `type` in the Controls panel to preview all variants.'
            }
        }
    }
}

export const AllTypes: Story = {
    name: 'All Types',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Message
                type='info'
                title='Info'
            >
                This is an informational message to guide the user.
            </Message>
            <Message
                type='success'
                title='Success!'
            >
                Your changes have been saved successfully.
            </Message>
            <Message
                type='warning'
                title='Warning'
            >
                Please review the information before continuing.
            </Message>
            <Message
                type='error'
                title='Error'
            >
                Something went wrong. Please try again or contact support.
            </Message>
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'All four message types stacked for a side-by-side visual comparison.' }
        }
    }
}

export const WithTitle: Story = {
    name: 'With Title',
    args: {
        type: 'success',
        title: 'Account Created',
        children: 'Welcome aboard! Your account is ready to use.'
    },
    parameters: {
        docs: { description: { story: 'Message with a title heading above the body text.' } }
    }
}

export const WithoutTitle: Story = {
    name: 'Without Title',
    args: {
        type: 'warning',
        children: 'Your session will expire in 5 minutes. Save your work.'
    },
    parameters: {
        docs: { description: { story: 'Message without a title — renders only the body content.' } }
    }
}

export const WithCustomContent: Story = {
    name: 'With Custom Content (List)',
    render: () => (
        <Message
            type='error'
            title='Form validation failed'
        >
            <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
                <li>Email address is required</li>
                <li>Password must be at least 8 characters</li>
                <li>Please accept the terms of service</li>
            </ul>
        </Message>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The `children` prop accepts any React node — here it renders a bulleted list of validation errors.'
            }
        }
    }
}
