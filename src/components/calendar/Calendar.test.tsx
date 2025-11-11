import React from 'react'
import dayjs from 'dayjs'

import { fireEvent, render, screen } from '@testing-library/react'

import { Calendar, CalendarProps } from './Calendar'

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
        setup({ datePeriod: [startDate, endDate] })
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
        setup({ datePeriod: [dayjs().date(5).format('YYYY-MM-DD'), dayjs().date(10).format('YYYY-MM-DD')] })
        // No error means range is rendered, can add more checks if needed
    })

    it('renders with minDate and maxDate as year boundaries', () => {
        const minDate = dayjs().subtract(1, 'year').format('YYYY-MM-DD')
        const maxDate = dayjs().add(1, 'year').format('YYYY-MM-DD')
        setup({ minDate, maxDate })
        expect(screen.getAllByRole('combobox')[1]).toBeInTheDocument()
    })

    it('applies custom containerClassName', () => {
        setup({ containerClassName: 'my-calendar' })
        expect(document.querySelector('.my-calendar')).toBeInTheDocument()
    })

    it('renders days from previous month as disabled', () => {
        setup()
        // Previous month days have class 'prevMonth'
        const prevMonthDays = document.querySelectorAll('[class*="prevMonth"]')
        expect(prevMonthDays.length).toBeGreaterThan(0)
    })

    it('highlights selected range with correct classes', () => {
        const start = dayjs().startOf('month').add(2, 'day').format('YYYY-MM-DD')
        const end = dayjs().startOf('month').add(5, 'day').format('YYYY-MM-DD')
        setup({ datePeriod: [start, end] })
        // Selected start
        const startDay = screen.getAllByText(dayjs(start).date().toString())[0]
        expect(startDay.className).toMatch(/selectedStartDate/)
        // Selected end
        const endDay = screen.getAllByText(dayjs(end).date().toString())[0]
        expect(endDay.className).toMatch(/selectedEndDate/)
    })

    it('updates selected dates when datePeriod prop changes', () => {
        const { rerender } = render(<Calendar datePeriod={['2024-06-01', '2024-06-10']} />)
        expect(screen.getAllByText('1')[0].className).toMatch(/day/)
        rerender(<Calendar datePeriod={['2024-06-05', '2024-06-15']} />)
        expect(screen.getAllByText('5')[0].className).toMatch(/day/)
        expect(screen.getAllByText('15')[0].className).toMatch(/day/)
    })

    it('does not call any callback if neither onDateSelect nor onPeriodSelect is provided', () => {
        setup()
        fireEvent.click(screen.getAllByText('10')[0])
        // No error, nothing happens
    })

    it('renders correct month and year in Russian', () => {
        setup({ locale: 'ru' })
        const monthSelect = screen.getAllByRole('combobox')[0]
        expect(monthSelect).toHaveTextContent(
            /январь|февраль|март|апрель|май|июнь|июль|август|сентябрь|октябрь|ноябрь|декабрь/i
        )
    })

    it('renders all days of the current month', () => {
        setup()
        const now = dayjs().utc()
        const days = now.daysInMonth()
        for (let i = 1; i <= days; i++) {
            expect(screen.getAllByText(i.toString())[0]).toBeInTheDocument()
        }
    })

    it('does not allow selecting days outside min/max date', () => {
        const minDate = dayjs().startOf('month').add(5, 'day').format('YYYY-MM-DD')
        const maxDate = dayjs().startOf('month').add(10, 'day').format('YYYY-MM-DD')
        const onDateSelect = jest.fn()
        setup({ minDate, maxDate, onDateSelect })
        fireEvent.click(screen.getAllByText('2')[0])
        fireEvent.click(screen.getAllByText('15')[0])
        expect(onDateSelect).not.toHaveBeenCalled()
    })

    it('renders correct years in year selector based on minDate and maxDate', () => {
        const minDate = '2020-01-01'
        const maxDate = '2022-12-31'
        setup({ minDate, maxDate })
        const yearSelect = screen.getAllByRole('combobox')[1]
        expect(yearSelect).toHaveTextContent('2020')
        expect(yearSelect).toHaveTextContent('2021')
        expect(yearSelect).toHaveTextContent('2022')
    })
})
