import React, { useState } from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Select, type SelectOptionType, SelectProps } from '../../src'

const meta: Meta<SelectProps<string>> = {
    title: 'Controls/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Universal select component: `Dropdown` and `MultiSelect` in one. Supports search, portals, icons, emojis, images, validation, and full keyboard accessibility.\n\n' +
                    '**Keyboard navigation:**\n' +
                    '- `↓` / `↑` — open dropdown and navigate through options (disabled options are skipped)\n' +
                    '- `Enter` — select the highlighted option (or first non-disabled option if none highlighted)\n' +
                    '- `Escape` — close dropdown\n' +
                    '- `Backspace` / `Delete` — remove last badge (multiple) or clear selection (single)\n' +
                    '- `Space` — toggle dropdown (non-searchable)'
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
        size: {
            control: { type: 'inline-radio' },
            options: ['small', 'medium', 'large'],
            table: { type: { summary: '"small", "medium", "large"' } }
        },
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
                placeholder='Select'
                label='Single Select, Icons'
                options={weatherIcons}
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

export const KeyboardNavigation: StoryObj<typeof meta> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
            <Template
                searchable
                options={techStack}
                placeholder='Press ↓ to open and navigate'
                label='Searchable — use ↓ ↑ Enter Escape'
            />
            <Template
                options={techStack}
                placeholder='Press ↓ to open and navigate'
                label='Non-searchable — use ↓ ↑ Enter Space Escape'
            />
            <Template
                multiple
                searchable
                closeOnSelect={false}
                options={techStack}
                placeholder='Navigate and pick multiple'
                label='Multiple + Searchable — Backspace removes last badge'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story:
                    'Demonstrates full keyboard accessibility. ' +
                    'Click any select to focus it, then use arrow keys to navigate, Enter to select, and Escape to close. ' +
                    'Disabled options are automatically skipped during navigation.'
            }
        }
    }
}

export const Sizes: StoryObj<typeof meta> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
            <Template
                options={countries}
                size='small'
                placeholder='Small'
                label='Small'
            />
            <Template
                options={countries}
                size='medium'
                placeholder='Medium (default)'
                label='Medium'
            />
            <Template
                options={countries}
                size='large'
                placeholder='Large'
                label='Large'
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Three available sizes: `small`, `medium` (default), and `large`.'
            }
        }
    }
}

export const Disabled: StoryObj<typeof meta> = {
    render: Template,
    args: {
        options: countries,
        disabled: true,
        value: 'us',
        placeholder: 'Disabled select',
        label: 'Disabled'
    }
}

export const Clearable: StoryObj<typeof meta> = {
    render: Template,
    args: {
        options: countries,
        clearable: true,
        value: 'ru',
        placeholder: 'Select a country',
        label: 'Clearable (with pre-selected value)'
    }
}

export const Autocomplete: StoryFn<SelectProps<number>> = (args) => {
    const [search, setSearch] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState<number | undefined>(undefined)

    const allOptions: Array<SelectOptionType<number>> = [
        { key: 1, value: 'Apple' },
        { key: 2, value: 'Banana' },
        { key: 3, value: 'Cherry' },
        { key: 4, value: 'Date' },
        { key: 5, value: 'Elderberry' }
    ]

    const filteredOptions = search ? allOptions.filter((o) => o.value.toLowerCase().includes(search.toLowerCase())) : []

    const handleSearch = (text?: string) => {
        if (!!text?.length) {
            setSearch(text)
        }

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    const handleSelect = (selection: Array<SelectOptionType<number>> | undefined) => {
        const key = selection?.[0]?.key
        setSelected(key)
        if (!key) {
            setSearch('')
        }
    }

    return (
        <>
            <Select
                {...args}
                options={filteredOptions}
                loading={loading}
                value={selected}
                onSearch={handleSearch}
                onSelect={handleSelect}
            />
        </>
    )
}

Autocomplete.args = {
    placeholder: 'Start typing to search...',
    searchable: true,
    notFoundCaption: 'No results found'
}

Autocomplete.parameters = {
    docs: {
        description: {
            story:
                'Demonstrates autocomplete mode: `options` starts empty and is populated asynchronously via `onSearch`. ' +
                'The toggle arrow and dropdown are hidden until the user types. ' +
                'Once text is entered, `onSearch` fires, options load after 500ms, and the dropdown opens automatically.'
        }
    }
}
