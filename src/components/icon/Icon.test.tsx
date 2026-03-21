import React from 'react'

import { render } from '@testing-library/react'

import { Icon } from './Icon'
import { iconNames } from './types'

describe('Icon Component', () => {
    const iconKeys = Object.keys(iconNames) as Array<keyof typeof iconNames>

    iconKeys.forEach((iconKey) => {
        it(`renders the ${iconKey} icon correctly`, () => {
            const { container } = render(<Icon name={iconNames[iconKey]} />)
            const svgElement = container.querySelector('svg')
            expect(svgElement).toBeInTheDocument()
        })
    })

    it('applies additional class names for custom styling', () => {
        const { container } = render(
            <Icon
                name={iconNames.Camera}
                className='custom-class'
            />
        )
        const svgElement = container.querySelector('svg')

        expect(svgElement).toHaveClass('custom-class')
    })

    it('renders with default props if no additional props are provided', () => {
        const { container } = render(<Icon name={iconNames.ArrowUp} />)

        const svgElement = container.querySelector('svg')
        expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24') // Пример проверки атрибута по умолчанию
    })

    it('passes additional SVG props to svg element', () => {
        const { container } = render(
            <Icon
                name={iconNames.Close}
                width={32}
                height={32}
                data-testid='close-icon'
            />
        )
        const svgElement = container.querySelector('svg')
        expect(svgElement).toHaveAttribute('width', '32')
        expect(svgElement).toHaveAttribute('height', '32')
        expect(svgElement).toHaveAttribute('data-testid', 'close-icon')
    })

    it('renders icons that have multiple path elements (DoubleUp)', () => {
        const { container } = render(<Icon name={iconNames.DoubleUp} />)
        const paths = container.querySelectorAll('path')
        expect(paths.length).toBeGreaterThanOrEqual(2)
    })

    it('renders icons that have multiple path elements (ReportError)', () => {
        const { container } = render(<Icon name={iconNames.ReportError} />)
        const paths = container.querySelectorAll('path')
        expect(paths.length).toBeGreaterThanOrEqual(2)
    })

    it('renders icons that have multiple path elements (Pressure)', () => {
        const { container } = render(<Icon name={iconNames.Pressure} />)
        const paths = container.querySelectorAll('path')
        expect(paths.length).toBeGreaterThanOrEqual(2)
    })

    it('renders Telegram icon with transform attribute', () => {
        const { container } = render(<Icon name={iconNames.Telegram} />)
        const path = container.querySelector('path')
        expect(path).toHaveAttribute('transform')
    })
})
