import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react-webpack5'

import { Dropdown, DropdownOption, DropdownProps, iconNames } from '../../src'

const meta: Meta<DropdownProps<string>> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        disabled: { control: 'boolean' }, // Control for the disabled state
        required: { control: 'boolean' }, // Control for the required state
        clearable: { control: 'boolean' }, // Control for the clearable state
        placeholder: { control: 'text' }, // Control for the placeholder text
        searchable: { control: 'boolean' } // Control for the searchable state
    }
}

export default meta

// Sample options with icons and text
const options: Array<DropdownOption<string>> = [
    { key: 'apple', value: 'Heart Empty Icon', icon: iconNames.HeartEmpty },
    { key: 'banana', value: 'Simple Camera Icon', icon: iconNames.Camera },
    { key: 'cherry', value: 'Medal or Award Icon', icon: iconNames.Award },
    { key: 'grape', value: 'Disabled Moon Icon', icon: iconNames.Moon, disabled: true },
    { key: 'orange', value: 'Disabled without any icon', disabled: true }
]

export const Basic: StoryFn = (args) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>()

    // Handle selection of a dropdown option
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
    label: 'Label for dropdown',
    placeholder: 'Please select option',
    size: 'medium',
    disabled: false,
    required: false,
    clearable: true,
    searchable: false
}

// Searchable dropdown story
export const SearchableDropdown: StoryFn = (args) => {
    const [search, setSearch] = useState<string | undefined>('')
    const [selectedOption, setSelectedOption] = useState<string | undefined>()

    // Handle selection of a dropdown option
    const handleSelect = (option: DropdownOption<string> | undefined) => {
        setSelectedOption(option?.key)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ height: 300, width: 300 }}>
                <Dropdown
                    {...args} // Spread the args from the controls
                    options={options} // Pass the options to the dropdown
                    value={selectedOption} // Bind selected option
                    onSelect={handleSelect} // Handle option selection
                    onSearch={setSearch} // Handle change search value
                />
            </div>
            <div style={{ marginLeft: '50px', marginTop: '20px' }}>
                <div>
                    {'Search value:'} {search || '-'}
                </div>
                <div>
                    {'Selected value:'} {options?.find(({ key }) => key === selectedOption)?.value || '-'}
                </div>
            </div>
        </div>
    )
}

// Default values for controls in the searchable dropdown story
SearchableDropdown.args = {
    placeholder: 'Search and select an option',
    disabled: false,
    required: false,
    clearable: true,
    searchable: true, // Enable searchable functionality
    label: 'Label for searchable dropdown'
}
