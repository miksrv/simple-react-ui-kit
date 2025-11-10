import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Icon from '../icon'

import Checkbox, { CheckboxProps } from './Checkbox'

describe('Checkbox Component', () => {
    const defaultProps: CheckboxProps = {
        label: 'Test Checkbox',
        checked: false,
        indeterminate: false,
        onChange: jest.fn()
    }

    it('renders the checkbox with label', () => {
        render(<Checkbox {...defaultProps} />)
        const labelElement = screen.getByText(/Test Checkbox/i)
        expect(labelElement).toBeInTheDocument()
    })

    it('renders the checkbox in checked state', () => {
        render(
            <Checkbox
                {...defaultProps}
                checked={true}
            />
        )
        const checkboxElement = screen.getByRole('checkbox')
        expect(checkboxElement).toBeChecked()
    })

    it('renders the checkbox in indeterminate state', () => {
        const { container } = render(
            <Checkbox
                {...defaultProps}
                indeterminate={true}
            />
        )

        const iconElement = container.querySelector('svg')
        const expectedIcon = render(<Icon name={'CheckboxIndeterminate'} />)

        expect(iconElement).toBeInTheDocument()

        const receivedPath = iconElement?.querySelector('path')?.getAttribute('d')
        const expectedPath = expectedIcon?.container?.querySelector('path')?.getAttribute('d')

        expect(receivedPath).toBe(expectedPath)
    })

    it('calls onChange when the checkbox is clicked', () => {
        const onChangeMock = jest.fn()
        render(
            <Checkbox
                {...defaultProps}
                onChange={onChangeMock}
            />
        )
        const checkboxElement = screen.getByRole('checkbox')
        fireEvent.click(checkboxElement)
        expect(onChangeMock).toHaveBeenCalled()
    })

    it('disables the checkbox when disabled prop is true', () => {
        render(
            <Checkbox
                {...defaultProps}
                disabled={true}
            />
        )
        const checkboxElement = screen.getByRole('checkbox')
        expect(checkboxElement).toBeDisabled()
    })

    it('renders the correct label text', () => {
        render(<Checkbox {...defaultProps} />)
        const labelElement = screen.getByText(/Test Checkbox/i)
        expect(labelElement).toBeInTheDocument()
    })
})
