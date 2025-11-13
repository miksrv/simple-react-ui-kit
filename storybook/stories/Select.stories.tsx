import React, { useState } from 'react'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Select, type SelectOptionType, SelectProps } from '../../src'

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Универсальный компонент выбора: `Dropdown` и `MultiSelect` в одном. Поддерживает поиск, порталы, иконки, эмодзи, изображения, валидацию и доступность.'
            }
        }
    },
    argTypes: {
        multiple: {
            control: 'boolean',
            description: 'Режим мультиселекта'
        },
        placeholder: { control: 'text' },
        label: { control: 'text' },
        error: { control: 'text' },
        notFoundCaption: { control: 'text' },
        required: { control: 'boolean' },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        closeOnSelect: { control: 'boolean' }
    }
}

export default meta

type Story = StoryObj<typeof meta>

// Мок-данные
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
    { key: 'react', value: 'React', icon: 'React' },
    { key: 'vue', value: 'Vue.js', icon: 'Vue' },
    { key: 'angular', value: 'Angular', icon: 'Angular' },
    { key: 'svelte', value: 'Svelte', icon: 'Svelte' },
    { key: 'node', value: 'Node.js', icon: 'Node' },
    { key: 'python', value: 'Python', icon: 'Python' },
    { key: 'disabled', value: 'Disabled Option', disabled: true }
]

const images = [
    { key: 'img1', value: 'Image 1', image: { src: 'https://via.placeholder.com/40x40/ff6b6b/fff?text=1' } },
    { key: 'img2', value: 'Image 2', image: { src: 'https://via.placeholder.com/40x40/4ecdc4/fff?text=2' } },
    { key: 'img3', value: 'Image 3', image: { src: 'https://via.placeholder.com/40x40/45b7d1/fff?text=3' } }
]

// Универсальный шаблон
const Template: React.FC<SelectProps<string>> = (args) => {
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

export const Default: Story = {
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

export const VariantsInOneStory: Story = {
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
                story: 'Несколько вариантов компонента Select с разными пропсами в одной сторис.'
            }
        }
    }
}

export const MultiSelect: Story = {
    render: Template,
    args: {
        multiple: true,
        options: techStack,
        placeholder: 'Choose technologies',
        label: 'Tech Stack'
    }
}

export const WithSearch: Story = {
    render: Template,
    args: {
        options: [...countries, ...techStack],
        placeholder: 'Search options...',
        label: 'Searchable Select'
    }
}

export const WithIcons: Story = {
    render: Template,
    args: {
        multiple: true,
        options: techStack,
        placeholder: 'Select frameworks',
        label: 'Frameworks'
    }
}

export const WithEmojis: Story = {
    render: Template,
    args: {
        options: countries,
        placeholder: 'Choose country',
        label: 'Country with Flag'
    }
}

export const WithImages: Story = {
    render: Template,
    args: {
        options: images,
        placeholder: 'Select image',
        label: 'Image Options'
    }
}

export const LoadingState: Story = {
    render: Template,
    args: {
        options: countries,
        loading: true,
        placeholder: 'Loading...',
        label: 'Loading'
    }
}

export const Disabled: Story = {
    render: Template,
    args: {
        options: countries,
        disabled: true,
        placeholder: 'Disabled',
        label: 'Disabled Select'
    }
}

export const WithError: Story = {
    render: Template,
    args: {
        options: countries,
        error: 'This field is required',
        placeholder: 'Select country',
        label: 'Error State'
    }
}

export const Required: Story = {
    render: Template,
    args: {
        options: countries,
        required: true,
        placeholder: 'Required field',
        label: 'Required Field'
    }
}

export const NotFoundCaption: Story = {
    render: Template,
    args: {
        options: [],
        notFoundCaption: 'No countries available',
        placeholder: 'Search...',
        label: 'Empty List'
    }
}

export const CloseOnSelect: Story = {
    render: Template,
    args: {
        multiple: true,
        options: techStack,
        closeOnSelect: false,
        placeholder: 'Click to keep open',
        label: 'Keep Open After Select'
    }
}

export const MixedContent: Story = {
    render: () => {
        const [country, setCountry] = useState<string | undefined>()
        const [stack, setStack] = useState<string[]>([])

        return (
            <div style={{ display: 'grid', gap: '24px', maxWidth: '400px' }}>
                <Select
                    label='Country'
                    options={countries}
                    value={country}
                    onSelect={(opts) => setCountry(opts?.[0]?.key)}
                    placeholder='Select country'
                />
                <Select
                    multiple
                    label='Tech Stack'
                    options={techStack}
                    value={stack}
                    onSelect={(opts) => setStack(opts?.map((o) => o.key) || [])}
                    placeholder='Choose multiple'
                />
                <Select
                    options={images}
                    value={undefined}
                    placeholder='With images'
                />
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Комбинированное использование: обычный селект, мультиселект, изображения.'
            }
        }
    }
}
