import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { DatePicker, DatePickerProps } from '../../src'

const meta: Meta<DatePickerProps> = {
    title: 'Controls/DatePicker',
    component: DatePicker,
    argTypes: {
        locale: {
            control: { type: 'select' },
            options: ['en', 'ru'],
            table: { type: { summary: '"en", "ru"' } }
        },
        datePeriod: { control: 'object', description: 'Tuple of start and end dates (YYYY-MM-DD)' },
        minDate: { control: 'text' },
        maxDate: { control: 'text' },
        buttonMode: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'link'],
            table: { type: { summary: '"primary", "secondary", "outline", "link"' } }
        },
        onDateSelect: { action: 'date selected', table: { disable: false } },
        onPeriodSelect: { action: 'period selected', table: { disable: false } },
        hidePresets: { control: 'object', description: 'List of preset options to hide' },
        periodDatesFormat: { control: 'text', description: 'Format for period range (default: DD.MM.YYYY)' },
        singleDateFormat: { control: 'text', description: 'Format for single date (default: DD MMMM YYYY)' },
        placeholder: { control: 'text', description: 'Caption when no date is selected' },
        disabled: { control: 'boolean' }
    }
}
export default meta

const Template: StoryFn<DatePickerProps> = (args: DatePickerProps) => {
    const [range, setRange] = useState<{ start?: string; end?: string }>({})

    return (
        <div style={{ position: 'relative', height: 290 }}>
            <DatePicker
                {...args}
                onPeriodSelect={(start, end) => setRange({ start, end })}
            />
            <div style={{ marginTop: 16 }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    locale: 'en',
    datePeriod: [
        new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        new Date().toISOString().slice(0, 10)
    ]
}

export const DateSelect = Template.bind({})
DateSelect.args = { locale: 'en' }
DateSelect.decorators = [
    () => {
        const [selectedDate, setSelectedDate] = React.useState<string | undefined>(undefined)
        const handleDateSelect = (date: string) => setSelectedDate(date)
        return (
            <div style={{ position: 'relative', height: 290 }}>
                <DatePicker
                    locale='en'
                    onDateSelect={handleDateSelect}
                />
                <div style={{ marginTop: 16 }}>
                    <strong>Selected date:</strong> {selectedDate || '-'}
                </div>
            </div>
        )
    }
]

export const RussianLocale = Template.bind({})
RussianLocale.args = { locale: 'ru' }

export const WithMinMax = Template.bind({})
WithMinMax.args = {
    minDate: '2024-06-01',
    maxDate: '2024-06-30'
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
