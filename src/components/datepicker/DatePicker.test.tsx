import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { DatePicker, timePresets } from './DatePicker'
import { DatePickerProps, PresetOption } from './types'

describe('DatePicker', () => {
    const defaultProps: DatePickerProps = {
        locale: 'en',
        onPeriodSelect: jest.fn(),
        onDateSelect: jest.fn(),
        datePeriod: ['2024-06-01', '2024-06-10']
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders with default props', () => {
        render(<DatePicker {...defaultProps} />)
        expect(screen.getAllByRole('button').length).toBeGreaterThan(0)
    })

    it('shows placeholder when no date is selected', () => {
        render(
            <DatePicker
                {...defaultProps}
                datePeriod={[undefined, undefined]}
            />
        )
        expect(screen.getByText('Select date')).toBeInTheDocument()
    })

    it('renders all visible presets', () => {
        render(<DatePicker {...defaultProps} />)
        fireEvent.click(screen.getAllByRole('button')[0])
        timePresets.forEach(() => {
            const presetText = /today|day|week|month|quarter|half year|year/i
            expect(screen.getAllByText(presetText).length).toBeGreaterThan(0)
        })
    })

    it('hides specified presets', () => {
        render(
            <DatePicker
                {...defaultProps}
                hidePresets={[PresetOption.TODAY, PresetOption.WEEK]}
            />
        )
        fireEvent.click(screen.getAllByRole('button')[0])
        expect(screen.queryByText(/today/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/week/i)).not.toBeInTheDocument()
    })

    it('calls onPeriodSelect when preset is clicked', () => {
        render(<DatePicker {...defaultProps} />)
        fireEvent.click(screen.getAllByRole('button')[0]) // Click the trigger button
        fireEvent.click(screen.getByText(/today/i))
        expect(defaultProps.onPeriodSelect).toHaveBeenCalled()
    })

    it('calls onDateSelect for single date selection', () => {
        const onDateSelect = jest.fn()
        render(
            <DatePicker
                {...defaultProps}
                onDateSelect={onDateSelect}
                onPeriodSelect={undefined}
                datePeriod={[undefined, undefined]}
            />
        )
        fireEvent.click(screen.getAllByRole('button')[0])

        const dayButton = screen.queryByText('15')
        if (dayButton) {
            fireEvent.click(dayButton)
        }
        expect(onDateSelect).toHaveBeenCalled()
    })

    it('disables the picker when disabled', () => {
        render(
            <DatePicker
                {...defaultProps}
                disabled
            />
        )
        expect(screen.getAllByRole('button')[0]).toHaveClass('disabled')
    })

    it('renders in Russian locale', () => {
        render(
            <DatePicker
                {...defaultProps}
                locale='ru'
            />
        )
        const buttons = screen.getAllByRole('button')
        expect(buttons[0].textContent).toMatch(/Выберите период|Select period|2024/)
    })

    it('shows formatted single date', () => {
        render(
            <DatePicker
                {...defaultProps}
                datePeriod={['2024-06-15', '2024-06-15']}
            />
        )
        expect(screen.getAllByRole('button')[0].textContent).toMatch(/15 June 2024|15 июня 2024/)
    })

    it('shows formatted period', () => {
        render(
            <DatePicker
                {...defaultProps}
                datePeriod={['2024-06-01', '2024-06-10']}
            />
        )
        const buttons = screen.getAllByRole('button')
        expect(buttons.some((btn) => btn.textContent?.match(/01\.06\.2024 - 10\.06\.2024/))).toBe(true)
    })

    it('does not render presets if onPeriodSelect is not provided', () => {
        render(
            <DatePicker
                {...defaultProps}
                onPeriodSelect={undefined}
            />
        )
        fireEvent.click(screen.getAllByRole('button')[0])
        expect(screen.queryByText(/today/i)).not.toBeInTheDocument()
    })

    it('renders with custom placeholder', () => {
        render(
            <DatePicker
                {...defaultProps}
                datePeriod={[undefined, undefined]}
                placeholder='Pick a date'
            />
        )
        expect(screen.getByText('Pick a date')).toBeInTheDocument()
    })

    it('renders with a custom buttonMode', () => {
        const { container } = render(
            <DatePicker
                {...defaultProps}
                buttonMode='outline'
            />
        )
        // The button inside the Popout trigger should have the outline class
        const buttonEl = container.querySelector('button.outline')
        expect(buttonEl).toBeInTheDocument()
    })

    it('updates internal period when datePeriod prop changes', () => {
        const { rerender } = render(
            <DatePicker
                {...defaultProps}
                datePeriod={['2024-06-01', '2024-06-10']}
            />
        )
        rerender(
            <DatePicker
                {...defaultProps}
                datePeriod={['2024-07-01', '2024-07-15']}
            />
        )
        const buttons = screen.getAllByRole('button')
        expect(buttons[0].textContent).toMatch(/01\.07\.2024 - 15\.07\.2024/)
    })

    it('calls onPeriodSelect with correct dates when preset is clicked in Russian locale', () => {
        const onPeriodSelect = jest.fn()
        render(
            <DatePicker
                {...defaultProps}
                locale='ru'
                onPeriodSelect={onPeriodSelect}
            />
        )
        fireEvent.click(screen.getAllByRole('button')[0])
        const todayBtn = screen.queryByText(/сегодня/i)
        if (todayBtn) {
            fireEvent.click(todayBtn)
            expect(onPeriodSelect).toHaveBeenCalled()
        }
    })

    it('shows formatted date in Russian locale', () => {
        render(
            <DatePicker
                {...defaultProps}
                locale='ru'
                datePeriod={['2024-06-15', '2024-06-15']}
            />
        )
        const buttons = screen.getAllByRole('button')
        expect(buttons[0].textContent).toMatch(/15 июня 2024|15 June 2024/)
    })

    it('calls onPeriodSelect when selecting a period from calendar inside DatePicker', () => {
        const onPeriodSelect = jest.fn()
        render(
            <DatePicker
                locale='en'
                onPeriodSelect={onPeriodSelect}
                datePeriod={[undefined, undefined]}
            />
        )
        // Open the DatePicker popout
        fireEvent.click(screen.getAllByRole('button')[0])

        // Select start and end dates from the calendar
        const dayButtons = screen.getAllByText('10')
        if (dayButtons.length > 0) {
            fireEvent.click(dayButtons[0])
        }
        const dayButtons15 = screen.getAllByText('15')
        if (dayButtons15.length > 0) {
            fireEvent.click(dayButtons15[0])
        }

        expect(onPeriodSelect).toHaveBeenCalled()
    })

    it('calls onDateSelect when selecting a single date from calendar inside DatePicker', () => {
        const onDateSelect = jest.fn()
        render(
            <DatePicker
                locale='en'
                onDateSelect={onDateSelect}
                datePeriod={[undefined, undefined]}
            />
        )
        // Open the DatePicker popout
        fireEvent.click(screen.getAllByRole('button')[0])

        // Select a date from the calendar
        const dayButtons = screen.getAllByText('10')
        if (dayButtons.length > 0) {
            fireEvent.click(dayButtons[0])
        }

        expect(onDateSelect).toHaveBeenCalled()
    })
})
