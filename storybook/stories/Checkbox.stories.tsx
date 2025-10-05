import { Meta, StoryFn } from '@storybook/react-webpack5'

import { Checkbox, CheckboxProps } from '../../src'

const meta: Meta<CheckboxProps> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        label: { control: 'text' },
        indeterminate: { control: 'boolean' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' }
    }
}

export default meta

const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
    label: 'Default Checkbox',
    checked: false,
    indeterminate: false
}

// Story for checked state
export const Checked = Template.bind({})
Checked.args = {
    label: 'Checked Checkbox',
    checked: true
}

// Story for indeterminate state
export const Indeterminate = Template.bind({})
Indeterminate.args = {
    label: 'Indeterminate Checkbox',
    indeterminate: true
}

// Story for disabled state
export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Disabled Checkbox',
    disabled: true
}
