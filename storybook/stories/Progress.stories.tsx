import { Meta, StoryObj } from '@storybook/react'

import { Progress } from '../../src'

const meta: Meta<typeof Progress> = {
    title: 'Components/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'number', min: 0, max: 100 } },
        height: { control: { type: 'number', min: 2, max: 20 } },
        color: { control: 'select', options: ['main', 'red', 'orange', 'green'] },
        className: { control: 'text' }
    }
}
export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = { args: { value: 50 } }

export const Red: Story = {
    args: {
        value: 80,
        color: 'red'
    }
}

export const Orange: Story = {
    args: {
        value: 30,
        color: 'orange'
    }
}

export const Green: Story = {
    args: {
        value: 100,
        color: 'green'
    }
}

export const CustomClass: Story = {
    args: {
        value: 60,
        color: 'main',
        className: 'custom-class'
    }
}
