import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Select, type SelectOptionType, SelectProps } from '../../src'

const meta: Meta<SelectProps<string>> = {
    title: 'Controls/Select',
    component: Select,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Universal select component: `Dropdown` and `MultiSelect` in one. Supports search, portals, icons, emojis, images, validation, and accessibility.'
            }
        }
    },
    argTypes: {
        className: { control: 'text', description: 'Additional class names for custom styling' },
        required: { control: 'boolean', description: 'Mark the select as required' },
        disabled: { control: 'boolean', description: 'Disable the select' },
        multiple: { control: 'boolean', description: 'Enable multiple selection' },
        searchable: { control: 'boolean', description: 'Enable search input' },
        clearable: { control: 'boolean', description: 'Show clear button to remove selection' },
        loading: { control: 'boolean', description: 'Show loading spinner' },
        closeOnSelect: {
            control: 'boolean',
            description: 'Whether the dropdown should close after selecting an option'
        },
        options: { control: false, description: 'Array of options to display in the select' },
        placeholder: { control: 'text', description: 'Placeholder text to display when no option is selected' },
        notFoundCaption: { control: 'text', description: 'Text to display if no options are found' },
        label: { control: 'text', description: 'Label text for the select' },
        error: { control: 'text', description: 'Error message to display when validation fails' },
        value: { control: false, description: 'Currently selected value(s)' },
        onSelect: { action: 'onSelect', description: 'Callback triggered when options are selected' },
        onSearch: { action: 'onSearch', description: 'Callback triggered when a search is made' },
        onOpen: { action: 'onOpen', description: 'Callback triggered when the dropdown is opened' }
    }
}

export default meta

const countries: Array<SelectOptionType<string>> = [
    { key: 'us', value: 'United States', emoji: '🇺🇸' },
    { key: 'ru', value: 'Russia', emoji: '🇷🇺' },
    { key: 'de', value: 'Germany', emoji: '🇩🇪' },
    { key: 'jp', value: 'Japan', emoji: '🇯🇵' },
    { key: 'fr', value: 'France', emoji: '🇫🇷' },
    { key: 'cn', value: 'China', emoji: '🇨🇳' },
    { key: 'br', value: 'Brazil', emoji: '🇧🇷' }
]

const techStack: Array<SelectOptionType<string>> = [
    { key: 'react', value: 'React', icon: 'StarFilled' },
    { key: 'vue', value: 'Vue.js', icon: 'Award' },
    { key: 'angular', value: 'Angular', icon: 'Chart' },
    { key: 'svelte', value: 'Svelte', icon: 'Lightning' },
    { key: 'node', value: 'Node.js', icon: 'Cloud' },
    { key: 'python', value: 'Python', icon: 'Moon' },
    { key: 'disabled', value: 'Disabled Option', disabled: true }
]

const weatherIcons: Array<SelectOptionType<string>> = [
    { key: 'temperature', value: 'Temperature Inside', icon: 'Thermometer' },
    { key: 'pressure', value: 'Press.', icon: 'Pressure' },
    { key: 'humidity', value: 'Humidity', icon: 'Water' },
    { key: 'precipitation', value: 'Precipitation', icon: 'WaterDrop' },
    { key: 'clouds', value: 'Clouds', icon: 'Cloud' }
]

const Template = (args: SelectProps<string>) => {
    const [value, setValue] = useState<string | string[] | undefined>(args.value)

    return (
        <Select
            {...args}
            value={value}
            onSelect={(opts) => {
                if (args.multiple) {
                    setValue(opts?.map((o) => o.key) || [])
                } else {
                    setValue(opts?.[0]?.key)
                }
            }}
        />
    )
}

export const Default: StoryObj<typeof meta> = {
    render: Template,
    args: {
        options: countries,
        multiple: true,
        clearable: false,
        searchable: true,
        placeholder: 'Select a country',
        label: 'Country'
    }
}

export const VariantsInOneStory: StoryObj<typeof meta> = {
    render: () => (
        <>
            <div style={{ width: 120 }}>
                <Template
                    placeholder='Select'
                    label='Single Select, Icons'
                    options={weatherIcons}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
                <Template
                    multiple={false}
                    placeholder='Single Select'
                    label='Single Select, No Search'
                    options={countries}
                />
                <Template
                    multiple={false}
                    searchable={true}
                    closeOnSelect={false}
                    placeholder='Search...'
                    label='Single Select, Search'
                    options={countries}
                />
                <Template
                    multiple={true}
                    closeOnSelect={false}
                    placeholder='Multiple Select'
                    label='Multiple Select, No Search'
                    options={countries}
                />
                <Template
                    multiple={true}
                    searchable={true}
                    closeOnSelect={false}
                    placeholder='Search...'
                    label='Multiple Select, Search'
                    options={countries}
                />
                <Template
                    options={countries}
                    loading
                    placeholder='Loading'
                    label='Loading'
                />
                <Template
                    options={countries}
                    error='Error example'
                    placeholder='With Error'
                    label='With Error'
                />
            </div>
        </>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Several variants of the Select component with different props in one story.'
            }
        }
    }
}

export const MultiSelect: StoryObj<typeof meta> = {
    render: Template,
    args: {
        multiple: true,
        closeOnSelect: false,
        options: techStack,
        placeholder: 'Choose technologies',
        label: 'Tech Stack'
    }
}

export const WithSearch: StoryObj<typeof meta> = {
    render: Template,
    args: {
        searchable: true,
        options: [...countries, ...techStack],
        placeholder: 'Search options...',
        label: 'Searchable Select'
    }
}

export const WithEmojis: StoryObj<typeof meta> = {
    render: Template,
    args: {
        options: countries,
        placeholder: 'Choose country',
        label: 'Country with Flag'
    }
}

export const Required: StoryObj<typeof meta> = {
    render: Template,
    args: {
        options: countries,
        required: true,
        placeholder: 'Required field',
        label: 'Required Field'
    }
}

export const NotFoundCaption: StoryObj<typeof meta> = {
    render: Template,
    args: {
        options: [],
        notFoundCaption: 'No countries available',
        placeholder: 'Search...',
        label: 'Empty List'
    }
}
