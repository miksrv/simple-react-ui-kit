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
})
