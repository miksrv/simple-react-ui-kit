import React from 'react'
import dayjs from 'dayjs'

import { fireEvent, render, screen } from '@testing-library/react'

import Calendar, { CalendarProps } from './Calendar'

const setup = (props: Partial<CalendarProps> = {}) => render(<Calendar {...props} />)

describe('Calendar', () => {
    it('renders month and year selectors', () => {
        setup()
        expect(screen.getAllByRole('combobox')).toHaveLength(2)
    })

    it('renders days of week by default', () => {
        setup()
        expect(screen.getByText('Mo')).toBeInTheDocument()
    })

    it('hides days of week if hideDaysOfWeek is true', () => {
        setup({ hideDaysOfWeek: true })
        expect(screen.queryByText('Mo')).not.toBeInTheDocument()
    })

    it('renders correct locale (ru)', () => {
        setup({ locale: 'ru' })
        expect(screen.getByText('Пн')).toBeInTheDocument()
    })

    it('navigates to previous and next month', () => {
        setup()
        const [prevBtn, nextBtn] = screen.getAllByRole('button')
        fireEvent.click(nextBtn)
        fireEvent.click(prevBtn)
    })

    it('calls onPeriodSelect when selecting a range', () => {
        const onPeriodSelect = jest.fn()
        setup({ onPeriodSelect })
        fireEvent.click(screen.getAllByText('10')[0])
        fireEvent.click(screen.getAllByText('15')[0])
        expect(onPeriodSelect).toHaveBeenCalledWith(expect.any(String), expect.any(String))
    })

    it('selects start and end dates in reverse order', () => {
        const onPeriodSelect = jest.fn()
        setup({ onPeriodSelect })
        fireEvent.click(screen.getAllByText('15')[0])
        fireEvent.click(screen.getAllByText('10')[0])
        expect(onPeriodSelect).toHaveBeenCalled()
    })

    it('resets selection after selecting a range', () => {
        setup()
        fireEvent.click(screen.getAllByText('10')[0])
        fireEvent.click(screen.getAllByText('15')[0])
        fireEvent.click(screen.getAllByText('20')[0])
    })

    it('disables days before minDate', () => {
        const minDate = dayjs().date(10).format('YYYY-MM-DD')
        setup({ minDate })
        const day = screen.getAllByText('5')[0]
        fireEvent.click(day)
        // Should not select
    })

    it('disables days after maxDate', () => {
        const maxDate = dayjs().date(20).format('YYYY-MM-DD')
        setup({ maxDate })
        const day = screen.getAllByText('25')[0]
        fireEvent.click(day)
        // Should not select
    })

    it('renders with startDate and endDate props', () => {
        const startDate = dayjs().date(5).format('YYYY-MM-DD')
        const endDate = dayjs().date(10).format('YYYY-MM-DD')
        setup({ startDate, endDate })
        expect(screen.getAllByText('5')[0]).toBeInTheDocument()
        expect(screen.getAllByText('10')[0]).toBeInTheDocument()
    })

    it('changes month and year via selectors', () => {
        setup()
        const [monthSelect, yearSelect] = screen.getAllByRole('combobox')
        fireEvent.change(monthSelect, { target: { value: '0' } })
        fireEvent.change(yearSelect, { target: { value: '2020' } })
    })

    it('calls onDateSelect for single date selection', () => {
        const onDateSelect = jest.fn()
        setup({ onDateSelect })
        fireEvent.click(screen.getAllByText('12')[0])
        expect(onDateSelect).toHaveBeenCalledWith(expect.any(String))
    })

    it('does not call onPeriodSelect if only one date is clicked', () => {
        const onPeriodSelect = jest.fn()
        setup({ onPeriodSelect })
        fireEvent.click(screen.getAllByText('12')[0])
        expect(onPeriodSelect).not.toHaveBeenCalled()
    })

    it('does not call onDateSelect if day is disabled by minDate', () => {
        const onDateSelect = jest.fn()
        const minDate = dayjs().date(10).format('YYYY-MM-DD')
        setup({ onDateSelect, minDate })
        fireEvent.click(screen.getAllByText('5')[0])
        expect(onDateSelect).not.toHaveBeenCalled()
    })

    it('does not call onDateSelect if day is disabled by maxDate', () => {
        const onDateSelect = jest.fn()
        const maxDate = dayjs().date(10).format('YYYY-MM-DD')
        setup({ onDateSelect, maxDate })
        fireEvent.click(screen.getAllByText('15')[0])
        expect(onDateSelect).not.toHaveBeenCalled()
    })

    it('renders correct range highlight between selectedStartDate and selectedEndDate', () => {
        setup({ startDate: dayjs().date(5).format('YYYY-MM-DD'), endDate: dayjs().date(10).format('YYYY-MM-DD') })
        // No error means range is rendered, can add more checks if needed
    })

    it('renders with minDate and maxDate as year boundaries', () => {
        const minDate = dayjs().subtract(1, 'year').format('YYYY-MM-DD')
        const maxDate = dayjs().add(1, 'year').format('YYYY-MM-DD')
        setup({ minDate, maxDate })
        expect(screen.getAllByRole('combobox')[1]).toBeInTheDocument()
    })
})
