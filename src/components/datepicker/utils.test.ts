import dayjs from 'dayjs'

import { timePresets } from './DatePicker'
import { PresetOption } from './types'
import { enPresets, findPresetByDate, formatDate, ruPresets } from './utils'

describe('PresetOption enum', () => {
    it('should contain all expected keys', () => {
        expect(PresetOption.TODAY).toBe('today')
        expect(PresetOption.DAY).toBe('day')
        expect(PresetOption.WEEK).toBe('week')
        expect(PresetOption.MONTH).toBe('month')
        expect(PresetOption.QUARTER).toBe('quarter')
        expect(PresetOption.HALF_YEAR).toBe('half_year')
        expect(PresetOption.YEAR).toBe('year')
    })
})

describe('enPresets', () => {
    it('should have correct English labels for all presets', () => {
        expect(enPresets[PresetOption.TODAY]).toBe('Today')
        expect(enPresets[PresetOption.DAY]).toBe('24 Hours')
        expect(enPresets[PresetOption.WEEK]).toBe('Last Week')
        expect(enPresets[PresetOption.MONTH]).toBe('Last Month')
        expect(enPresets[PresetOption.QUARTER]).toBe('Last Quarter')
        expect(enPresets[PresetOption.HALF_YEAR]).toBe('Last 6 Months')
        expect(enPresets[PresetOption.YEAR]).toBe('Last Year')
    })
})

describe('ruPresets', () => {
    it('should have correct Russian labels for all presets', () => {
        expect(ruPresets[PresetOption.TODAY]).toBe('Сегодня')
        expect(ruPresets[PresetOption.DAY]).toBe('Последние сутки')
        expect(ruPresets[PresetOption.WEEK]).toBe('Последняя неделя')
        expect(ruPresets[PresetOption.MONTH]).toBe('Последний месяц')
        expect(ruPresets[PresetOption.QUARTER]).toBe('Последний квартал')
        expect(ruPresets[PresetOption.HALF_YEAR]).toBe('Последние полгода')
        expect(ruPresets[PresetOption.YEAR]).toBe('Последний год')
    })
})

describe('formatDate', () => {
    it('should format a date using the English locale by default', () => {
        expect(formatDate('2024-06-15', 'D MMMM YYYY')).toBe('15 June 2024')
    })

    it('should format a date using the English locale when explicitly requested', () => {
        expect(formatDate('2024-06-15', 'D MMMM YYYY', 'en')).toBe('15 June 2024')
    })

    it('should format a date using the Russian locale when requested', () => {
        expect(formatDate('2024-06-15', 'D MMMM YYYY', 'ru')).toBe('15 июня 2024')
    })

    it('should not leak the requested locale into the global dayjs instance', () => {
        formatDate('2024-06-15', 'D MMMM YYYY', 'ru')
        expect(dayjs('2024-06-15').format('D MMMM YYYY')).toBe('15 June 2024')
    })
})

describe('findPresetByDate', () => {
    const nowDate = dayjs()

    it('returns undefined if startDate is missing', () => {
        expect(findPresetByDate(nowDate, undefined, nowDate.format('YYYY-MM-DD'), 'en')).toBeUndefined()
    })

    it('returns undefined if endDate is missing', () => {
        expect(findPresetByDate(nowDate, nowDate.format('YYYY-MM-DD'), undefined, 'en')).toBeUndefined()
    })

    it('returns undefined if endDate is not today', () => {
        const yesterday = nowDate.subtract(1, 'day').format('YYYY-MM-DD')
        expect(findPresetByDate(nowDate, yesterday, yesterday, 'en')).toBeUndefined()
    })

    it('returns correct English preset label for each preset', () => {
        const today = nowDate.format('YYYY-MM-DD')
        for (const preset of timePresets) {
            const start = dayjs(preset.endDate).format('YYYY-MM-DD')
            const result = findPresetByDate(nowDate, start, today, 'en')
            expect(result).toBe(enPresets[preset.key])
        }
    })

    it('returns correct Russian preset label for each preset', () => {
        const today = nowDate.format('YYYY-MM-DD')
        for (const preset of timePresets) {
            const start = dayjs(preset.endDate).format('YYYY-MM-DD')
            const result = findPresetByDate(nowDate, start, today, 'ru')
            expect(result).toBe(ruPresets[preset.key])
        }
    })

    it('returns undefined if no preset matches the startDate', () => {
        const today = nowDate.format('YYYY-MM-DD')
        const randomDate = nowDate.subtract(10, 'years').format('YYYY-MM-DD')
        expect(findPresetByDate(nowDate, randomDate, today, 'en')).toBeUndefined()
    })

    it('defaults to English if locale is not provided', () => {
        const today = nowDate.format('YYYY-MM-DD')
        const preset = timePresets[0]
        const start = dayjs(preset.endDate).format('YYYY-MM-DD')
        expect(findPresetByDate(nowDate, start, today)).toBe(enPresets[preset.key])
    })
})
