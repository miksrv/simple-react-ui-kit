import { Meta, StoryFn } from '@storybook/react'

import { Button, ButtonProps, iconNames } from '../../src'

const meta: Meta<ButtonProps> = {
    title: 'Controls/Button',
    component: Button,
    argTypes: {
        mode: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'link'],
            // description: 'Visual style of the button',
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: '"primary", "secondary", "outline", "link"' }
            }
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['small', 'medium', 'large'],
            table: { type: { summary: '"small", "medium", "large"' } }
        },
        variant: {
            control: { type: 'select' },
            options: ['', 'positive', 'negative'],
            table: { type: { summary: '"positive", "negative", null' } }
        },
        icon: {
            control: { type: 'select' },
            options: Object.keys(iconNames).map((name) => name)
        },
        loading: {
            description: 'Show loading spinner instead of button content',
            control: { type: 'boolean' }
        },
        disabled: {
            description: 'Disabled button content',
            control: { type: 'boolean' }
        },
        stretched: {
            description: 'Whether the button takes up the full width of the container',
            control: { type: 'boolean' }
        },
        label: { control: { type: 'text' } },
        link: {
            control: { type: 'text' },
            description: 'Link to navigate to when the button is clicked'
        }
    }
}

export default meta

type ButtonGroupProps = {
    buttons: ButtonProps[]
}

const ButtonSandbox: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args}>Click me</Button>

const Template: StoryFn<ButtonGroupProps> = ({ buttons }: ButtonGroupProps) => (
    <div style={{ display: 'flex', gap: '10px' }}>
        {buttons.map((buttonProps, index) => (
            <Button
                key={index}
                {...buttonProps}
            >
                {buttonProps.content}
            </Button>
        ))}
    </div>
)

export const Sandbox = ButtonSandbox.bind({})
Sandbox.args = {
    mode: 'primary',
    size: 'medium'
}

export const Primary = Template.bind({})
Primary.args = {
    buttons: [
        { mode: 'primary', size: 'medium', content: 'Primary Medium' },
        { mode: 'primary', size: 'medium', content: 'With icon', icon: 'Map' },
        { mode: 'primary', size: 'medium', icon: 'Settings' },
        { mode: 'primary', size: 'medium', label: 'Loading...', loading: true },
        { mode: 'primary', size: 'medium', content: 'Disabled', disabled: true },
        { mode: 'primary', size: 'medium', content: 'Positive', variant: 'positive' },
        { mode: 'primary', size: 'medium', content: 'Negative', variant: 'negative' }
    ]
}

Primary.argTypes = { buttons: { table: { disable: true } } }

export const Secondary = Template.bind({})
Secondary.args = {
    buttons: [
        { mode: 'secondary', size: 'medium', content: 'Primary Medium' },
        { mode: 'secondary', size: 'medium', content: 'With icon', icon: 'Map' },
        { mode: 'secondary', size: 'medium', icon: 'Settings' },
        { mode: 'secondary', size: 'medium', label: 'Loading...', loading: true },
        { mode: 'secondary', size: 'medium', content: 'Disabled', disabled: true },
        { mode: 'secondary', size: 'medium', content: 'Positive', variant: 'positive' },
        { mode: 'secondary', size: 'medium', content: 'Negative', variant: 'negative' }
    ]
}

export const Outline = Template.bind({})
Outline.args = {
    buttons: [
        { mode: 'outline', size: 'medium', content: 'Primary Medium' },
        { mode: 'outline', size: 'medium', content: 'With icon', icon: 'Map' },
        { mode: 'outline', size: 'medium', icon: 'Settings' },
        { mode: 'outline', size: 'medium', label: 'Loading...', loading: true },
        { mode: 'outline', size: 'medium', content: 'Disabled', disabled: true },
        { mode: 'outline', size: 'medium', content: 'Positive', variant: 'positive' },
        { mode: 'outline', size: 'medium', content: 'Negative', variant: 'negative' }
    ]
}
