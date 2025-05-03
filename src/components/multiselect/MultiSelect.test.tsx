import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import MultiSelect, { MultiSelectProps } from './MultiSelect'

import '@testing-library/jest-dom'

const defaultProps: MultiSelectProps<string> = {
    label: 'Select Items',
    placeholder: 'Search...',
    options: [
        { key: '1', value: 'Option 1' },
        { key: '2', value: 'Option 2' },
        { key: '3', value: 'Option 3' }
    ],
    notFoundCaption: 'No options found',
    onSelect: jest.fn(),
    onSearch: jest.fn(),
    onOpen: jest.fn()
}

describe('MultiSelect Component', () => {
    it('renders the MultiSelect with label and placeholder', () => {
        render(<MultiSelect<string> {...defaultProps} />)
        expect(screen.getByText(/Select Items/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument()
    })

    it('opens dropdown when clicked', () => {
        render(<MultiSelect<string> {...defaultProps} />)
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(defaultProps.onOpen).toHaveBeenCalledTimes(1)
    })

    it('displays loading spinner when loading is true', () => {
        const { container } = render(
            <MultiSelect<string>
                {...defaultProps}
                loading={true}
            />
        )

        const spinnerElement = container.querySelector('.spinner')
        expect(spinnerElement).toBeInTheDocument()
    })

    it('displays options when dropdown is open', () => {
        render(<MultiSelect<string> {...defaultProps} />)
        fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'O' } })
        defaultProps.options?.forEach((option) => {
            expect(screen.getByText(option.value)).toBeInTheDocument()
        })
    })

    it('filters options based on search input', () => {
        render(<MultiSelect {...defaultProps} />)
        fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'Option 1' } })
        expect(screen.getByText(/Option 1/i)).toBeInTheDocument()
        expect(screen.queryByText(/Option 2/i)).not.toBeInTheDocument()
    })

    it('calls onSelect with correct options on option click', () => {
        render(<MultiSelect<string> {...defaultProps} />)
        fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'Option 1' } })
        fireEvent.click(screen.getByText(/Option 1/i))
        expect(defaultProps.onSelect).toHaveBeenCalledWith([{ key: '1', value: 'Option 1' }])
    })

    it('displays notFoundCaption when no options match search', () => {
        render(<MultiSelect<string> {...defaultProps} />)
        fireEvent.change(screen.getByPlaceholderText(/Search.../i), { target: { value: 'NotExist' } })
        expect(screen.getByText(/No options found/i)).toBeInTheDocument()
    })

    it('displays selected options as badges', () => {
        render(
            <MultiSelect<string>
                {...defaultProps}
                value={['1', '2']}
            />
        )
        expect(screen.getByText(/Option 1/i)).toBeInTheDocument()
        expect(screen.getByText(/Option 2/i)).toBeInTheDocument()
    })

    it('removes selected option on badge remove click', () => {
        const onSelect = jest.fn()
        render(
            <MultiSelect<string>
                {...defaultProps}
                value={['1', '2']}
                onSelect={onSelect}
            />
        )
        fireEvent.click(screen.getAllByRole('button')[0])
        expect(onSelect).toHaveBeenCalledWith([{ key: '2', value: 'Option 2' }])
    })

    it('closes dropdown when clicking outside', () => {
        render(<MultiSelect<string> {...defaultProps} />)
        fireEvent.click(screen.getByPlaceholderText(/Search.../i))
        fireEvent.mouseDown(document.body)
        expect(screen.queryByText(/Option 1/i)).not.toBeInTheDocument()
    })

    it('applies additional class names', () => {
        const { container } = render(
            <MultiSelect<string>
                {...defaultProps}
                className='custom-multiselect-class'
            />
        )
        const containerElement = container.querySelector('div')
        expect(containerElement).toHaveClass('custom-multiselect-class')
    })

    it('displays error message when error prop is provided', () => {
        render(
            <MultiSelect<string>
                {...defaultProps}
                error='This is an error'
            />
        )
        expect(screen.getByText(/This is an error/i)).toBeInTheDocument()
    })

    it('disables interaction with the component when disabled prop is true', () => {
        render(
            <MultiSelect<string>
                {...defaultProps}
                disabled={true}
            />
        )

        const inputElement = screen.getByPlaceholderText(/Search.../i)
        expect(inputElement).toBeDisabled()

        fireEvent.click(inputElement)
        expect(screen.queryByText(/apple/i)).not.toBeInTheDocument()
    })

    it('calls onSelect without the last selected option when Backspace is pressed in the input', () => {
        const onSelect = jest.fn()

        render(
            <MultiSelect<string>
                {...defaultProps}
                value={defaultProps.options?.map((option) => option.key)}
                onSelect={onSelect}
            />
        )

        const inputElement = screen.getByPlaceholderText(/Search.../i)
        fireEvent.focus(inputElement)

        fireEvent.keyDown(inputElement, { key: 'Backspace' })

        expect(onSelect).toHaveBeenCalledWith(defaultProps?.options?.slice(0, 2))
    })

    it('calls onSelect with the first filtered option when Enter is pressed after typing in the input', () => {
        const onSelect = jest.fn()

        render(
            <MultiSelect<string>
                {...defaultProps}
                onSelect={onSelect}
            />
        )

        const inputElement = screen.getByPlaceholderText(/Search.../i)
        fireEvent.focus(inputElement)
        fireEvent.change(inputElement, { target: { value: 'Opt' } })
        fireEvent.keyDown(inputElement, { key: 'Enter' })

        expect(onSelect).toHaveBeenCalledWith([defaultProps?.options?.[0]])
    })
})
