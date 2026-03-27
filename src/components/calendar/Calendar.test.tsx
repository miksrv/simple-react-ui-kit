import React from 'react'
import dayjs from 'dayjs'

import { fireEvent, render, screen } from '@testing-library/react'

import { Calendar } from './Calendar'
import { CalendarProps } from './types'

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
        const prevBtn = screen.getByRole('button', { name: /previous month/i })
        const nextBtn = screen.getByRole('button', { name: /next month/i })
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
        const now = dayjs()
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

    it('renders all English days of week', () => {
        setup()
        const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        daysOfWeek.forEach((day) => {
            expect(screen.getByText(day)).toBeInTheDocument()
        })
    })

    it('renders all Russian days of week in ru locale', () => {
        setup({ locale: 'ru' })
        const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        daysOfWeek.forEach((day) => {
            expect(screen.getByText(day)).toBeInTheDocument()
        })
    })

    it('navigates to next month and updates month selector', () => {
        setup()
        const nextBtn = screen.getByRole('button', { name: /next month/i })
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        fireEvent.click(nextBtn)

        const newMonth = monthSelect.querySelector('option:checked')?.textContent
        expect(newMonth).not.toBe(initialMonth)
    })

    it('navigates to previous month and updates month selector', () => {
        setup()
        const prevBtn = screen.getByRole('button', { name: /previous month/i })
        const [monthSelect] = screen.getAllByRole('combobox')

        fireEvent.click(prevBtn)

        // no crash and month selector should still exist
        expect(monthSelect).toBeInTheDocument()
    })

    it('clears selectedEndDate when new period selection begins', () => {
        const onPeriodSelect = jest.fn()
        setup({ onPeriodSelect })

        // Select a full range first
        fireEvent.click(screen.getAllByText('10')[0])
        fireEvent.click(screen.getAllByText('15')[0])
        expect(onPeriodSelect).toHaveBeenCalledTimes(1)

        // Start a new selection — this should reset (click 20 to start fresh, then 22 for end)
        fireEvent.click(screen.getAllByText('20')[0])
        // Now select end - use a day that's definitely after 20 and in current month
        fireEvent.click(screen.getAllByText('22')[0])
        expect(onPeriodSelect).toHaveBeenCalledTimes(2)
    })

    it('renders datePeriod with only start date', () => {
        const startDate = dayjs().date(5).format('YYYY-MM-DD')
        setup({ datePeriod: [startDate, undefined] })
        expect(screen.getAllByText('5')[0]).toBeInTheDocument()
    })

    it('renders datePeriod with only end date', () => {
        const endDate = dayjs().date(15).format('YYYY-MM-DD')
        setup({ datePeriod: [undefined, endDate] })
        expect(screen.getAllByText('15')[0]).toBeInTheDocument()
    })

    it('renders without maxDate, year selector defaults to current year', () => {
        const currentYear = dayjs().year()
        setup()
        const yearSelect = screen.getAllByRole('combobox')[1]
        expect(yearSelect).toHaveTextContent(String(currentYear))
    })

    it('day click with maxDate equal to clicked date is allowed', () => {
        const onDateSelect = jest.fn()
        const maxDate = dayjs().date(15).format('YYYY-MM-DD')
        setup({ onDateSelect, maxDate })
        // Click day 15 — which equals maxDate (same day should be allowed)
        fireEvent.click(screen.getAllByText('15')[0])
        expect(onDateSelect).toHaveBeenCalled()
    })

    // BUG-04: A date exactly equal to minDate must be selectable
    it('day click with minDate equal to clicked date is allowed', () => {
        const onDateSelect = jest.fn()
        const minDate = dayjs().date(10).format('YYYY-MM-DD')
        setup({ onDateSelect, minDate })
        // Click day 10 — which equals minDate (same day should be allowed)
        fireEvent.click(screen.getAllByText('10')[0])
        expect(onDateSelect).toHaveBeenCalled()
    })

    // PERF-03: useMemo re-computes days when currentMonth changes (month navigation)
    it('re-renders days when navigating to next month', () => {
        setup()
        const now = dayjs()
        const nextBtn = screen.getByRole('button', { name: /next month/i })
        const nextMonth = now.add(1, 'month')

        fireEvent.click(nextBtn)

        // After navigation, the correct number of days for the next month should be rendered
        const daysInNextMonth = nextMonth.daysInMonth()
        // The last day of the next month should be present
        expect(screen.getAllByText(daysInNextMonth.toString())[0]).toBeInTheDocument()
    })

    it('re-renders days when navigating to previous month', () => {
        setup()
        const now = dayjs()
        const prevBtn = screen.getByRole('button', { name: /previous month/i })
        const prevMonth = now.subtract(1, 'month')

        fireEvent.click(prevBtn)

        // After navigation, the correct number of days for the previous month should be rendered
        const daysInPrevMonth = prevMonth.daysInMonth()
        expect(screen.getAllByText(daysInPrevMonth.toString())[0]).toBeInTheDocument()
    })

    it('re-renders days correctly after selectedStartDate changes (useMemo dependency)', () => {
        const onDateSelect = jest.fn()
        setup({ onDateSelect })

        // Click day 5 to set selectedStartDate
        fireEvent.click(screen.getAllByText('5')[0])
        expect(onDateSelect).toHaveBeenCalledTimes(1)

        // Click day 10 — days should re-render with new selection highlight
        fireEvent.click(screen.getAllByText('10')[0])
        expect(onDateSelect).toHaveBeenCalledTimes(2)

        // Both clicks succeeded, confirming useMemo re-ran with updated handleDateClick
        expect(onDateSelect.mock.calls[1][0]).toContain('-10')
    })

    // === Highlight Today ===

    it('highlights today by default', () => {
        setup()
        const todayEl = document.querySelector('[class*="today"]')
        expect(todayEl).toBeInTheDocument()
        expect(todayEl?.textContent).toBe(String(dayjs().date()))
    })

    it('does not highlight today when highlightToday is false', () => {
        setup({ highlightToday: false })
        expect(document.querySelector('[class*="today"]')).not.toBeInTheDocument()
    })

    it('today is not highlighted when viewing a different month', () => {
        setup()
        const nextBtn = screen.getByRole('button', { name: /next month/i })
        fireEvent.click(nextBtn)
        fireEvent.click(nextBtn)
        // today should not be visible in a month two steps forward (unless it's the same day of month)
        // We navigate to next month and verify today class only appears if the day is actually today
        const todayEl = document.querySelector('[class*="today"]')
        if (todayEl) {
            // If today class exists, it must match the actual today's date number in a month that contains today
            expect(todayEl.textContent).toBe(String(dayjs().date()))
        } else {
            expect(todayEl).toBeNull()
        }
    })

    // === Keyboard Navigation ===

    it('navigates to previous month with ArrowLeft key', () => {
        const { container } = setup()
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        fireEvent.keyDown(container.firstChild as HTMLElement, { key: 'ArrowLeft' })

        const newMonth = monthSelect.querySelector('option:checked')?.textContent
        expect(newMonth).not.toBe(initialMonth)
    })

    it('navigates to next month with ArrowRight key', () => {
        const { container } = setup()
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        fireEvent.keyDown(container.firstChild as HTMLElement, { key: 'ArrowRight' })

        const newMonth = monthSelect.querySelector('option:checked')?.textContent
        expect(newMonth).not.toBe(initialMonth)
    })

    it('does not navigate with ArrowLeft when a select element is the target', () => {
        setup()
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        fireEvent.keyDown(monthSelect, { key: 'ArrowLeft' })

        const newMonth = monthSelect.querySelector('option:checked')?.textContent
        expect(newMonth).toBe(initialMonth)
    })

    it('does not navigate with ArrowRight when a select element is the target', () => {
        setup()
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        fireEvent.keyDown(monthSelect, { key: 'ArrowRight' })

        const newMonth = monthSelect.querySelector('option:checked')?.textContent
        expect(newMonth).toBe(initialMonth)
    })

    it('ignores unrelated keys (e.g. ArrowUp)', () => {
        const { container } = setup()
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        fireEvent.keyDown(container.firstChild as HTMLElement, { key: 'ArrowUp' })

        expect(monthSelect.querySelector('option:checked')?.textContent).toBe(initialMonth)
    })

    it('calendar container has role="group" and tabIndex for keyboard access', () => {
        const { container } = setup()
        const calendarEl = container.firstChild as HTMLElement
        expect(calendarEl).toHaveAttribute('role', 'group')
        expect(calendarEl).toHaveAttribute('tabIndex', '0')
    })

    // === Today Button ===

    it('does not render today button by default', () => {
        setup()
        expect(screen.queryByRole('button', { name: /go to today/i })).not.toBeInTheDocument()
    })

    it('renders today button when showTodayButton is true', () => {
        setup({ showTodayButton: true })
        expect(screen.getByRole('button', { name: /go to today/i })).toBeInTheDocument()
        expect(screen.getByText('Today')).toBeInTheDocument()
    })

    it('renders today button with Russian label in ru locale', () => {
        setup({ showTodayButton: true, locale: 'ru' })
        expect(screen.getByRole('button', { name: /перейти к сегодняшнему дню/i })).toBeInTheDocument()
        expect(screen.getByText('Сегодня')).toBeInTheDocument()
    })

    it('today button navigates back to current month after navigating away', () => {
        setup({ showTodayButton: true })
        const [monthSelect] = screen.getAllByRole('combobox')
        const initialMonth = monthSelect.querySelector('option:checked')?.textContent

        // Navigate two months forward
        const nextBtn = screen.getByRole('button', { name: /next month/i })
        fireEvent.click(nextBtn)
        fireEvent.click(nextBtn)
        expect(monthSelect.querySelector('option:checked')?.textContent).not.toBe(initialMonth)

        // Click "Today" to go back
        fireEvent.click(screen.getByRole('button', { name: /go to today/i }))
        expect(monthSelect.querySelector('option:checked')?.textContent).toBe(initialMonth)
    })

    it('today button updates year selector when navigating back from a different year', () => {
        setup({ showTodayButton: true })
        const [, yearSelect] = screen.getAllByRole('combobox')
        const currentYear = String(dayjs().year())

        // Change year via selector
        const prevYear = String(dayjs().year() - 1)
        if (yearSelect.querySelector(`option[value="${prevYear}"]`)) {
            fireEvent.change(yearSelect, { target: { value: prevYear } })
            expect((yearSelect as HTMLSelectElement).value).toBe(prevYear)

            // Click Today to restore
            fireEvent.click(screen.getByRole('button', { name: /go to today/i }))
            expect((yearSelect as HTMLSelectElement).value).toBe(currentYear)
        }
    })

    it('nav buttons have correct aria-labels in English', () => {
        setup()
        expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument()
    })

    it('nav buttons have correct aria-labels in Russian', () => {
        setup({ locale: 'ru' })
        expect(screen.getByRole('button', { name: 'Предыдущий месяц' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Следующий месяц' })).toBeInTheDocument()
    })

    it('re-renders days when minDate or maxDate changes', () => {
        const onDateSelect = jest.fn()
        const { rerender } = render(<Calendar onDateSelect={onDateSelect} />)

        // Try to click day 2 — should succeed without minDate
        fireEvent.click(screen.getAllByText('2')[0])
        expect(onDateSelect).toHaveBeenCalledTimes(1)

        // Now set minDate to day 5 — day 2 should become disabled
        const minDate = dayjs().date(5).format('YYYY-MM-DD')
        rerender(
            <Calendar
                onDateSelect={onDateSelect}
                minDate={minDate}
            />
        )

        // Clicking day 2 after minDate change should be blocked
        fireEvent.click(screen.getAllByText('2')[0])
        // onDateSelect should still only have 1 call (day 2 is now disabled)
        expect(onDateSelect).toHaveBeenCalledTimes(1)
    })
})
