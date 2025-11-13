/**
 * Calendar component properties
 */
export interface CalendarProps {
    /** Hide the days of the week row */
    hideDaysOfWeek?: boolean
    /** Selected date period as a tuple of start and end dates (YYYY-MM-DD) */
    datePeriod?: [string?, string?]
    /** Minimum selectable date (YYYY-MM-DD) */
    minDate?: string
    /** Maximum selectable date (YYYY-MM-DD) */
    maxDate?: string
    /** Locale for month and day names ('ru' or 'en') */
    locale?: 'ru' | 'en'
    /** Additional class name for the calendar container */
    containerClassName?: string
    /** Callback for single date selection */
    onDateSelect?: (date: string) => void
    /** Callback for period selection (start and end dates) */
    onPeriodSelect?: (startDate?: string, endDate?: string) => void
}
