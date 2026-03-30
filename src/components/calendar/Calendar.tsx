import React, { useCallback, useEffect, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

import { cn } from '../../utils'
import { Icon } from '../icon'

import { CalendarProps } from './types'
import { enDaysOfWeek, enMonths, ruDaysOfWeek, ruMonths } from './utils'

import styles from './styles.module.sass'

export const Calendar: React.FC<CalendarProps> = ({
    hideDaysOfWeek,
    datePeriod,
    minDate,
    maxDate,
    locale = 'en',
    highlightToday = true,
    showTodayButton = false,
    containerClassName,
    onDateSelect,
    onPeriodSelect
}) => {
    const today = useMemo(() => dayjs(), [])

    const [currentMonth, setCurrentMonth] = useState(dayjs())
    const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(null)
    const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(null)

    const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth.month())
    const [selectedYear, setSelectedYear] = useState<number>(currentMonth.year())
    const [yearsOptions, setYearsOptions] = useState<number[]>([])

    const daysInMonth = currentMonth.daysInMonth()
    const startDay = (currentMonth.startOf('month').day() + 6) % 7

    const handlePrevMonth = () => {
        const newMonth = currentMonth.subtract(1, 'month')
        setCurrentMonth(newMonth)
        setSelectedMonth(newMonth.month())
        setSelectedYear(newMonth.year())
    }

    const handleNextMonth = () => {
        const newMonth = currentMonth.add(1, 'month')
        setCurrentMonth(newMonth)
        setSelectedMonth(newMonth.month())
        setSelectedYear(newMonth.year())
    }

    const handleGoToToday = () => {
        setCurrentMonth(today)
        setSelectedMonth(today.month())
        setSelectedYear(today.year())
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        if (target.tagName === 'SELECT') {
            return
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault()
            handlePrevMonth()
        } else if (e.key === 'ArrowRight') {
            e.preventDefault()
            handleNextMonth()
        }
    }

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newMonth = Number.parseInt(event.target.value, 10)
        setSelectedMonth(newMonth)
        setCurrentMonth(currentMonth.month(newMonth))
    }

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = Number.parseInt(event.target.value, 10)
        setSelectedYear(newYear)
        setCurrentMonth(currentMonth.year(newYear))
    }

    const handleDateClick = useCallback(
        (day: number) => {
            const newDate = currentMonth.date(day).startOf('day')

            if (minDate && newDate.isBefore(dayjs(minDate), 'day')) {
                return
            }

            if (maxDate && newDate.isAfter(dayjs(maxDate), 'day')) {
                return
            }

            if (onPeriodSelect) {
                if (!selectedStartDate) {
                    setSelectedStartDate(newDate)
                    setSelectedEndDate(null)
                } else if (!selectedEndDate) {
                    if (newDate.isAfter(selectedStartDate)) {
                        setSelectedEndDate(newDate)
                        onPeriodSelect?.(selectedStartDate.format('YYYY-MM-DD'), newDate.format('YYYY-MM-DD'))
                    } else {
                        setSelectedEndDate(selectedStartDate)
                        setSelectedStartDate(newDate)
                        onPeriodSelect?.(newDate.format('YYYY-MM-DD'), selectedStartDate.format('YYYY-MM-DD'))
                    }
                } else {
                    setSelectedStartDate(newDate)
                    setSelectedEndDate(null)
                }
            } else if (onDateSelect) {
                setSelectedStartDate(newDate)
                setSelectedEndDate(null)
                onDateSelect?.(newDate.format('YYYY-MM-DD'))
            }
        },
        [currentMonth, selectedStartDate, selectedEndDate, onPeriodSelect, onDateSelect, minDate, maxDate]
    )

    const days = useMemo(() => {
        const result: React.ReactNode[] = []

        // Display days of the previous month
        for (let i = 0; i < startDay; i++) {
            result.push(
                <div
                    key={`prev-${i}`}
                    className={cn(styles.day, styles.prevMonth)}
                >
                    {currentMonth.subtract(1, 'month').daysInMonth() - startDay + i + 1}
                </div>
            )
        }

        // Displaying days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = currentMonth.date(day)
            let dayClass = styles.day

            if (selectedStartDate && selectedEndDate) {
                if (date.isAfter(selectedStartDate) && date.isBefore(selectedEndDate)) {
                    dayClass = cn(dayClass, styles.range)
                }
            }

            if (selectedStartDate && date.isSame(selectedStartDate, 'day')) {
                dayClass = cn(dayClass, styles.selected, styles.selectedStartDate)
            }
            if (selectedEndDate && date.isSame(selectedEndDate, 'day')) {
                dayClass = cn(dayClass, styles.selected, styles.selectedEndDate)
            }
            if ((minDate && date.isBefore(dayjs(minDate), 'day')) || (maxDate && date.isAfter(dayjs(maxDate), 'day'))) {
                dayClass = cn(dayClass, styles.notAllowed)
            }

            if (highlightToday && date.isSame(today, 'day')) {
                dayClass = cn(dayClass, styles.today)
            }

            result.push(
                <div
                    key={`day-${day}`}
                    className={dayClass}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            )
        }

        return result
    }, [
        currentMonth,
        selectedYear,
        selectedMonth,
        selectedStartDate,
        selectedEndDate,
        minDate,
        maxDate,
        highlightToday,
        today,
        handleDateClick
    ])

    useEffect(() => {
        const years: number[] = []

        const minYear = minDate ? dayjs(minDate).year() : 1900
        const maxYear = maxDate ? dayjs(maxDate).year() : dayjs().year()

        for (let year = minYear; year <= maxYear; year++) {
            years.push(year)
        }

        setYearsOptions(years)
    }, [minDate, maxDate])

    useEffect(() => {
        if (datePeriod?.[0]) {
            const startDate = dayjs(datePeriod[0])
            setSelectedStartDate(startDate)
            setCurrentMonth(startDate)
            setSelectedMonth(startDate.month())
            setSelectedYear(startDate.year())
        } else {
            setSelectedStartDate(null)
        }

        if (datePeriod?.[1]) {
            setSelectedEndDate(dayjs(datePeriod[1]))
        } else {
            setSelectedEndDate(null)
        }
    }, [datePeriod])

    return (
        <div
            className={cn(styles.calendar, containerClassName)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role='group'
            aria-label={locale === 'ru' ? 'Календарь' : 'Calendar'}
        >
            <header className={styles.header}>
                <button
                    type='button'
                    className={styles.navigateButton}
                    onClick={handlePrevMonth}
                    aria-label={locale === 'ru' ? 'Предыдущий месяц' : 'Previous month'}
                >
                    <Icon name={'KeyboardLeft'} />
                </button>
                <span>
                    <div className={styles.selectContainer}>
                        <select
                            value={selectedMonth}
                            onChange={handleMonthChange}
                        >
                            {(locale === 'ru' ? ruMonths : enMonths).map((month, index) => (
                                <option
                                    key={index}
                                    value={index}
                                >
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.selectContainer}>
                        <select
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            {yearsOptions.map((year) => (
                                <option
                                    key={year}
                                    value={year}
                                >
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    {showTodayButton && (
                        <button
                            type='button'
                            className={styles.todayButton}
                            onClick={handleGoToToday}
                            aria-label={locale === 'ru' ? 'Перейти к сегодняшнему дню' : 'Go to today'}
                        >
                            {locale === 'ru' ? 'Сегодня' : 'Today'}
                        </button>
                    )}
                </span>
                <button
                    type='button'
                    className={styles.navigateButton}
                    onClick={handleNextMonth}
                    aria-label={locale === 'ru' ? 'Следующий месяц' : 'Next month'}
                >
                    <Icon name={'KeyboardRight'} />
                </button>
            </header>

            {!hideDaysOfWeek && (
                <div className={styles.daysOfWeekContainer}>
                    {(locale === 'ru' ? ruDaysOfWeek : enDaysOfWeek).map((day) => (
                        <div
                            key={`dayOfWeek-${day}`}
                            className={styles.dayOfWeek}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.body}>{days}</div>
        </div>
    )
}
