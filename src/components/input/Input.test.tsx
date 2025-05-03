import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Input, { InputProps } from './Input'

import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

import styles from './styles.module.sass'

describe('Input Component', () => {
    const defaultProps: InputProps = {
        label: 'Username',
        placeholder: 'Enter your username'
    }

    it('renders the input with label', () => {
        render(<Input {...defaultProps} />)
        const labelElement = screen.getByText(/Username/i)
        expect(labelElement).toBeInTheDocument()
    })

    it('renders the input with placeholder', () => {
        render(<Input {...defaultProps} />)
        const inputElement = screen.getByPlaceholderText(/Enter your username/i)
        expect(inputElement).toBeInTheDocument()
    })

    it('displays error message when error prop is provided', () => {
        render(
            <Input
                {...defaultProps}
                error='This field is required'
            />
        )
        const errorElement = screen.getByText(/This field is required/i)
        expect(errorElement).toBeInTheDocument()
    })

    it('applies additional class names', () => {
        const { container } = render(
            <Input
                {...defaultProps}
                className='custom-input-class'
            />
        )
        const containerElement = container.querySelector('div')
        expect(containerElement).toHaveClass('custom-input-class')
    })

    it('applies the correct className based on required and disabled props', () => {
        render(
            <Input
                {...defaultProps}
                required
                disabled
            />
        )
        const inputContainer = screen.getByText(/Username/i).closest('div')
        expect(inputContainer).toHaveClass('required')
        expect(inputContainer).toHaveClass('disabled')

        expect(screen.getByPlaceholderText('Enter your username')).toBeDisabled()
    })

    it('calls onChange handler when typing', () => {
        const handleChange = jest.fn()
        render(
            <Input
                {...defaultProps}
                onChange={handleChange}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Enter your username/i)

        fireEvent.change(inputElement, { target: { value: 'test' } })
        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('does not display error class when error prop is not provided', () => {
        render(<Input {...defaultProps} />)
        const inputContainer = screen.getByText(/Username/i).closest('div')
        expect(inputContainer).not.toHaveClass('error')
    })

    it('applies the correct className when error prop is provided', () => {
        render(
            <Input
                {...defaultProps}
                error='Invalid input'
            />
        )
        const inputContainer = screen.getByText(/Username/i).closest('div')
        expect(inputContainer).toHaveClass('error')
    })

    it('applies the correct size class when size is small', () => {
        const { container } = render(
            <Input
                {...defaultProps}
                size='small'
            />
        )
        const inputContainer = container.querySelector('div')
        expect(inputContainer).toHaveClass(styles.small)
    })

    it('applies the correct size class when size is medium', () => {
        const { container } = render(
            <Input
                {...defaultProps}
                size='medium'
            />
        )
        const inputContainer = container.querySelector('div')
        expect(inputContainer).toHaveClass(styles.medium)
    })

    it('applies the correct size class when size is large', () => {
        const { container } = render(
            <Input
                {...defaultProps}
                size='large'
            />
        )
        const inputContainer = container.querySelector('div')
        expect(inputContainer).toHaveClass(styles.large)
    })
})
