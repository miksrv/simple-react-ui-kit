import React from 'react'

import { render } from '@testing-library/react'

import { Progress } from './Progress'

import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

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
})
