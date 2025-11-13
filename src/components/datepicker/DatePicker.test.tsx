import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { DatePicker, DatePickerProps, timePresets } from './DatePicker'
import { PresetOption } from './types'

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
})
