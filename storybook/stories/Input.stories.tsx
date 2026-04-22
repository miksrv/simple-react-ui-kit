import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Input, type InputProps } from '../../src'

const meta: Meta<InputProps> = {
    title: 'Controls/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A styled text input that wraps the native `<input>` element with an optional label, error message, two visual modes (`primary` / `ghost`), and three sizes. All standard `HTMLInputElement` attributes (e.g. `type`, `placeholder`, `required`, `disabled`, `onChange`) are forwarded to the underlying element.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text rendered above the input field'
        },
        placeholder: {
            control: 'text',
            description: 'Native placeholder attribute'
        },
        mode: {
            control: 'inline-radio',
            options: ['primary', 'ghost'],
            description: 'Visual style of the input',
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: '"primary" | "ghost"' }
            }
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
            description: 'Controls the height and font-size of the input',
            table: {
                defaultValue: { summary: 'medium' },
                type: { summary: '"small" | "medium" | "large"' }
            }
        },
        error: {
            control: 'text',
            description: 'Error message displayed below the input. Also applies an error border style.'
        },
        required: {
            control: 'boolean',
            description: 'Marks the input as required (native HTML attribute + visual indicator)'
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the input'
        },
        clearable: {
            control: 'boolean',
            description: 'Shows a clear button when the input has a value'
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
            description: 'Native `type` attribute of the underlying `<input>`'
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        },
        icon: {
            control: 'select',
            description: 'Icon displayed on the left side of the input field'
        },
        onChange: {
            control: false,
            description: 'Standard React change handler'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Full Name',
        placeholder: 'Enter your name',
        size: 'medium',
        mode: 'primary'
    },
    parameters: {
        docs: {
            description: {
                story: 'Default input with a label. Use the Controls panel to explore all available props.'
            }
        }
    }
}

export const WithLabel: Story = {
    name: 'With Label',
    args: {
        label: 'Email Address',
        placeholder: 'john@example.com',
        type: 'email'
    },
    parameters: {
        docs: { description: { story: 'Input with a descriptive label above the field.' } }
    }
}

export const WithError: Story = {
    name: 'With Error',
    args: {
        label: 'Email Address',
        placeholder: 'john@example.com',
        type: 'email',
        error: 'Please enter a valid email address'
    },
    parameters: {
        docs: {
            description: {
                story: 'The `error` prop renders a validation message below the field and applies a red border style.'
            }
        }
    }
}

export const Required: Story = {
    args: {
        label: 'Username',
        placeholder: 'Choose a username',
        required: true
    },
    parameters: {
        docs: { description: { story: 'Required inputs display a visual indicator alongside the label.' } }
    }
}

export const Disabled: Story = {
    args: {
        label: 'Account ID',
        value: 'ACC-001-2024',
        disabled: true
    },
    parameters: {
        docs: { description: { story: 'Disabled inputs are visually muted and cannot be interacted with.' } }
    }
}

export const Sizes: Story = {
    name: 'Sizes',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
            <Input
                label='Small'
                placeholder='Small input'
                size='small'
            />
            <Input
                label='Medium'
                placeholder='Medium input'
                size='medium'
            />
            <Input
                label='Large'
                placeholder='Large input'
                size='large'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'Three available sizes: `small`, `medium`, and `large` — stacked for comparison.' }
        }
    }
}

export const GhostMode: Story = {
    name: 'Ghost Mode',
    args: {
        label: 'Search',
        placeholder: 'Search anything...',
        mode: 'ghost'
    },
    parameters: {
        docs: {
            description: {
                story: 'The `ghost` mode renders a minimal borderless input — useful for inline search fields or table filters.'
            }
        }
    }
}

export const PasswordInput: Story = {
    name: 'Password Input',
    args: {
        label: 'Password',
        placeholder: '••••••••',
        type: 'password',
        required: true
    },
    parameters: {
        docs: { description: { story: 'A password-type input with required marking.' } }
    }
}

const ClearableTemplate = () => {
    const [value, setValue] = useState('Type something here')

    return (
        <Input
            label='Search'
            placeholder='Type to search...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            clearable
        />
    )
}

export const WithIcon: Story = {
    name: 'With Icon',
    args: {
        label: 'Search',
        placeholder: 'Search anything...',
        icon: 'Search'
    },
    parameters: {
        docs: {
            description: {
                story: 'The `icon` prop renders an icon on the left side of the input field. The input text is padded automatically to avoid overlapping the icon.'
            }
        }
    }
}

export const Clearable: Story = {
    name: 'Clearable',
    render: () => <ClearableTemplate />,
    parameters: {
        docs: {
            description: {
                story: 'When `clearable` is set to `true`, a clear button (×) appears on the right side of the input when it has a value. Clicking the button clears the input and triggers the `onChange` callback with an empty value. The button is hidden when the input is empty or disabled.'
            }
        }
    }
}
