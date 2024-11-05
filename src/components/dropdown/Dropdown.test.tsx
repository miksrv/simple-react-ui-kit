import React from 'react'

import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

import Dropdown, { DropdownOption } from './Dropdown'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

const options: DropdownOption<number>[] = [
    { key: 1, value: 'Option 1' },
    { key: 2, value: 'Option 2' },
    { key: 3, value: 'Option 3' }
]

describe('Dropdown Component', () => {
    it('renders without crashing', () => {
        render(<Dropdown options={options} />)
        const dropdownElement = screen.getByRole('button')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('closes dropdown when clicking outside', () => {
        render(
            <Dropdown
                options={options}
                label='Select an option'
            />
        )

        const dropdownButton = screen.getByRole('button')
        fireEvent.click(dropdownButton)

        expect(screen.getByText('Option 1')).toBeInTheDocument()

        fireEvent.click(document.body)

        waitFor(() => {
            expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
        })
    })

    it('displays the placeholder when no option is selected', () => {
        render(
            <Dropdown
                options={options}
                placeholder='Select an option'
            />
        )
        const dropdownElement = screen.getByText('Select an option')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('shows the selected option when one is chosen', () => {
        render(
            <Dropdown
                options={options}
                value={1}
            />
        )
        const dropdownElement = screen.getByText('Option 1')
        expect(dropdownElement).toBeInTheDocument()
    })

    it('opens and closes the options list when clicked', () => {
        render(<Dropdown options={options} />)
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
            <Dropdown
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
            <Dropdown
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
            <Dropdown
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
            <Dropdown
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
            <Dropdown
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

    it('does not open dropdown if search is empty while searchable', async () => {
        const placeholder = 'Select an option'

        render(
            <Dropdown
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
            <Dropdown
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
            <Dropdown
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
})
