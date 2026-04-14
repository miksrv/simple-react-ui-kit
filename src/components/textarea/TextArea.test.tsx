import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { TextArea } from './TextArea'
import { TextAreaProps } from './types'

import styles from './styles.module.sass'

describe('TextArea Component', () => {
    const defaultProps: TextAreaProps = {
        label: 'Description',
        placeholder: 'Enter your description'
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the textarea with label', () => {
        render(<TextArea {...defaultProps} />)
        const labelElement = screen.getByText(/Description/i)
        expect(labelElement).toBeInTheDocument()
    })

    it('renders the textarea with placeholder', () => {
        render(<TextArea {...defaultProps} />)
        const textareaElement = screen.getByPlaceholderText(/Enter your description/i)
        expect(textareaElement).toBeInTheDocument()
    })

    it('displays error message when error prop is provided', () => {
        render(
            <TextArea
                {...defaultProps}
                error='This field is required'
            />
        )
        const errorElement = screen.getByText(/This field is required/i)
        expect(errorElement).toBeInTheDocument()
    })

    it('applies additional class names', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                className='custom-textarea-class'
            />
        )
        const containerElement = container.querySelector('div')
        expect(containerElement).toHaveClass('custom-textarea-class')
    })

    it('applies the correct className based on required and disabled props', () => {
        render(
            <TextArea
                {...defaultProps}
                required
                disabled
            />
        )
        const textAreaContainer = screen.getByText(/Description/i).closest('div')
        expect(textAreaContainer).toHaveClass('required')
        expect(textAreaContainer).toHaveClass('disabled')

        expect(screen.getByPlaceholderText('Enter your description')).toBeDisabled()
    })

    it('calls onChange handler when typing', () => {
        const handleChange = jest.fn()
        render(
            <TextArea
                {...defaultProps}
                onChange={handleChange}
            />
        )
        const textareaElement = screen.getByPlaceholderText(/Enter your description/i)

        fireEvent.change(textareaElement, { target: { value: 'test' } })
        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('does not display error class when error prop is not provided', () => {
        render(<TextArea {...defaultProps} />)
        const textAreaContainer = screen.getByText(/Description/i).closest('div')
        expect(textAreaContainer).not.toHaveClass('error')
    })

    it('applies the correct className when error prop is provided', () => {
        render(
            <TextArea
                {...defaultProps}
                error='Invalid input'
            />
        )
        const textAreaContainer = screen.getByText(/Description/i).closest('div')
        expect(textAreaContainer).toHaveClass('error')
    })

    it('applies the correct size class when size is small', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                size='small'
            />
        )
        const textAreaContainer = container.querySelector('div')
        expect(textAreaContainer).toHaveClass(styles.small)
    })

    it('applies the correct size class when size is medium', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                size='medium'
            />
        )
        const textAreaContainer = container.querySelector('div')
        expect(textAreaContainer).toHaveClass(styles.medium)
    })

    it('applies the correct size class when size is large', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                size='large'
            />
        )
        const textAreaContainer = container.querySelector('div')
        expect(textAreaContainer).toHaveClass(styles.large)
    })

    it('applies the correct class for primary mode (default)', () => {
        const { container } = render(<TextArea {...defaultProps} />)
        const formField = container.querySelector(`.${styles.formField}`)
        expect(formField).toHaveClass(styles.primary)
    })

    it('applies the correct class for primary mode when explicitly set', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                mode='primary'
            />
        )
        const formField = container.querySelector(`.${styles.formField}`)
        expect(formField).toHaveClass(/primary/)
    })

    it('applies the correct class for ghost mode', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                mode='ghost'
            />
        )
        const formField = container.querySelector(`.${styles.formField}`)
        expect(formField).toHaveClass(/ghost/)
    })

    it('renders without label when label prop is not provided', () => {
        render(<TextArea placeholder='No label' />)
        expect(screen.queryByText('Description')).not.toBeInTheDocument()
    })

    it('does not render error div when error is an empty string', () => {
        const { container } = render(
            <TextArea
                {...defaultProps}
                error=''
            />
        )
        expect(container.querySelector('.error')).not.toBeInTheDocument()
    })

    it('passes value attribute through to textarea', () => {
        render(
            <TextArea
                {...defaultProps}
                value='initial value'
                onChange={jest.fn()}
            />
        )
        expect(screen.getByPlaceholderText('Enter your description')).toHaveValue('initial value')
    })

    it('does not apply error class when error is undefined', () => {
        const { container } = render(<TextArea {...defaultProps} />)
        expect(container.querySelector('div')).not.toHaveClass('error')
    })

    it('renders textarea with resize: none style when resize prop is none', () => {
        render(
            <TextArea
                {...defaultProps}
                resize='none'
            />
        )
        const textareaElement = screen.getByRole('textbox')
        expect(textareaElement).toHaveStyle({ resize: 'none' })
    })

    it('auto-resizes textarea height on change when autoResize is true', () => {
        render(
            <TextArea
                {...defaultProps}
                autoResize
            />
        )
        const textareaElement = screen.getByRole('textbox')

        Object.defineProperty(textareaElement, 'scrollHeight', { configurable: true, value: 200 })
        fireEvent.change(textareaElement, { target: { value: 'some long text\nwith newlines' } })

        expect(textareaElement.style.height).toBe('200px')
    })

    it('forces resize: none style when autoResize is true', () => {
        render(
            <TextArea
                {...defaultProps}
                autoResize
                resize='both'
            />
        )
        const textareaElement = screen.getByRole('textbox')
        expect(textareaElement).toHaveStyle({ resize: 'none' })
    })

    it('does not auto-resize when autoResize is false', () => {
        render(
            <TextArea
                {...defaultProps}
                autoResize={false}
            />
        )
        const textareaElement = screen.getByRole('textbox')
        fireEvent.change(textareaElement, { target: { value: 'text' } })
        expect(textareaElement.style.height).toBe('')
    })
})
