import type { Meta, StoryFn } from '@storybook/react'

import { Message, MessageProps } from '../../src'

const meta: Meta<MessageProps> = {
    title: 'Components/Message',
    component: Message,
    argTypes: {
        type: {
            control: 'select',
            options: ['error', 'warning', 'success', 'info'],
            description: 'The message type that defines the styles'
        },
        title: { control: 'text', description: 'Message Title' },
        children: { control: 'text', description: 'Content inside the message' }
    }
}

export default meta

const Template: StoryFn<MessageProps> = (args: MessageProps) => <Message {...args} />

// History with type positive
export const PositiveMessage = Template.bind({})
PositiveMessage.args = {
    type: 'success',
    title: 'Success!',
    children: 'Your action was successful.'
}

// History with type negative
export const NegativeMessage = Template.bind({})
NegativeMessage.args = {
    type: 'error',
    title: 'Error!',
    children: 'There was an error processing your request.'
}

// History with warning
export const WarningMessage = Template.bind({})
WarningMessage.args = {
    type: 'warning',
    title: 'Warning!',
    children: 'Please double-check the information.'
}

// History with information message and list
export const InfoMessageWithList = Template.bind({})
InfoMessageWithList.args = {
    type: 'info',
    title: 'Information',
    children: (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    )
}
