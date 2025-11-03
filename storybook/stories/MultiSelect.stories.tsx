import React, { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { DropdownOption, iconNames, MultiSelect, MultiSelectProps } from '../../src'

const meta: Meta<MultiSelectProps<string>> = {
    title: 'Controls/MultiSelect',
    component: MultiSelect,
    argTypes: {
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        loading: { control: 'boolean' },
        closeOnSelect: { control: 'boolean' },
        placeholder: { control: 'text' },
        label: { control: 'text' },
        error: { control: 'text' },
        notFoundCaption: { control: 'text' }
    }
}

export default meta

const options: Array<DropdownOption<string>> = [
    { key: 'apple', value: 'Heart Empty Icon', icon: iconNames.HeartEmpty },
    { key: 'banana', value: 'Simple Camera Icon', icon: iconNames.Camera },
    { key: 'cherry', value: 'Medal or Award Icon', icon: iconNames.Award },
    { key: 'grape', value: 'Disabled Moon Icon', icon: iconNames.Moon, disabled: true },
    { key: 'orange', value: 'Disabled without any icon', disabled: true }
]

export const Basic: StoryFn<MultiSelectProps<string>> = (args) => {
    const [search, setSearch] = useState<string | undefined>()
    const [selectedOptions, setSelectedOptions] = useState<Array<DropdownOption<string>> | undefined>(undefined)

    const handleSelect = (options: Array<DropdownOption<string>> | undefined) => {
        setSelectedOptions(options)
    }

    return (
        <div>
            <div style={{ marginBottom: 15 }}>
                <div>{`Search: ${search || '-'}`}</div>
                <div>{`Selected: ${selectedOptions?.map((option) => option.value).join(', ') || '-'}`}</div>
            </div>
            <div style={{ height: 200 }}>
                <MultiSelect
                    {...args}
                    options={options}
                    value={selectedOptions?.map((option) => option.key) as string[]}
                    onSelect={handleSelect}
                    onSearch={setSearch}
                />
            </div>
        </div>
    )
}

Basic.args = {
    placeholder: 'Search options',
    disabled: false,
    required: false,
    loading: false,
    closeOnSelect: false,
    label: 'MultiSelect Label',
    notFoundCaption: 'No options found'
}
