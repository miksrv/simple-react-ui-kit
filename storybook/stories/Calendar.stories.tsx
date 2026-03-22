import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Calendar, type CalendarProps } from '../../src'

// Helper components for stories that use hooks
const DefaultCalendarDemo: React.FC<CalendarProps> = (args) => {
    const [selected, setSelected] = useState<string>('')
    return (
        <div>
            <Calendar
                {...args}
                onDateSelect={(date) => setSelected(date)}
            />
            {selected && (
                <p style={{ marginTop: 8, fontSize: 13, color: '#555' }}>
                    Selected: <strong>{selected}</strong>
                </p>
            )}
        </div>
    )
}

const PeriodSelectionDemo: React.FC = () => {
    const [period, setPeriod] = useState<[string?, string?]>([])
    return (
        <div>
            <Calendar
                onPeriodSelect={(start, end) => setPeriod([start, end])}
                datePeriod={period}
            />
            {period[0] && period[1] && (
                <p style={{ marginTop: 8, fontSize: 13, color: '#555' }}>
                    Range: <strong>{period[0]}</strong> &ndash; <strong>{period[1]}</strong>
                </p>
            )}
        </div>
    )
}

const meta: Meta<CalendarProps> = {
    title: 'Date/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'An inline calendar that supports single-date selection (`onDateSelect`) and date-range selection (`onPeriodSelect`). Accepts `minDate` / `maxDate` constraints, an optional pre-selected period via `datePeriod`, and English or Russian locale.'
            }
        }
    },
    argTypes: {
        locale: {
            control: 'inline-radio',
            options: ['en', 'ru'],
            description: 'Language used for month and day-of-week labels',
            table: {
                defaultValue: { summary: 'en' },
                type: { summary: '"en" | "ru"' }
            }
        },
        hideDaysOfWeek: {
            control: 'boolean',
            description: 'Hides the row of day-of-week abbreviations above the day grid',
            table: { defaultValue: { summary: 'false' } }
        },
        datePeriod: {
            control: false,
            description: 'Pre-selected period as a `[startDate, endDate]` tuple in `YYYY-MM-DD` format',
            table: { type: { summary: '[string?, string?]' } }
        },
        minDate: {
            control: 'text',
            description: 'Earliest selectable date in `YYYY-MM-DD` format'
        },
        maxDate: {
            control: 'text',
            description: 'Latest selectable date in `YYYY-MM-DD` format'
        },
        containerClassName: {
            control: 'text',
            description: 'Additional CSS class applied to the calendar container element'
        },
        onDateSelect: {
            control: false,
            description: 'Callback fired on single-date click. Receives the date string in `YYYY-MM-DD` format.'
        },
        onPeriodSelect: {
            control: false,
            description:
                'Callback fired once both range endpoints are selected. Receives `(startDate, endDate)` in `YYYY-MM-DD` format. Enables range-selection mode.'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => <DefaultCalendarDemo {...args} />,
    args: { locale: 'en' },
    parameters: {
        docs: {
            description: {
                story: 'Single-date selection mode. Click any day to select it; the chosen date is displayed below the calendar. Use the Controls panel to switch locale or hide the days-of-week row.'
            }
        }
    }
}

export const PeriodSelection: Story = {
    name: 'Period Selection',
    render: () => <PeriodSelectionDemo />,
    parameters: {
        docs: {
            description: {
                story: 'Range-selection mode is activated by providing the `onPeriodSelect` callback. Click once to set the start date, then again to set the end date.'
            }
        }
    }
}

export const WithMinMaxDates: Story = {
    name: 'With Min / Max Dates',
    render: () => {
        const today = new Date()
        const fmt = (d: Date) => d.toISOString().slice(0, 10)
        const minDate = fmt(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5))
        const maxDate = fmt(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10))
        return (
            <div>
                <p style={{ fontSize: 13, marginBottom: 8, color: '#555' }}>
                    Selectable range: <strong>{minDate}</strong> to <strong>{maxDate}</strong>
                </p>
                <Calendar
                    minDate={minDate}
                    maxDate={maxDate}
                    onDateSelect={() => {}}
                />
            </div>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'Days outside the `minDate` – `maxDate` window are greyed out and cannot be selected.'
            }
        }
    }
}

export const Locales: Story = {
    name: 'Locales (en vs ru)',
    render: () => (
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <div>
                <p style={{ fontWeight: 600, marginBottom: 8 }}>English</p>
                <Calendar
                    locale='en'
                    onDateSelect={() => {}}
                />
            </div>
            <div>
                <p style={{ fontWeight: 600, marginBottom: 8 }}>Russian</p>
                <Calendar
                    locale='ru'
                    onDateSelect={() => {}}
                />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The same calendar rendered with English (default) and Russian locales side by side.'
            }
        }
    }
}

export const HiddenDaysOfWeek: Story = {
    name: 'Hidden Days-of-Week Row',
    render: (args) => (
        <Calendar
            {...args}
            onDateSelect={() => {}}
        />
    ),
    args: {
        hideDaysOfWeek: true,
        locale: 'en'
    },
    parameters: {
        docs: {
            description: {
                story: 'Setting `hideDaysOfWeek` removes the Mon–Sun header row for a more compact layout.'
            }
        }
    }
}
