import { Meta, StoryFn } from '@storybook/react'

import { Container, ContainerProps } from '../../src'

const meta: Meta<ContainerProps> = {
    title: 'Components/Container',
    component: Container,
    argTypes: {
        title: { control: 'text' },
        className: { control: 'text' },
        action: { control: 'text' },
        header: { control: 'text' },
        children: { control: 'text' },
        footer: { control: 'text' }
    }
}

export default meta

const Template: StoryFn<ContainerProps> = (args: ContainerProps) => <Container {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
    title: 'Container Title',
    children: 'This is the main content of the container.',
    footer: <div>Footer content goes here</div>
}

// Story with custom action
export const WithAction = Template.bind({})
WithAction.args = {
    title: 'Container with Action',
    children: 'This container includes a custom action button.',
    action: <button>Click Me</button>
}

// Story with custom header
export const CustomHeader = Template.bind({})
CustomHeader.args = {
    header: <div>Custom Header Content</div>,
    children: 'This container has a custom header.',
    footer: <div>Footer content goes here</div>
}

// Story with footer
export const WithFooter = Template.bind({})
WithFooter.args = {
    title: 'Container with Footer',
    children: 'This container includes a footer.',
    footer: <div>Custom Footer Content</div>
}
