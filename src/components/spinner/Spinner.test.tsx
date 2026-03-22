import React from 'react'

import { render } from '@testing-library/react'

import { Spinner } from './Spinner'

describe('Spinner Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Spinner />)
        const spinnerElement = container.querySelector('svg')
        expect(spinnerElement).toBeInTheDocument()
    })

    it('applies additional class names', () => {
        const { container } = render(<Spinner className='custom-class' />)
        const spinnerElement = container.querySelector('svg')
        expect(spinnerElement).toHaveClass('custom-class')
    })

    it('applies default styles', () => {
        const { container } = render(<Spinner />)
        const spinnerElement = container.querySelector('svg')
        expect(spinnerElement).toHaveClass('spinner')
    })

    it('renders with given SVG props', () => {
        const { container } = render(
            <Spinner
                width='50'
                height='50'
                fill='red'
            />
        )
        const spinnerElement = container.querySelector('svg')
        expect(spinnerElement).toHaveAttribute('width', '50')
        expect(spinnerElement).toHaveAttribute('height', '50')
        expect(spinnerElement).toHaveAttribute('fill', 'red')
    })

    it('renders with correct viewBox attribute', () => {
        const { container } = render(<Spinner />)
        const spinnerElement = container.querySelector('svg')
        expect(spinnerElement).toHaveAttribute('viewBox', '0 0 100 101')
    })

    it('renders two path elements inside', () => {
        const { container } = render(<Spinner />)
        const paths = container.querySelectorAll('path')
        expect(paths).toHaveLength(2)
    })

    it('applies both spinner base class and custom class', () => {
        const { container } = render(<Spinner className='my-spinner' />)
        const spinnerElement = container.querySelector('svg')
        expect(spinnerElement).toHaveClass('spinner')
        expect(spinnerElement).toHaveClass('my-spinner')
    })
})
