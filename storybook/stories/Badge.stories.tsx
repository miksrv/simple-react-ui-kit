import { Meta, StoryFn } from '@storybook/react'

import { Badge, BadgeProps } from '../../src'

const meta: Meta<BadgeProps> = {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        label: { control: 'text' },
        icon: { control: 'select', options: ['Close', 'Check', 'Alert'] },
        size: {
            control: { type: 'inline-radio' },
            options: ['small', 'medium', 'large'],
            table: { type: { summary: '"small", "medium", "large"' } }
        }
    }
}

export default meta

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => <Badge {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
    label: 'Default Badge',
    size: 'medium',
    icon: 'Wind'
}

// Story with removal action
export const Removable = Template.bind({})
Removable.args = {
    label: 'Removable Badge',
    size: 'medium',
    icon: 'Point',
    onClickRemove: (key: string | number | undefined) => alert(`Badge with key ${key} removed`)
}

// Story without an icon
export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
    size: 'medium',
    label: 'Badge Without Icon'
}
