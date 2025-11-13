import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import dayjs from 'dayjs'

import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popout, PopoutHandleProps } from '../popout'

import { CalendarPresetType, DatePickerProps, PresetOption } from './types'
import { enPresets, findPresetByDate, formatDate, ruPresets } from './utils'

import styles from './styles.module.sass'

const nowDate = dayjs.utc()

export const timePresets: CalendarPresetType[] = [
    { key: PresetOption.TODAY, endDate: nowDate.toDate() },
    { key: PresetOption.DAY, endDate: nowDate.subtract(1, 'day').toDate() },
    { key: PresetOption.WEEK, endDate: nowDate.subtract(1, 'week').toDate() },
    { key: PresetOption.MONTH, endDate: nowDate.subtract(1, 'month').toDate() },
    { key: PresetOption.QUARTER, endDate: nowDate.subtract(3, 'month').toDate() },
    { key: PresetOption.HALF_YEAR, endDate: nowDate.subtract(6, 'month').toDate() },
    { key: PresetOption.YEAR, endDate: nowDate.subtract(1, 'year').toDate() }
]

export const DatePicker: React.FC<DatePickerProps> = ({
    periodDatesFormat = 'DD.MM.YYYY',
    singleDateFormat = 'DD MMMM YYYY',
    placeholder = 'Select date',
    buttonMode = 'primary',
    disabled = false,
    ...props
}) => {
    const popoutRef = useRef<PopoutHandleProps>(null)
    const [periodDates, setPeriodDates] = useState<[string?, string?]>([props.datePeriod?.[0], props.datePeriod?.[1]])

    const currentDatePreset = useMemo((): string => {
        const preset = findPresetByDate(nowDate, periodDates?.[0], periodDates?.[1], props?.locale)

        return preset
            ? preset
            : periodDates?.[0] && periodDates?.[1]
              ? periodDates?.[0] === periodDates?.[1]
                  ? formatDate(periodDates?.[0], singleDateFormat)
                  : `${formatDate(periodDates?.[0], periodDatesFormat)} - ${formatDate(periodDates?.[1], periodDatesFormat)}`
              : ''
    }, [periodDates, props?.locale])

    const findCurrentPreset = useCallback(
        (key: PresetOption): CalendarPresetType | undefined => {
            const preset = timePresets?.find((preset) => preset.key === key)
            if (nowDate.isSame(periodDates?.[1], 'day') && dayjs(periodDates?.[0]).isSame(preset?.endDate, 'day')) {
                return preset
            }
            return undefined
        },
        [periodDates]
    )

    const handlePresetSelect = (preset: PresetOption) => {
        const endDate = timePresets?.find(({ key }) => key === preset)?.endDate
        const startDate = dayjs(endDate).format('YYYY-MM-DD')
        const today = dayjs.utc().format('YYYY-MM-DD')
        setPeriodDates([startDate, today])
        props?.onPeriodSelect?.(startDate, today)
        if (popoutRef.current) {
            popoutRef.current.close()
        }
    }

    const handlePeriodSelect = (start?: string, end?: string) => {
        setPeriodDates([start, end])
        props?.onPeriodSelect?.(start, end)
        if (popoutRef.current) {
            popoutRef.current.close()
        }
    }

    const handleDateSelect = (date: string) => {
        setPeriodDates([date, date])
        props?.onDateSelect?.(date)
        if (popoutRef.current) {
            popoutRef.current.close()
        }
    }

    useEffect(() => {
        if (props.datePeriod?.[0] !== periodDates?.[0] || props.datePeriod?.[1] !== periodDates?.[1]) {
            setPeriodDates([props.datePeriod?.[0], props.datePeriod?.[1]])
        }
    }, [props.datePeriod])

    return (
        <Popout
            ref={popoutRef}
            position={'left'}
            disabled={disabled}
            trigger={
                <Button
                    mode={buttonMode}
                    disabled={disabled}
                >
                    {currentDatePreset || placeholder}
                </Button>
            }
        >
            <div className={styles.datePickerContainer}>
                {props?.onPeriodSelect && (
                    <div className={styles.presetList}>
                        {timePresets
                            ?.filter(({ key }) => (props.hidePresets ? !props.hidePresets.includes(key) : true))
                            ?.map(({ key }) => (
                                <Button
                                    key={key}
                                    mode={findCurrentPreset(key)?.key ? 'secondary' : 'outline'}
                                    onClick={() => handlePresetSelect(key)}
                                >
                                    {props?.locale === 'ru' ? ruPresets[key] : enPresets[key]}
                                </Button>
                            ))}
                    </div>
                )}

                <Calendar
                    {...props}
                    containerClassName={props?.onPeriodSelect && styles.calendarWithPresets}
                    datePeriod={[periodDates?.[0], periodDates?.[1]]}
                    onDateSelect={props?.onDateSelect ? handleDateSelect : undefined}
                    onPeriodSelect={props?.onPeriodSelect ? handlePeriodSelect : undefined}
                />
            </div>
        </Popout>
    )
}
