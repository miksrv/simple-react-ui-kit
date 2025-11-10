import React from 'react'

import { render, screen } from '@testing-library/react'

import type { DropdownOption } from './Dropdown'
import OptionsList from './OptionsList'

describe('OptionsList', () => {
    it('renders emoji when option has emoji property', () => {
        const options: Array<DropdownOption<string>> = [
            { key: 'smile', value: 'Smile', emoji: '😊' },
            { key: 'rocket', value: 'Rocket', emoji: '🚀' }
        ]
        render(<OptionsList options={options} />)
        expect(screen.getByText('😊')).toBeInTheDocument()
        expect(screen.getByText('🚀')).toBeInTheDocument()
    })

    it('does not render emoji span if emoji property is missing', () => {
        const options: Array<DropdownOption<string>> = [{ key: 'noemoji', value: 'No Emoji' }]
        render(<OptionsList options={options} />)
        expect(screen.queryByText('😊')).not.toBeInTheDocument()
    })

    it('renders option value alongside emoji', () => {
        const options: Array<DropdownOption<string>> = [{ key: 'star', value: 'Star', emoji: '⭐️' }]
        render(<OptionsList options={options} />)
        expect(screen.getByText('⭐️')).toBeInTheDocument()
        expect(screen.getByText('Star')).toBeInTheDocument()
    })
})
