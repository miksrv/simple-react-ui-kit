import React, { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { Datepicker, DatepickerProps } from '../../src'

const meta: Meta<DatepickerProps> = {
    title: 'Components/Datepicker',
    component: Datepicker,
    argTypes: {
        locale: { control: { type: 'select', options: ['en', 'ru'] } },
        hideDaysOfWeek: { control: 'boolean' },
        minDate: { control: 'text' },
        maxDate: { control: 'text' },
        hidePresets: { control: false }
    }
}
export default meta

const Template: StoryFn<DatepickerProps> = (args) => {
    const [range, setRange] = useState<{ start?: string; end?: string }>({})

    return (
        <div>
            <Datepicker
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

export const RussianLocale = Template.bind({})
RussianLocale.args = { locale: 'ru' }

export const WithMinMax = Template.bind({})
WithMinMax.args = {
    minDate: '2024-06-01',
    maxDate: '2024-06-30'
}
