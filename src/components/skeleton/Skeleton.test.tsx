import React from 'react'

import { render } from '@testing-library/react'

import { Skeleton } from './Skeleton'

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

    it('applies inline styles when provided', () => {
        const { container } = render(
            <Skeleton style={{ width: '200px', height: '20px' }} />
        )
        const skeletonElement = container.querySelector('div') as HTMLElement
        expect(skeletonElement.style.width).toBe('200px')
        expect(skeletonElement.style.height).toBe('20px')
    })

    it('has skeleton as base class and custom class together', () => {
        const { container } = render(<Skeleton className='loading-block' />)
        const skeletonElement = container.querySelector('div')
        expect(skeletonElement).toHaveClass('skeleton')
        expect(skeletonElement).toHaveClass('loading-block')
    })
})
