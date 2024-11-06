import React from 'react'

import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

import Input, { InputProps } from './Input'

import { fireEvent, render, screen } from '@testing-library/react'

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
})
