import React from 'react'

import Button from '@/button'
import {iconNames} from '@/icon'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        mode: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'link'],
            description: 'Visual style of the button',
            table: {
                defaultValue: {
                    summary: 'primary'
                },
                type: {
                    summary: '"primary", "secondary", "outline", "link"'
                }
            }
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['small', 'medium']
        },
        variant: {
            control: { type: 'select' },
            options: ['positive', 'negative', 'neutral']
        },
        icon: {
            control: { type: 'select' },
            options: Object.keys(iconNames).map((name) => name)
        },
        loading: {
            control: { type: 'boolean' }
        },
        content: {
            control: { type: 'text' }
        }
    }
}

export default meta

type ButtonProps = React.ComponentProps<typeof Button>

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args}>Click me</Button>

export const Primary = Template.bind({})
Primary.args = {
    mode: 'primary',
    size: 'medium'
}

export const Secondary = Template.bind({})
Secondary.args = {
    mode: 'secondary',
    size: 'medium'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    mode: 'primary',
    icon: 'Camera',
    size: 'medium'
}

export const Loading = Template.bind({})
Loading.args = {
    mode: 'primary',
    size: 'medium',
    loading: true,
    content: 'Loading...'
}
