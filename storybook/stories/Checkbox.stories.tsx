import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Checkbox, type CheckboxProps } from '../../src'

const meta: Meta<CheckboxProps> = {
    title: 'Controls/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A styled checkbox input that extends the native HTML checkbox with an optional label (string or React node) and an `indeterminate` state for partial selection. Built on top of `React.InputHTMLAttributes<HTMLInputElement>`.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label displayed next to the checkbox — accepts a plain string or any React node',
            table: { type: { summary: 'string | React.ReactNode' } }
        },
        checked: {
            control: 'boolean',
            description: 'Controlled checked state',
            table: { defaultValue: { summary: 'false' } }
        },
        indeterminate: {
            control: 'boolean',
            description: 'Renders the checkbox in an indeterminate (partially-checked) state',
            table: { defaultValue: { summary: 'false' } }
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the checkbox',
            table: { defaultValue: { summary: 'false' } }
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        },
        onChange: {
            control: false,
            description: 'Standard change handler — `(e: React.ChangeEvent<HTMLInputElement>) => void`'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Accept terms and conditions',
        checked: false
    },
    parameters: {
        docs: {
            description: {
                story: 'Default unchecked state. Use the Controls panel to toggle `checked`, `indeterminate`, and `disabled`.'
            }
        }
    }
}

export const Checked: Story = {
    args: {
        label: 'Remember me',
        checked: true
    },
    parameters: {
        docs: { description: { story: 'Checkbox in the checked state.' } }
    }
}

export const Indeterminate: Story = {
    args: {
        label: 'Select all',
        indeterminate: true
    },
    parameters: {
        docs: {
            description: {
                story: 'The `indeterminate` state is used in "select all" patterns when only some items in a list are selected.'
            }
        }
    }
}

export const Disabled: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Checkbox label='Disabled unchecked' disabled />
            <Checkbox label='Disabled checked' disabled checked readOnly />
            <Checkbox label='Disabled indeterminate' disabled indeterminate />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All three visual states (unchecked, checked, indeterminate) in their disabled form.'
            }
        }
    }
}

export const WithReactNodeLabel: Story = {
    name: 'With React Node Label',
    args: {
        label: (
            <span>
                I agree to the{' '}
                <a href='#' style={{ color: '#3b82f6' }}>
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' style={{ color: '#3b82f6' }}>
                    Privacy Policy
                </a>
            </span>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'The `label` prop accepts any React node, so you can embed links, icons, or formatted text directly.'
            }
        }
    }
}

export const Group: Story = {
    name: 'Checkbox Group',
    render: () => {
        const options = ['TypeScript', 'React', 'Node.js', 'GraphQL', 'Docker']
        const [selected, setSelected] = useState<string[]>(['React'])

        const toggle = (value: string) =>
            setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {options.map((opt) => (
                    <Checkbox
                        key={opt}
                        label={opt}
                        checked={selected.includes(opt)}
                        onChange={() => toggle(opt)}
                    />
                ))}
                <p style={{ marginTop: 8, fontSize: 13, color: '#555' }}>Selected: {selected.join(', ') || 'none'}</p>
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'A real-world checkbox group with controlled state. Selected values are shown below the list.'
            }
        }
    }
}
