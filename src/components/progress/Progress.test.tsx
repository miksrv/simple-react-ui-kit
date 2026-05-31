import React from 'react'

import { render, screen } from '@testing-library/react'

import { Progress } from './Progress'

describe('Progress Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the Progress component', () => {
        const { container } = render(<Progress value={50} />)
        const progressBar = container.querySelector('.progress')
        expect(progressBar).toBeInTheDocument()
    })

    it('applies custom className', () => {
        const { container } = render(
            <Progress
                value={30}
                className='custom-class'
            />
        )
        const progressBar = container.querySelector('.progress')
        expect(progressBar).toHaveClass('custom-class')
    })

    it('clamps value below 0 to 0%', () => {
        const { container } = render(<Progress value={-10} />)
        const line = container.querySelector('.line')
        expect(line).toHaveStyle({ width: '0%' })
    })

    it('clamps value above 100 to 100%', () => {
        const { container } = render(<Progress value={150} />)
        const line = container.querySelector('.line')
        expect(line).toHaveStyle({ width: '100%' })
    })

    it('renders with default value 0%', () => {
        const { container } = render(<Progress />)
        const line = container.querySelector('.line')
        expect(line).toHaveStyle({ width: '0%' })
    })

    it('renders correct width for valid value', () => {
        const { container } = render(<Progress value={75} />)
        const line = container.querySelector('.line')
        expect(line).toHaveStyle({ width: '75%' })
    })

    it('applies the main color class by default', () => {
        const { container } = render(<Progress value={50} />)
        const line = container.querySelector('.line')
        expect(line).toHaveClass('main')
    })

    it('applies the red color class', () => {
        const { container } = render(
            <Progress
                value={50}
                color='red'
            />
        )
        const line = container.querySelector('.line')
        expect(line).toHaveClass('red')
    })

    it('applies the orange color class', () => {
        const { container } = render(
            <Progress
                value={50}
                color='orange'
            />
        )
        const line = container.querySelector('.line')
        expect(line).toHaveClass('orange')
    })

    it('applies the green color class', () => {
        const { container } = render(
            <Progress
                value={50}
                color='green'
            />
        )
        const line = container.querySelector('.line')
        expect(line).toHaveClass('green')
    })

    it('applies default height when height is not provided', () => {
        const { container } = render(<Progress value={50} />)
        const progressBar = container.querySelector('.progress')
        expect(progressBar).toHaveStyle({ height: '2px' })
    })

    it('applies custom height when height is provided', () => {
        const { container } = render(
            <Progress
                value={50}
                height={10}
            />
        )
        const progressBar = container.querySelector('.progress')
        expect(progressBar).toHaveStyle({ height: '10px' })
    })

    it('applies height of 0px when height is set to 0', () => {
        const { container } = render(
            <Progress
                value={50}
                height={0}
            />
        )
        const progressBar = container.querySelector('.progress')
        expect(progressBar).toHaveStyle({ height: '0px' })
    })

    describe('accessibility', () => {
        it('exposes the progressbar role with min and max bounds', () => {
            render(<Progress value={50} />)
            const progressBar = screen.getByRole('progressbar')
            expect(progressBar).toHaveAttribute('aria-valuemin', '0')
            expect(progressBar).toHaveAttribute('aria-valuemax', '100')
        })

        it('reports the current (clamped) value via aria-valuenow', () => {
            render(<Progress value={75} />)
            expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75')
        })

        it('clamps aria-valuenow above 100 to 100', () => {
            render(<Progress value={150} />)
            expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
        })

        it('clamps aria-valuenow below 0 to 0', () => {
            render(<Progress value={-10} />)
            expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
        })

        it('allows providing a descriptive aria-label', () => {
            render(
                <Progress
                    value={40}
                    aria-label='Upload progress'
                />
            )
            expect(screen.getByRole('progressbar', { name: 'Upload progress' })).toBeInTheDocument()
        })
    })
})
