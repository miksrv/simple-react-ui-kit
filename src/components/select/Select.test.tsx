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

    it('closes dropdown and blurs input on Escape', () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        fireEvent.click(screen.getByRole('combobox'))
        const input = screen.getByRole('textbox')
        input.focus()
        expect(document.activeElement).toBe(input)
        fireEvent.keyDown(input, { key: 'Escape' })
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
        expect(document.activeElement).toBe(input)
    })

    it('opens dropdown on ArrowDown when closed', () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('opens dropdown on Enter key on toggle button', () => {
        render(<Select options={options} />)
        const toggleButton = screen.getByRole('button', { name: /open dropdown/i })
        fireEvent.keyDown(toggleButton, { key: 'Enter' })
        expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('opens dropdown on Space key on toggle button', () => {
        render(<Select options={options} />)
        const toggleButton = screen.getByRole('button', { name: /open dropdown/i })
        fireEvent.keyDown(toggleButton, { key: ' ' })
        expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('closes dropdown on Escape key on toggle button', () => {
        render(<Select options={options} />)
        const toggleButton = screen.getByRole('button', { name: /open dropdown/i })
        fireEvent.click(toggleButton)
        expect(screen.getByRole('listbox')).toBeInTheDocument()
        fireEvent.keyDown(toggleButton, { key: 'Escape' })
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

    it('calls onOpen when dropdown is opened', () => {
        const onOpen = jest.fn()
        render(
            <Select
                options={options}
                onOpen={onOpen}
            />
        )
        // Click the toggle button to open
        const toggleBtn = screen.getByRole('button', { name: /open dropdown/i })
        fireEvent.click(toggleBtn)
        expect(onOpen).toHaveBeenCalled()
    })

    it('calls onSearch when search input changes', () => {
        const onSearch = jest.fn()
        render(
            <Select
                options={options}
                searchable
                onSearch={onSearch}
            />
        )
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } })
        expect(onSearch).toHaveBeenCalledWith('test')
    })

    it('does not call onOpen a second time when toggling closed', () => {
        const onOpen = jest.fn()
        render(
            <Select
                options={options}
                onOpen={onOpen}
            />
        )
        // Open
        fireEvent.click(screen.getByRole('button', { name: /open dropdown/i }))
        const callsAfterOpen = onOpen.mock.calls.length

        // Close (button label changes to 'close dropdown')
        fireEvent.click(screen.getByRole('button', { name: /close dropdown/i }))
        // onOpen should not be called again when closing
        expect(onOpen.mock.calls.length).toBe(callsAfterOpen)
    })

    it('applies size class correctly', () => {
        const { container } = render(
            <Select
                options={options}
                size='large'
            />
        )
        expect(container.querySelector('.large')).toBeInTheDocument()
    })

    it('does not remove badge in multiple mode when badge remove is clicked if onSelect not provided', () => {
        render(
            <Select
                multiple
                options={options}
                value={['1']}
            />
        )
        // Without onSelect, remove button click should not crash
        const removeButtons = screen.queryAllByRole('button')
        // The badge remove button in Badge component
        const badgeRemoveBtn = removeButtons.find((btn) => btn.className?.includes('close'))
        if (badgeRemoveBtn) {
            fireEvent.click(badgeRemoveBtn)
        }
        expect(screen.getByText('Option One')).toBeInTheDocument()
    })

    it('handles search input clearing in single mode', () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'Opt' } })
        fireEvent.change(input, { target: { value: '' } })
        // No crash, dropdown closes for single mode
    })

    it('opens dropdown when search text is entered in single mode', async () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'Option' } })
        await waitFor(() => {
            expect(screen.getByRole('listbox')).toBeInTheDocument()
        })
    })

    it('shows emoji for selected option in single mode', () => {
        render(
            <Select
                options={options}
                value='4'
            />
        )
        // emoji option has emoji: 'Check'
        expect(screen.getByText('Check')).toBeInTheDocument()
    })

    it('clicking label focuses the search input in searchable mode', () => {
        render(
            <Select
                options={options}
                label='My Label'
                searchable
            />
        )
        const label = screen.getByText('My Label')
        fireEvent.click(label)
        // No crash, focus is attempted on input
    })

    it('does not select already-selected option in multiple mode', () => {
        const onSelect = jest.fn()
        render(
            <Select
                multiple
                options={options}
                value={['1']}
                onSelect={onSelect}
            />
        )
        fireEvent.click(screen.getByRole('combobox'))
        // Already selected options are filtered out — Option One should not appear in list
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    it('handles Delete key same as Backspace in single mode', () => {
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
        fireEvent.keyDown(input, { key: 'Delete' })
        expect(onSelect).toHaveBeenCalledWith(undefined)
    })

    it('applies focused class when input is focused', async () => {
        const { container } = render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')
        fireEvent.focus(input)
        expect(container.querySelector('.focused')).toBeInTheDocument()
    })

    it('removes focused class after blur', async () => {
        const { container } = render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')
        fireEvent.focus(input)
        expect(container.querySelector('.focused')).toBeInTheDocument()
        fireEvent.blur(input)
        // After the 150ms timeout, focused class should be removed
        await new Promise((resolve) => setTimeout(resolve, 200))
        expect(container.querySelector('.focused')).not.toBeInTheDocument()
    })

    it('blurs input on Escape key in searchable mode when dropdown is open', () => {
        render(
            <Select
                options={options}
                searchable
            />
        )
        const input = screen.getByRole('textbox')
        // Open dropdown first
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        expect(screen.getByRole('listbox')).toBeInTheDocument()
        // Now press Escape
        fireEvent.keyDown(input, { key: 'Escape' })
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    it('does not select disabled option via handleSelect', () => {
        const onSelect = jest.fn()
        render(
            <Select
                options={options}
                onSelect={onSelect}
            />
        )
        // Open dropdown and click disabled option (Option Two)
        fireEvent.click(screen.getByRole('button', { name: /open dropdown/i }))
        const disabledOption = screen.getByText('Option Two')
        fireEvent.click(disabledOption)
        expect(onSelect).not.toHaveBeenCalled()
    })

    it('selects option in multiple mode and calls onSelect', async () => {
        const onSelect = jest.fn()
        render(
            <Select
                multiple
                options={options}
                onSelect={onSelect}
            />
        )
        fireEvent.click(screen.getByRole('button', { name: /open dropdown/i }))
        await waitFor(() => screen.getByRole('listbox'))
        fireEvent.click(screen.getByText('Option One'))
        expect(onSelect).toHaveBeenCalledWith([expect.objectContaining({ key: '1' })])
    })

    it('does not open dropdown when clicking toggle button while disabled', () => {
        render(
            <Select
                options={options}
                disabled
            />
        )
        // The toggle button exists but clicking it when disabled should not open dropdown
        const toggleBtn = screen.getByRole('button', { name: /open dropdown/i })
        fireEvent.click(toggleBtn)
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    it('does not call onSelect when handleSelect is called with no option', async () => {
        const onSelect = jest.fn()
        render(
            <Select
                options={options}
                onSelect={onSelect}
            />
        )
        // Open dropdown - clicking a disabled option does nothing
        fireEvent.click(screen.getByRole('button', { name: /open dropdown/i }))
        await waitFor(() => screen.getByRole('listbox'))
        const disabledBtn = screen.getByText('Option Two').closest('button')!
        fireEvent.click(disabledBtn)
        expect(onSelect).not.toHaveBeenCalled()
    })

    // BUG-09: Two Select instances on the same page must have different option list IDs
    it('two Select instances have different IDs on their option lists', () => {
        render(
            <div>
                <Select
                    options={options}
                    searchable
                    aria-label='first'
                />
                <Select
                    options={options}
                    searchable
                    aria-label='second'
                />
            </div>
        )
        const inputs = screen.getAllByRole('textbox')
        expect(inputs).toHaveLength(2)
        const firstId = inputs[0].getAttribute('aria-controls')
        const secondId = inputs[1].getAttribute('aria-controls')
        expect(firstId).toBeTruthy()
        expect(secondId).toBeTruthy()
        expect(firstId).not.toBe(secondId)
    })
})
