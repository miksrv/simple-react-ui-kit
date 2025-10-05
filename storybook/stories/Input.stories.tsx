import { Meta, StoryFn } from '@storybook/react-webpack5'

import { Input, InputProps } from '../../src'

const meta: Meta<InputProps> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the input field'
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['small', 'medium', 'large'],
            table: { type: { summary: '"small", "medium", "large"' } }
        },
        error: {
            control: 'text',
            description: 'Error message displayed below the input'
        },
        required: {
            control: 'boolean',
            description: 'Marks the input as required'
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the input field'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the input'
        }
    }
}

export default meta

const Template: StoryFn<InputProps> = (args) => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    label: 'Default Label',
    size: 'medium',
    error: '',
    placeholder: 'Enter text...'
}

export const RequiredInput = Template.bind({})
RequiredInput.args = {
    label: 'Required Input',
    required: true,
    placeholder: 'Required field'
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'This field is disabled'
}

export const InputWithError = Template.bind({})
InputWithError.args = {
    label: 'Input with Error',
    error: 'This field has an error',
    placeholder: 'Enter text...'
}
