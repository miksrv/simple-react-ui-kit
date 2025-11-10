import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import Dropdown, { DropdownOption } from './Dropdown'

const options: Array<DropdownOption<number>> = [
    { key: 1, value: 'Option 1' },
    { key: 2, value: 'Option 2' },
    { key: 3, value: 'Option 3' }
]

describe('Dropdown Component', () => {
    it('renders without crashing', () => {
        render(<Dropdown<number> options={options} />)
        const dropdownElement = screen.getByRole('button')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('closes dropdown when clicking outside', () => {
        render(
            <Dropdown<number>
                options={options}
                label='Select an option'
            />
        )

        const dropdownButton = screen.getByRole('button')
        fireEvent.click(dropdownButton)

        expect(screen.getByText('Option 1')).toBeInTheDocument()

        fireEvent.click(document.body)

        void waitFor(() => {
            expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
        })
    })

    it('displays the placeholder when no option is selected', () => {
        render(
            <Dropdown<number>
                options={options}
                placeholder='Select an option'
            />
        )
        const dropdownElement = screen.getByText('Select an option')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('shows the selected option when one is chosen', () => {
        render(
            <Dropdown<number>
                options={options}
                value={1}
            />
        )
        const dropdownElement = screen.getByText('Option 1')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('opens and closes the options list when clicked', () => {
        render(<Dropdown<number> options={options} />)
        const dropdownButton = screen.getByRole('button')

        // Open dropdown
        fireEvent.click(dropdownButton)
        expect(screen.getByText('Option 1')).toBeInTheDocument()

        // Close dropdown
        fireEvent.click(dropdownButton)
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
    })

    it('selects an option when clicked', () => {
        const handleSelect = jest.fn()
        render(
            <Dropdown<number>
                options={options}
                onSelect={handleSelect}
            />
        )

        const dropdownButton = screen.getByRole('button')
        fireEvent.click(dropdownButton) // Open dropdown

        const optionToSelect = screen.getByText('Option 1')
        fireEvent.click(optionToSelect) // Select option

        expect(handleSelect).toHaveBeenCalledWith(options[0]) // Ensure correct option is passed
    })

    it('clears the selected option when clearable', () => {
        const handleSelect = jest.fn()

        render(
            <Dropdown<number>
                options={options}
                value={1}
                clearable
                onSelect={handleSelect}
            />
        )

        // Now you should find the clear button correctly
        const clearButton = screen.getByRole('button', { name: '' }) // Update this if you add an aria-label to the clear button

        // Click the clear button
        fireEvent.click(clearButton)

        // Ensure the handleSelect function is called with undefined
        expect(handleSelect).toHaveBeenCalledWith(undefined) // Ensure clear action is handled
    })

    it('displays an error message when provided', () => {
        render(
            <Dropdown<number>
                options={options}
                error='This field is required'
            />
        )
        const errorMessage = screen.getByText('This field is required')
        expect(errorMessage).toBeInTheDocument()
    })

    it('does not allow selection when disabled', () => {
        const handleSelect = jest.fn()
        render(
            <Dropdown<number>
                options={options}
                disabled
                onSelect={handleSelect}
            />
        )

        const dropdownButton = screen.getByRole('button')
        fireEvent.click(dropdownButton) // Attempt to open dropdown
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument() // Ensure options are not displayed

        const optionToSelect = screen.queryByText('Option 1')
        if (optionToSelect) {
            fireEvent.click(optionToSelect) // Attempt to select option
        }

        expect(handleSelect).not.toHaveBeenCalled() // Ensure select action is not called
    })

    it('searches through options when typing', async () => {
        const placeholder = 'Select an option'

        render(
            <Dropdown<number>
                options={options}
                searchable={true}
                placeholder={placeholder}
            />
        )

        const input = screen.getByPlaceholderText(placeholder)
        fireEvent.change(input, { target: { value: 'Option 1' } })

        await waitFor(() => {
            expect(screen.getByText('Option 1')).toBeInTheDocument()
            expect(screen.queryByText('Option 2')).not.toBeInTheDocument()
            expect(screen.queryByText('Option 3')).not.toBeInTheDocument()
        })
    })

    it('applies additional class names', () => {
        const { container } = render(
            <Dropdown<number>
                options={options}
                className='custom-dropdown-class'
            />
        )
        const containerElement = container.querySelector('div')
        expect(containerElement).toHaveClass('custom-dropdown-class')
    })

    it('does not open dropdown if search is empty while searchable', async () => {
        const placeholder = 'Select an option'

        render(
            <Dropdown<number>
                options={options}
                searchable={true}
                placeholder={placeholder}
            />
        )
        const input = screen.getByPlaceholderText(placeholder)
        fireEvent.change(input, { target: { value: '' } })

        await waitFor(() => {
            expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
        })
    })

    it('calls onSearch with the search query when search is triggered', () => {
        const searchQuery = 'test search'
        const onSearchMock = jest.fn()

        const { container } = render(
            <Dropdown<number>
                options={options}
                searchable={true}
                onSearch={onSearchMock}
            />
        )

        const input = container.querySelector('input[type="text"]')

        if (input) {
            fireEvent.change(input, { target: { value: searchQuery } })
            fireEvent.keyUp(input, { key: 'Enter' })
        }

        expect(onSearchMock).toHaveBeenCalledWith(searchQuery)
    })

    it('displays notFoundCaption when no results are found', () => {
        const notFoundCaption = 'No results found'

        const { container } = render(
            <Dropdown<number>
                options={[]}
                searchable={true}
                notFoundCaption={notFoundCaption}
            />
        )

        const input = container.querySelector('input[type="text"]')

        if (input) {
            fireEvent.change(input, { target: { value: 'something' } })
            fireEvent.keyUp(input, { key: 'Enter' })
        }

        expect(screen.getByText(notFoundCaption)).toBeInTheDocument()
    })

    it('calls onSelect with the first filtered option when Enter is pressed after typing in the input', () => {
        const onSelect = jest.fn()

        render(
            <Dropdown<number>
                options={options}
                searchable={true}
                placeholder={'Search option...'}
                onSelect={onSelect}
            />
        )

        const inputElement = screen.getByPlaceholderText(/Search option.../i)
        fireEvent.focus(inputElement)
        fireEvent.change(inputElement, { target: { value: 'Option 2' } })
        fireEvent.keyDown(inputElement, { key: 'Enter' })

        expect(onSelect).toHaveBeenCalledWith(options[1])
    })

    it('renders emoji in the selected option', () => {
        const emojiOptions = [
            { key: 1, value: 'Smile', emoji: '😊' },
            { key: 2, value: 'Rocket', emoji: '🚀' }
        ]
        render(
            <Dropdown<number>
                options={emojiOptions}
                value={1}
            />
        )
        expect(screen.getByText('😊')).toBeInTheDocument()
        expect(screen.getByText('Smile')).toBeInTheDocument()
    })

    it('renders emoji in the dropdown list', () => {
        const emojiOptions = [
            { key: 1, value: 'Smile', emoji: '😊' },
            { key: 2, value: 'Rocket', emoji: '🚀' }
        ]
        render(<Dropdown<number> options={emojiOptions} />)
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByText('😊')).toBeInTheDocument()
        expect(screen.getByText('🚀')).toBeInTheDocument()
    })

    it('selects an option with emoji', () => {
        const emojiOptions = [
            { key: 1, value: 'Smile', emoji: '😊' },
            { key: 2, value: 'Rocket', emoji: '🚀' }
        ]
        const handleSelect = jest.fn()
        render(
            <Dropdown<number>
                options={emojiOptions}
                onSelect={handleSelect}
            />
        )
        fireEvent.click(screen.getByRole('button'))
        fireEvent.click(screen.getByText('Smile'))
        expect(handleSelect).toHaveBeenCalledWith(emojiOptions[0])
    })
})
