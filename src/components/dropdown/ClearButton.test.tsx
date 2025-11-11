import React from 'react'

import { fireEvent, render } from '@testing-library/react'

import ClearButton from './ClearButton'

describe('ClearButton', () => {
    it('renders without crashing', () => {
        const { getByRole } = render(<ClearButton />)
        expect(getByRole('button')).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
        const onClick = jest.fn()
        const { getByRole } = render(<ClearButton onClick={onClick} />)
        fireEvent.click(getByRole('button'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('calls onClick when Enter is pressed', () => {
        const onClick = jest.fn()
        const { getByRole } = render(<ClearButton onClick={onClick} />)
        fireEvent.keyDown(getByRole('button'), { key: 'Enter', code: 'Enter', charCode: 13 })
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick for other keys', () => {
        const onClick = jest.fn()
        const { getByRole } = render(<ClearButton onClick={onClick} />)
        fireEvent.keyDown(getByRole('button'), { key: 'Space', code: 'Space', charCode: 32 })
        expect(onClick).not.toHaveBeenCalled()
    })
})
