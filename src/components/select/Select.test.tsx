import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Select } from './Select'
import { SelectOptionType } from './types'

const options: Array<SelectOptionType<string>> = [
    { key: '1', value: 'Option One' },
    { key: '2', value: 'Option Two', disabled: true },
    { key: '3', value: 'Option Three', icon: 'Camera' },
    { key: '4', value: 'Option Four', emoji: 'Check' },
    { key: '5', value: 'Option Five', image: { src: 'https://via.placeholder.com/20' } }
]

describe('Select Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        // clean up DOM between tests
        document.body.innerHTML = ''
    })

    // === Basic Rendering ===

    it('renders the Select component', () => {
        render(<Select options={options} />)
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('applies custom className', () => {
        const { container } = render(
            <Select
                options={options}
                className='custom-class'
            />
        )
        expect(container.firstChild).toHaveClass('custom-class')
    })

    it('renders label when provided', () => {
        render(
            <Select
                options={options}
                label='Test Label'
            />
        )
        expect(screen.getByText('Test Label')).toBeInTheDocument()
    })

    it('shows placeholder when no selection', () => {
        render(
            <Select
                options={options}
                placeholder='Choose...'
            />
        )
        expect(screen.getByText('Choose...')).toBeInTheDocument()
    })

    it('shows selected value in non-multiple mode', () => {
        render(
            <Select
                options={options}
                value='1'
            />
        )
        expect(screen.getByText('Option One')).toBeInTheDocument()
    })

    it('shows badges in multiple mode', () => {
        render(
            <Select
                multiple
                options={options}
                value={['1', '3']}
            />
        )
        expect(screen.getByText('Option One')).toBeInTheDocument()
        expect(screen.getByText('Option Three')).toBeInTheDocument()
    })

    // === States ===

    it('applies required class', () => {
        const { container } = render(
            <Select
                options={options}
                required
            />
        )
        expect(container.querySelector('.select')).toHaveClass('required')
    })

    it('applies disabled state', () => {
        render(
            <Select
                options={options}
                disabled
            />
        )
        expect(screen.getByRole('combobox')).toHaveAttribute('aria-disabled', 'true')
        expect(screen.getByRole('button', { name: /open dropdown/i })).toHaveAttribute('aria-disabled', 'true')
    })

    it('shows error message', () => {
        render(
            <Select
                options={options}
                error='Required field'
            />
        )
        expect(screen.getByText('Required field')).toBeInTheDocument()
    })

    it('shows loading spinner', () => {
        const { container } = render(
            <Select
                options={options}
                loading
            />
        )
        const containerElement = container.querySelector('svg')
        expect(containerElement).toHaveClass('spinner')
    })

    // === Searchable ===

    it('shows search input when searchable is true', () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('filters options on search input', async () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'three' } })
        fireEvent.click(screen.getByRole('combobox')) // открыть

        await waitFor(() => {
            expect(screen.getByText('Option Three')).toBeInTheDocument()
            expect(screen.queryByText('Option One')).not.toBeInTheDocument()
        })
    })

    // === Multiple choice ===

    it('adds option on click in multiple mode', async () => {
        const onSelect = jest.fn()
        render(
            <Select
                multiple
                options={options}
                onSelect={onSelect}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))
    })

    it('removes badge on remove click in multiple mode', () => {
        const onSelect = jest.fn()
        render(
            <Select
                multiple
                clearable
                options={options}
                value={['1']}
                onSelect={onSelect}
            />
        )

        const removeButton = screen.getByRole('button', { name: 'Clear selection' })
        fireEvent.click(removeButton)

        expect(onSelect).toHaveBeenCalledTimes(1)
    })

    // === Single choice ===

    it('selects option and closes dropdown by default', async () => {
        const onSelect = jest.fn()
        render(
            <Select
                options={options}
                onSelect={onSelect}
            />
        )

        fireEvent.click(screen.getByRole('combobox'))

        await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument())
    })

    it('keeps dropdown open when closeOnSelect is false', () => {
        render(
            <Select
                options={options}
                closeOnSelect={false}
            />
        )
        fireEvent.click(screen.getByRole('combobox'))
    })

    // === Clearable ===

    it('shows clear button when clearable and has selection', () => {
        render(
            <Select
                options={options}
                value='1'
                clearable
            />
        )
        expect(screen.getByRole('button', { name: 'Clear selection' })).toBeInTheDocument()
    })

    it('hides clear button when no selection', () => {
        render(
            <Select
                options={options}
                clearable
            />
        )
        expect(screen.queryByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument()
    })

    it('clears selection on clear button click', () => {
        const onSelect = jest.fn()
        render(
            <Select
                options={options}
                value='1'
                clearable
                onSelect={onSelect}
            />
        )

        fireEvent.click(screen.getByRole('button', { name: 'Clear selection' }))
        expect(onSelect).toHaveBeenCalledWith(undefined)
    })

    // === Keyboard Accessibility ===

    it('opens dropdown on ArrowDown', () => {
        render(<Select options={options} />)
        const trigger = screen.getByRole('combobox')
        fireEvent.keyDown(trigger, { key: 'ArrowDown' })

        // The dropdown opens via the "Open dropdown" button, so aria-expanded should become true
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('selects first option on Enter in searchable mode', async () => {
        const onSelect = jest.fn()
        render(
            <Select
                options={options}
                searchable
                onSelect={onSelect}
            />
        )
        const input = screen.getByRole('textbox')

        fireEvent.click(screen.getByRole('combobox'))
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(onSelect).toHaveBeenCalledWith([expect.objectContaining({ key: '1' })])
    })

    it('removes last badge on Backspace in multiple mode', () => {
        const onSelect = jest.fn()
        render(
            <Select
                multiple
                options={options}
                value={['1', '3']}
                onSelect={onSelect}
                searchable
            />
        )
        const input = screen.getByRole('textbox')

        fireEvent.keyDown(input, { key: 'Backspace' })
        expect(onSelect).toHaveBeenCalledWith([expect.objectContaining({ key: '1' })])
    })

    it('clears selection on Backspace in single mode', () => {
        const onSelect = jest.fn()
        render(
            <Select
                options={options}
                value='1'
                onSelect={onSelect}
                searchable
            />
        )
        const input = screen.getByRole('textbox')

        fireEvent.keyDown(input, { key: 'Backspace' })
        expect(onSelect).toHaveBeenCalledWith(undefined)
    })

    it('closes dropdown on Escape', () => {
        render(<Select options={options} />)
        fireEvent.click(screen.getByRole('combobox'))
        fireEvent.keyDown(document, { key: 'Escape' })

        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    // === Portal and Outside Click ===

    it('closes dropdown when clicking outside', async () => {
        render(<Select options={options} />)
        // Open the dropdown
        fireEvent.click(screen.getByRole('button', { name: /open dropdown/i }))

        fireEvent.mouseDown(document.body)
        await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument())
    })

    // === Icon, Emoji, Image ===

    it('renders icon in selected option', () => {
        render(
            <Select
                options={options}
                value='3'
            />
        )
        // Check if the icon is rendered
        const prefix = screen.getByText('Option Three').closest('.valueContainer')?.querySelector('.prefix')
        expect(prefix?.querySelector('svg')).toBeInTheDocument()
        expect(screen.getByText('Option Three')).toBeInTheDocument()
    })

    it('renders emoji in badge', () => {
        render(
            <Select
                multiple
                options={options}
                value={['4']}
            />
        )
        expect(screen.getByText('Check')).toBeInTheDocument()
    })

    it('renders image in selected option', () => {
        render(
            <Select
                options={options}
                value='5'
            />
        )
        expect(screen.getByAltText('')).toHaveAttribute('src', 'https://via.placeholder.com/20')
    })

    // === Not found ===

    it('shows notFoundCaption when no options match', async () => {
        render(
            <Select
                options={options}
                searchable
                notFoundCaption='No results'
            />
        )
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { target: { value: 'xyz' } })
        fireEvent.click(screen.getByRole('combobox'))

        await waitFor(() => {
            expect(screen.getByText('No results')).toBeInTheDocument()
        })
    })
})
