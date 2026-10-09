import dayjs from 'dayjs'

import { CalendarPresetType, PresetOption } from './types'

import 'dayjs/locale/ru'

/** Presets relative to `nowDate`: computed per call so the dates never go stale in a long-running app */
export const getTimePresets = (nowDate: dayjs.Dayjs): CalendarPresetType[] => [
    { key: PresetOption.TODAY, endDate: nowDate.toDate() },
    { key: PresetOption.DAY, endDate: nowDate.subtract(1, 'day').toDate() },
    { key: PresetOption.WEEK, endDate: nowDate.subtract(1, 'week').toDate() },
    { key: PresetOption.MONTH, endDate: nowDate.subtract(1, 'month').toDate() },
    { key: PresetOption.QUARTER, endDate: nowDate.subtract(3, 'month').toDate() },
    { key: PresetOption.HALF_YEAR, endDate: nowDate.subtract(6, 'month').toDate() },
    { key: PresetOption.YEAR, endDate: nowDate.subtract(1, 'year').toDate() }
]

export const enPresets = {
    [PresetOption.TODAY]: 'Today',
    [PresetOption.DAY]: '24 Hours',
    [PresetOption.WEEK]: 'Last Week',
    [PresetOption.MONTH]: 'Last Month',
    [PresetOption.QUARTER]: 'Last Quarter',
    [PresetOption.HALF_YEAR]: 'Last 6 Months',
    [PresetOption.YEAR]: 'Last Year'
}

export const ruPresets = {
    [PresetOption.TODAY]: 'Сегодня',
    [PresetOption.DAY]: 'Последние сутки',
    [PresetOption.WEEK]: 'Последняя неделя',
    [PresetOption.MONTH]: 'Последний месяц',
    [PresetOption.QUARTER]: 'Последний квартал',
    [PresetOption.HALF_YEAR]: 'Последние полгода',
    [PresetOption.YEAR]: 'Последний год'
}

export const formatDate = (date: string, format: string = 'YYYY-MM-DD', locale?: 'en' | 'ru'): string =>
    dayjs(date)
        .locale(locale ?? 'en')
        .format(format)

export const findPresetByDate = (
    nowDate: dayjs.Dayjs,
    startDate?: string,
    endDate?: string,
    locale?: 'en' | 'ru'
): string | undefined => {
    if (!startDate || !endDate) {
        return undefined
    }

    const start = dayjs(startDate)
    const end = dayjs(endDate)
    const isEndDateToday = end.isSame(nowDate, 'day')

    if (!isEndDateToday) {
        return undefined
    }

    for (const preset of getTimePresets(nowDate)) {
        const presetStartDate = dayjs(preset.endDate)
        if (start.isSame(presetStartDate, 'day')) {
            return locale === 'ru' ? ruPresets[preset.key] : enPresets[preset.key]
        }
    }

    return undefined
}
