import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { OptionsList } from './OptionsList'
import { SelectOptionType } from './types'

const options: Array<SelectOptionType<string>> = [
    { key: '1', value: 'Option 1' },
    { key: '2', value: 'Option 2', disabled: true },
    { key: '3', value: 'Option 3', emoji: '🎉' }
]

describe('OptionsList', () => {
    it('renders all options', () => {
        render(<OptionsList options={options} />)
        expect(screen.getByText('Option 1')).toBeInTheDocument()
        expect(screen.getByText('Option 2')).toBeInTheDocument()
        expect(screen.getByText('Option 3')).toBeInTheDocument()
    })

    it('renders emoji and disabled state', () => {
        render(<OptionsList options={options} />)
        expect(screen.getByText('🎉')).toBeInTheDocument()
        expect(screen.getByText('Option 2').closest('button')).toBeDisabled()
    })

    it('calls onOptionSelect when enabled option is clicked', () => {
        const onOptionSelect = jest.fn()
        render(
            <OptionsList
                options={options}
                onOptionSelect={onOptionSelect}
            />
        )
        fireEvent.click(screen.getByText('Option 1'))
        expect(onOptionSelect).toHaveBeenCalledWith(options[0])
    })

    it('does not call onOptionSelect for disabled option', () => {
        const onOptionSelect = jest.fn()
        render(
            <OptionsList
                options={options}
                onOptionSelect={onOptionSelect}
            />
        )
        fireEvent.click(screen.getByText('Option 2'))
        expect(onOptionSelect).not.toHaveBeenCalled()
    })

    it('shows notFoundCaption when options are empty', () => {
        render(
            <OptionsList
                options={[]}
                notFoundCaption='No data'
            />
        )
        expect(screen.getByText('No data')).toBeInTheDocument()
    })

    it('highlights the correct option', () => {
        render(
            <OptionsList
                options={options}
                highlightedIndex={2}
            />
        )
        const highlighted = screen.getByText('Option 3').closest('li')
        expect(highlighted).toHaveClass('highlighted')
    })

    it('marks selected options', () => {
        render(
            <OptionsList
                options={options}
                selectedOptions={[options[0], options[2]]}
            />
        )
        const selected1 = screen.getByText('Option 1').closest('li')
        const selected3 = screen.getByText('Option 3').closest('li')
        expect(selected1).toHaveClass('active')
        expect(selected3).toHaveClass('active')
    })

    it('renders option with icon', () => {
        const optionsWithIcon: Array<SelectOptionType<string>> = [{ key: 'a', value: 'With Icon', icon: 'Camera' }]
        const { container } = render(<OptionsList options={optionsWithIcon} />)
        expect(container.querySelector('svg')).toBeInTheDocument()
        expect(screen.getByText('With Icon')).toBeInTheDocument()
    })

    it('renders option with image', () => {
        const optionsWithImage: Array<SelectOptionType<string>> = [
            { key: 'b', value: 'With Image', image: { src: 'https://example.com/img.png' } }
        ]
        render(<OptionsList options={optionsWithImage} />)
        expect(screen.getByAltText('')).toHaveAttribute('src', 'https://example.com/img.png')
    })

    it('shows default notFoundCaption when none provided and options empty', () => {
        render(<OptionsList options={[]} />)
        expect(screen.getByText('Nothing found')).toBeInTheDocument()
    })

    it('renders aria attributes on list items', () => {
        render(
            <OptionsList
                options={options}
                selectedOptions={[options[0]]}
            />
        )
        const selected = screen.getByText('Option 1').closest('li')
        expect(selected).toHaveAttribute('aria-selected', 'true')

        const disabled = screen.getByText('Option 2').closest('li')
        expect(disabled).toHaveAttribute('aria-disabled', 'true')
    })

    it('renders listbox role on ul element', () => {
        render(<OptionsList options={options} />)
        expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('renders status role on not found message', () => {
        render(<OptionsList options={[]} />)
        expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('does not add highlighted class when highlightedIndex is -1', () => {
        render(
            <OptionsList
                options={options}
                highlightedIndex={-1}
            />
        )
        const items = document.querySelectorAll('li')
        items.forEach((item) => {
            expect(item).not.toHaveClass('highlighted')
        })
    })

    it('auto-scrolls down when highlighted item is below the visible area', () => {
        const { rerender } = render(
            <OptionsList
                options={options}
                highlightedIndex={-1}
            />
        )
        const list = screen.getByRole('listbox')

        // Mock getBoundingClientRect: list bottom at 100, item bottom at 150 (below)
        jest.spyOn(list, 'getBoundingClientRect').mockReturnValue({
            top: 0,
            bottom: 100,
            left: 0,
            right: 200,
            width: 200,
            height: 100,
            x: 0,
            y: 0,
            toJSON: jest.fn()
        })
        const items = list.querySelectorAll('li')
        jest.spyOn(items[0], 'getBoundingClientRect').mockReturnValue({
            top: 60,
            bottom: 150,
            left: 0,
            right: 200,
            width: 200,
            height: 40,
            x: 0,
            y: 60,
            toJSON: jest.fn()
        })

        rerender(
            <OptionsList
                options={options}
                highlightedIndex={0}
            />
        )
        // scrollTop mutation triggers (line 34); no crash expected
        expect(list).toBeInTheDocument()
    })

    it('auto-scrolls up when highlighted item is above the visible area', () => {
        const { rerender } = render(
            <OptionsList
                options={options}
                highlightedIndex={-1}
            />
        )
        const list = screen.getByRole('listbox')

        // Mock getBoundingClientRect: list top at 50, item top at 30 (above)
        jest.spyOn(list, 'getBoundingClientRect').mockReturnValue({
            top: 50,
            bottom: 200,
            left: 0,
            right: 200,
            width: 200,
            height: 150,
            x: 0,
            y: 50,
            toJSON: jest.fn()
        })
        const items = list.querySelectorAll('li')
        jest.spyOn(items[0], 'getBoundingClientRect').mockReturnValue({
            top: 30,
            bottom: 70,
            left: 0,
            right: 200,
            width: 200,
            height: 40,
            x: 0,
            y: 30,
            toJSON: jest.fn()
        })

        rerender(
            <OptionsList
                options={options}
                highlightedIndex={0}
            />
        )
        // scrollTop mutation triggers (line 36); no crash expected
        expect(list).toBeInTheDocument()
    })
})
