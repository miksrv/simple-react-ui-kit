import React, { useState } from 'react'

import { Dropdown, DropdownOption, DropdownProps, iconNames } from '../../src'

import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<DropdownProps<any>> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        disabled: { control: 'boolean' }, // Control for the disabled state
        required: { control: 'boolean' }, // Control for the required state
        clearable: { control: 'boolean' }, // Control for the clearable state
        placeholder: { control: 'text' } // Control for the placeholder text
    }
}

export default meta

// Sample options with icons and text
const options: DropdownOption<string>[] = [
    { key: 'apple', value: 'Heart Empty Icon', icon: iconNames.HeartEmpty },
    { key: 'banana', value: 'Simple Camera Icon', icon: iconNames.Camera },
    { key: 'cherry', value: 'Medal or Award Icon', icon: iconNames.Award },
    { key: 'grape', value: 'Disabled Moon Icon', icon: iconNames.Moon, disabled: true },
    { key: 'orange', value: 'Disabled without any icon', disabled: true }
]

export const Basic: StoryFn = (args) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>()

    // Handle selection of dropdown option
    const handleSelect = (option: DropdownOption<string> | undefined) => {
        setSelectedOption(option?.key)
    }

    return (
        <div style={{ height: 300, width: 200 }}>
            <Dropdown
                {...args} // Spread the args from the controls
                options={options} // Pass the options to the dropdown
                value={selectedOption} // Bind selected option
                onSelect={handleSelect} // Handle option selection
            />
        </div>
    )
}

// Default values for controls in Storybook
Basic.args = {
    placeholder: 'Please select option',
    disabled: false,
    required: false,
    clearable: true,
    label: 'Label for dropdown'
}
