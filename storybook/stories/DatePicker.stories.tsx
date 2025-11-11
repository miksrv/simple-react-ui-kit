import React, { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { DatePicker, DatePickerProps } from '../../src'

const meta: Meta<DatePickerProps> = {
    title: 'Controls/DatePicker',
    component: DatePicker,
    argTypes: {
        locale: { control: { type: 'select', options: ['en', 'ru'] } },
        hideDaysOfWeek: { control: 'boolean' },
        minDate: { control: 'text' },
        maxDate: { control: 'text' },
        hidePresets: { control: false },
        disabled: { control: 'boolean' }
    }
}
export default meta

const Template: StoryFn<DatePickerProps> = (args) => {
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
Default.args = { locale: 'en' }

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
