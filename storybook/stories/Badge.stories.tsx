import { Meta, StoryFn } from '@storybook/react-webpack5'

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

// Story with different sizes
export const EmojiIcons = () => (
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
)
EmojiIcons.storyName = 'With Emoji Icons'

// Story with custom background
export const CustomBackground = () => (
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
)
CustomBackground.storyName = 'Badge With Custom Background'
