import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Icon } from '../icon'

import { Checkbox } from './Checkbox'
import { CheckboxProps } from './types'

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

    it('forwards ref as a function', () => {
        const refFn = jest.fn()
        render(
            <Checkbox
                label='Ref test'
                checked={false}
                indeterminate={false}
                onChange={jest.fn()}
                ref={refFn}
            />
        )
        expect(refFn).toHaveBeenCalledWith(expect.any(HTMLInputElement))
    })

    it('forwards ref as an object', () => {
        const refObj = React.createRef<HTMLInputElement>()
        render(
            <Checkbox
                label='Ref test'
                checked={false}
                indeterminate={false}
                onChange={jest.fn()}
                ref={refObj}
            />
        )
        expect(refObj.current).toBeInstanceOf(HTMLInputElement)
    })

    it('sets indeterminate DOM property on input when indeterminate is true', () => {
        const { container } = render(
            <Checkbox
                {...defaultProps}
                indeterminate={true}
            />
        )
        const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement
        expect(input.indeterminate).toBe(true)
    })

    it('sets aria-checked to mixed when indeterminate', () => {
        render(
            <Checkbox
                {...defaultProps}
                indeterminate={true}
            />
        )
        const input = screen.getByRole('checkbox')
        expect(input).toHaveAttribute('aria-checked', 'mixed')
    })

    it('sets aria-checked to true when checked', () => {
        render(
            <Checkbox
                {...defaultProps}
                checked={true}
            />
        )
        const input = screen.getByRole('checkbox')
        expect(input).toHaveAttribute('aria-checked', 'true')
    })

    it('renders ReactNode label', () => {
        render(
            <Checkbox
                label={<strong>Bold Label</strong>}
                checked={false}
                indeterminate={false}
                onChange={jest.fn()}
            />
        )
        expect(screen.getByText('Bold Label')).toBeInTheDocument()
    })

    it('does not render label span when label is not provided', () => {
        const { container } = render(
            <Checkbox
                checked={false}
                indeterminate={false}
                onChange={jest.fn()}
            />
        )
        expect(container.querySelector('.labelText')).not.toBeInTheDocument()
    })

    it('applies custom className to wrapper div', () => {
        const { container } = render(
            <Checkbox
                {...defaultProps}
                className='custom-class'
            />
        )
        expect(container.firstChild).toHaveClass('custom-class')
    })

    it('applies disabled class to wrapper div when disabled', () => {
        const { container } = render(
            <Checkbox
                {...defaultProps}
                disabled={true}
            />
        )
        expect(container.firstChild).toHaveClass('disabled')
    })

    it('uses provided id for input', () => {
        render(
            <Checkbox
                {...defaultProps}
                id='my-checkbox'
            />
        )
        expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'my-checkbox')
    })

    it('renders CheckboxChecked icon when checked and not indeterminate', () => {
        const { container } = render(
            <Checkbox
                {...defaultProps}
                checked={true}
                indeterminate={false}
            />
        )
        const iconElement = container.querySelector('svg')
        const checkedIcon = render(<Icon name='CheckboxChecked' />)
        const receivedPath = iconElement?.querySelector('path')?.getAttribute('d')
        const expectedPath = checkedIcon?.container?.querySelector('path')?.getAttribute('d')
        expect(receivedPath).toBe(expectedPath)
    })
})
