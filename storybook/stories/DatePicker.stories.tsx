import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker, type DatePickerProps, PresetOption } from '../../src'

// Helper components for stories that use hooks
const DefaultDatePickerDemo: React.FC<DatePickerProps> = (args) => {
    const [range, setRange] = useState<{ start?: string; end?: string }>({})
    return (
        <div style={{ minHeight: 300 }}>
            <DatePicker
                {...args}
                onPeriodSelect={(start, end) => setRange({ start, end })}
            />
            {range.start && (
                <p style={{ marginTop: 12, fontSize: 13, color: '#555' }}>
                    Selected: <strong>{range.start}</strong> &ndash; <strong>{range.end}</strong>
                </p>
            )}
        </div>
    )
}

const SingleDateModeDemo: React.FC = () => {
    const [date, setDate] = useState<string>('')
    return (
        <div style={{ minHeight: 300 }}>
            <DatePicker
                placeholder='Pick a date'
                onDateSelect={(d) => setDate(d)}
            />
            {date && (
                <p style={{ marginTop: 12, fontSize: 13, color: '#555' }}>
                    Selected: <strong>{date}</strong>
                </p>
            )}
        </div>
    )
}

const meta: Meta<DatePickerProps> = {
    title: 'Date/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A button-triggered date/range picker built on top of `Popout` and `Calendar`. It combines a set of quick-select presets (Today, Last Day, Last Week, etc.) with an inline calendar for custom range or single-date selection. Presets are shown only when `onPeriodSelect` is provided.'
            }
        }
    },
    argTypes: {
        locale: {
            control: 'inline-radio',
            options: ['en', 'ru'],
            description: 'Language for month/day labels and preset captions',
            table: {
                defaultValue: { summary: 'en' },
                type: { summary: '"en" | "ru"' }
            }
        },
        placeholder: {
            control: 'text',
            description: 'Text shown on the trigger button when no date is selected',
            table: { defaultValue: { summary: 'Select date' } }
        },
        buttonMode: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'link'],
            description: 'Visual mode passed to the underlying `Button` trigger',
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: '"primary" | "secondary" | "outline" | "link"' }
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the picker; the trigger button becomes non-interactive',
            table: { defaultValue: { summary: 'false' } }
        },
        periodDatesFormat: {
            control: 'text',
            description: 'Day.js format string used to display a date range on the trigger button',
            table: { defaultValue: { summary: 'DD.MM.YYYY' } }
        },
        singleDateFormat: {
            control: 'text',
            description: 'Day.js format string used to display a single selected date',
            table: { defaultValue: { summary: 'DD MMMM YYYY' } }
        },
        hidePresets: {
            control: false,
            description:
                'Array of `PresetOption` enum values to hide from the preset list. Use to remove presets that are not relevant to your use case.',
            table: { type: { summary: 'PresetOption[]' } }
        },
        datePeriod: {
            control: false,
            description: 'Controlled value — `[startDate, endDate]` in `YYYY-MM-DD` format',
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
        hideDaysOfWeek: {
            control: 'boolean',
            description: 'Hides the day-of-week row in the embedded calendar'
        },
        onDateSelect: {
            control: false,
            description: 'Callback for single-date mode. Receives the selected date in `YYYY-MM-DD`.'
        },
        onPeriodSelect: {
            control: false,
            description: 'Callback for range mode. Receives `(startDate, endDate)`. Also enables the preset buttons.'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => <DefaultDatePickerDemo {...args} />,
    args: {
        locale: 'en',
        placeholder: 'Select date range',
        buttonMode: 'primary'
    },
    parameters: {
        docs: {
            description: {
                story: 'Default date-range picker with all presets visible. Click the button to open the popout, choose a preset or pick start/end dates on the calendar.'
            }
        }
    }
}

export const SingleDateMode: Story = {
    name: 'Single Date Mode',
    render: () => <SingleDateModeDemo />,
    parameters: {
        docs: {
            description: {
                story: 'Use `onDateSelect` instead of `onPeriodSelect` to enable single-date mode. No presets are shown.'
            }
        }
    }
}

export const WithHiddenPresets: Story = {
    name: 'With Hidden Presets',
    render: () => (
        <div style={{ minHeight: 300 }}>
            <DatePicker
                placeholder='Select range'
                hidePresets={[PresetOption.TODAY, PresetOption.DAY, PresetOption.YEAR]}
                onPeriodSelect={() => {}}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Pass a `hidePresets` array of `PresetOption` values to remove specific quick-select options from the list.'
            }
        }
    }
}

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: 'Date picker disabled'
    },
    parameters: {
        docs: {
            description: {
                story: 'When `disabled` is `true` the trigger button is non-interactive and visually muted.'
            }
        }
    }
}

export const RussianLocale: Story = {
    name: 'Russian Locale',
    render: () => (
        <div style={{ minHeight: 300 }}>
            <DatePicker
                locale='ru'
                placeholder='Выберите период'
                buttonMode='secondary'
                onPeriodSelect={() => {}}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'With `locale="ru"` month names, day-of-week labels, and preset captions switch to Russian.'
            }
        }
    }
}

export const OutlineButton: Story = {
    name: 'Outline Button Mode',
    render: () => (
        <div style={{ minHeight: 300 }}>
            <DatePicker
                buttonMode='outline'
                placeholder='Select date'
                onPeriodSelect={() => {}}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'The `buttonMode` prop controls the visual style of the trigger button. Here it uses the `outline` mode.'
            }
        }
    }
}
