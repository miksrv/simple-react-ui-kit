import type { Meta, StoryObj } from '@storybook/react'

import { Badge, type BadgeProps } from '../../src'

const meta: Meta<BadgeProps> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        icon: { control: 'select', options: ['Close', 'Check', 'Alert', 'Wind', 'Point'] },
        size: {
            control: { type: 'inline-radio' },
            options: ['small', 'medium', 'large'],
            table: { type: { summary: '"small", "medium", "large"' } }
        },
        onClickRemove: { action: 'remove' },
        style: { control: 'object' }
    },
    parameters: { docs: { description: { component: 'Badge component for status and labels.' } } }
}

export default meta

type Story = StoryObj<BadgeProps>

export const Default: Story = {
    args: {
        label: 'Default Badge',
        size: 'medium',
        icon: 'Wind'
    }
}

export const Removable: Story = {
    args: {
        label: 'Removable Badge',
        size: 'medium',
        icon: 'Point'
    },
    parameters: { docs: { description: { story: 'Badge with removal action.' } } }
}

export const WithoutIcon: Story = {
    args: {
        size: 'medium',
        label: 'Badge Without Icon'
    }
}

export const EmojiIcons: Story = {
    render: () => (
        <>
            <Badge
                label='Happy'
                icon={
                    <span
                        role='img'
                        aria-label='happy'
                    >
                        😊
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Cool'
                icon={
                    <span
                        role='img'
                        aria-label='cool'
                    >
                        😎
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Surprised'
                icon={
                    <span
                        role='img'
                        aria-label='surprised'
                    >
                        😲
                    </span>
                }
                size='medium'
            />
            <Badge
                label='Love'
                icon={
                    <span
                        role='img'
                        aria-label='love'
                    >
                        😍
                    </span>
                }
                size='medium'
            />
        </>
    ),
    name: 'With Emoji Icons'
}

export const CustomBackground: Story = {
    render: () => (
        <>
            <Badge
                label='Blue BG + Emoji'
                icon={
                    <span
                        role='img'
                        aria-label='star'
                    >
                        ⭐️
                    </span>
                }
                size='medium'
                style={{ backgroundColor: '#2196f3', color: '#fff', marginLeft: 8 }}
            />
            <Badge
                label='Green BG'
                size='medium'
                style={{ backgroundColor: '#4caf50', color: '#fff', marginLeft: 8 }}
            />
            <Badge
                label='Yellow BG + Emoji'
                icon={
                    <span
                        role='img'
                        aria-label='fire'
                    >
                        🔥
                    </span>
                }
                size='medium'
                style={{ backgroundColor: '#ffeb3b', color: '#222', marginLeft: 8 }}
            />
            <Badge
                label='Gray BG'
                size='medium'
                style={{ backgroundColor: '#bdbdbd', color: '#222', marginLeft: 8 }}
            />
        </>
    ),
    name: 'Badge With Custom Background'
}
