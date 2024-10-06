import React from 'react'

import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

import Skeleton from './Skeleton'

import { render } from '@testing-library/react'

describe('Skeleton Component', () => {
    it('renders the skeleton component', () => {
        const { container } = render(<Skeleton />)
        const skeletonElement = container.querySelector('div')

        expect(skeletonElement).toBeInTheDocument()
        expect(skeletonElement).toHaveClass('skeleton')
    })

    it('applies additional class names for custom styling', () => {
        const customClass = 'custom-class'
        const { container } = render(<Skeleton className={customClass} />)
        const skeletonElement = container.querySelector('div')

        expect(skeletonElement).toHaveClass('skeleton')
        expect(skeletonElement).toHaveClass(customClass)
    })

    it('spreads additional props correctly', () => {
        const { container } = render(<Skeleton data-testid='skeleton' />)
        const skeletonElement = container.querySelector('div')

        expect(skeletonElement).toHaveAttribute('data-testid', 'skeleton')
    })
})
