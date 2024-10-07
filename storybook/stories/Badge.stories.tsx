import React from 'react'

import { Badge, BadgeProps } from '../../src'

import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<BadgeProps> = {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        label: { control: 'text' },
        icon: { control: 'select', options: ['Close', 'Check', 'Alert'] }
    }
}

export default meta

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => <Badge {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
    label: 'Default Badge',
    icon: 'Wind'
}

// Story with removal action
export const Removable = Template.bind({})
Removable.args = {
    key: 'point-badge',
    label: 'Removable Badge',
    icon: 'Point',
    onClickRemove: (key) => alert(`Badge with key ${key} removed`)
}

// Story without icon
export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
    label: 'Badge Without Icon'
}
