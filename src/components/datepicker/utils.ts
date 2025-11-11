import dayjs from 'dayjs'

import { timePresets } from './Datepicker'

export enum PresetOption {
    TODAY = 'today',
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    QUARTER = 'quarter',
    HALF_YEAR = 'half_year',
    YEAR = 'year'
}

export type CalendarPresetType = {
    key: PresetOption
    endDate: Date
}

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
    const end = dayjs(endDate).utc(true)
    const isEndDateToday = end.isSame(nowDate, 'day')

    if (!isEndDateToday) {
        return undefined
    }

    for (const preset of timePresets) {
        const presetStartDate = dayjs(preset.endDate)
        if (start.isSame(presetStartDate, 'day')) {
            return locale === 'ru' ? ruPresets[preset.key] : enPresets[preset.key]
        }
    }

    return undefined
}
