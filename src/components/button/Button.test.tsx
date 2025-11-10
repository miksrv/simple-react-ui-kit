import React from 'react'

import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import Button, { ButtonProps } from './Button'

describe('Button Component', () => {
    const defaultProps: ButtonProps = {
        label: 'Click Me',
        mode: 'primary',
        size: 'medium'
    }

    it('renders the button with label', () => {
        render(<Button {...defaultProps} />)
        const buttonElement = screen.getByText(/Click Me/i)
        expect(buttonElement).toBeInTheDocument()
    })

    it('applies stretched class when stretched prop is true', () => {
        render(
            <Button
                {...defaultProps}
                stretched={true}
            />
        )
        const buttonElement = screen.getByText(/Click Me/i)
        expect(buttonElement).toHaveClass('stretched')
    })

    it('applies the correct className based on mode and size', () => {
        render(
            <Button
                {...defaultProps}
                className='custom-class'
            />
        )
        const buttonElement = screen.getByText(/Click Me/i)
        expect(buttonElement).toHaveClass('custom-class')
        expect(buttonElement).toHaveClass('button')
        expect(buttonElement).toHaveClass('primary')
        expect(buttonElement).toHaveClass('medium')
    })

    it('displays the spinner when loading is true', () => {
        const { container } = render(
            <Button
                {...defaultProps}
                loading={true}
            />
        )

        const iconElement = container.querySelector('svg')
        expect(iconElement).toBeInTheDocument()
    })

    it('renders an icon if icon prop is provided', () => {
        const { container } = render(
            <Button
                {...defaultProps}
                icon='CheckCircle'
            />
        )
        const iconElement = container.querySelector('svg')
        expect(iconElement).toBeInTheDocument()
    })

    it('handles click events', () => {
        const handleClick = jest.fn()
        render(
            <Button
                {...defaultProps}
                onClick={handleClick}
            />
        )
        const buttonElement = screen.getByText(/Click Me/i)
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders a link if the link prop is provided', () => {
        render(
            <Button
                {...defaultProps}
                link='https://example.com'
            />
        )
        const linkElement = screen.getByRole('link')
        expect(linkElement).toHaveAttribute('href', 'https://example.com')
    })

    it('renders noindex attribute when noIndex is true', () => {
        render(
            <Button
                {...defaultProps}
                link='https://example.com'
                noIndex={true}
            />
        )
        const linkElement = screen.getByRole('link')
        expect(linkElement).toHaveAttribute('rel', 'noindex nofollow')
    })
})
