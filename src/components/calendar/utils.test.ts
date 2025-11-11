import { enDaysOfWeek, enMonths, ruDaysOfWeek, ruMonths } from './utils'

describe('enDaysOfWeek', () => {
    it('should contain 7 English day abbreviations', () => {
        expect(enDaysOfWeek).toStrictEqual(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'])
    })
})

describe('ruDaysOfWeek', () => {
    it('should contain 7 Russian day abbreviations', () => {
        expect(ruDaysOfWeek).toStrictEqual(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'])
    })
})

describe('enMonths', () => {
    it('should contain 12 English month names', () => {
        expect(enMonths).toStrictEqual([
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ])
    })
})

describe('ruMonths', () => {
    it('should contain 12 Russian month names', () => {
        expect(ruMonths).toStrictEqual([
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ])
    })
})
