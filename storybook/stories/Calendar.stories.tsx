import { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { Calendar, CalendarProps } from '../../src'

const meta: Meta<CalendarProps> = {
    title: 'Components/Calendar',
    component: Calendar,
    argTypes: {
        hideDaysOfWeek: { control: 'boolean' },
        datePeriod: { control: 'object' },
        minDate: { control: 'text' },
        maxDate: { control: 'text' },
        locale: {
            control: { type: 'select' },
            options: ['en', 'ru'],
            table: {
                defaultValue: { summary: 'en' },
                type: { summary: '"en" | "ru"' }
            }
        }
    }
}
export default meta

const WithPeriodSelectTemplate: StoryFn<CalendarProps> = (args) => {
    const [range, setRange] = useState<{ start?: string; end?: string }>({})

    const handlePeriodSelect = (startDate?: string, endDate?: string) => {
        setRange({ start: startDate, end: endDate })
    }

    return (
        <>
            <Calendar
                {...args}
                onPeriodSelect={handlePeriodSelect}
            />
            <div style={{ marginTop: 16 }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </>
    )
}

export const WithPeriodSelect = WithPeriodSelectTemplate.bind({})
WithPeriodSelect.args = { locale: 'en' }

const WithDateSelectTemplate: StoryFn<CalendarProps> = (args) => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>()

    const handleDateSelect = (date: string) => {
        setSelectedDate(date)
    }

    return (
        <>
            <Calendar
                {...args}
                onDateSelect={handleDateSelect}
            />
            <div style={{ marginTop: 16 }}>
                <strong>Selected date:</strong> {selectedDate || '-'}
            </div>
        </>
    )
}

export const WithDateSelect = WithDateSelectTemplate.bind({})
WithDateSelect.args = { locale: 'en' }

const Template: StoryFn<CalendarProps> = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = { locale: 'en' }

export const RussianLocale = Template.bind({})
RussianLocale.args = { locale: 'ru' }

export const WithRange = Template.bind({})
WithRange.args = { datePeriod: ['2024-06-01', '2024-06-10'] }

export const HideDaysOfWeek = Template.bind({})
HideDaysOfWeek.args = { hideDaysOfWeek: true }

export const WithMinMax = Template.bind({})
WithMinMax.args = {
    minDate: '2024-06-05',
    maxDate: '2024-06-20'
}
