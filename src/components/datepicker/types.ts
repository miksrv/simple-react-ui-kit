import { ButtonModeType } from '../../types'
import { CalendarProps } from '../calendar'

/**
 * DatePicker component properties
 */
export interface DatePickerProps extends Omit<CalendarProps, 'containerClassName'> {
    /** List of preset options to hide from the presets list */
    hidePresets?: PresetOption[]
    /** Date format for displaying period ranges (default: 'DD.MM.YYYY') */
    periodDatesFormat?: string
    /** Date format for displaying a single date (default: 'DD MMMM YYYY') */
    singleDateFormat?: string
    /** Caption text shown when no date is selected (default: 'Select date') */
    placeholder?: string
    /** Disables the date picker if set to true */
    disabled?: boolean
    /** Button mode for the trigger button */
    buttonMode?: ButtonModeType
}

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
