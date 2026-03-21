import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Badge } from './Badge'
import { BadgeProps } from './types'

import styles from './styles.module.sass'

describe('Badge Component', () => {
    const defaultProps: BadgeProps = {
        label: 'Test Badge',
        icon: 'Award'
    }

    it('renders the badge with label and icon', () => {
        const { container } = render(<Badge {...defaultProps} />)
        const labelElement = screen.getByText(/Test Badge/i)
        const iconElement = container.querySelector('svg')
        expect(labelElement).toBeInTheDocument()
        expect(iconElement).toBeInTheDocument()
    })

    it('applies additional class names', () => {
        const { container } = render(
            <Badge
                {...defaultProps}
                className='custom-badge-class'
            />
        )
        const containerElement = container.querySelector('div')
        expect(containerElement).toHaveClass('custom-badge-class')
    })

    it('calls onClickRemove when remove button is clicked', () => {
        const onClickRemoveMock = jest.fn()
        render(
            <Badge
                {...defaultProps}
                onClickRemove={onClickRemoveMock}
            />
        )
        const removeButton = screen.getByRole('button')
        fireEvent.click(removeButton)
        expect(onClickRemoveMock).toHaveBeenCalledWith('Test Badge')
    })

    it('does not render remove button if onClickRemove is not provided', () => {
        render(<Badge {...defaultProps} />)
        const removeButton = screen.queryByRole('button')
        expect(removeButton).not.toBeInTheDocument()
    })

    it('renders the icon when provided', () => {
        const { container } = render(<Badge {...defaultProps} />)
        const iconElement = container.querySelector('svg')
        expect(iconElement).toBeInTheDocument()
    })

    it('renders the correct label', () => {
        render(<Badge {...defaultProps} />)
        const labelElement = screen.getByText(/Test Badge/i)
        expect(labelElement).toBeInTheDocument()
    })

    it('applies the correct size class based on the size prop', () => {
        const { container } = render(
            <Badge
                {...defaultProps}
                size={'large'}
            />
        )
        const badgeElement = container.querySelector('div')
        expect(badgeElement).toHaveClass(styles.large)

        render(
            <Badge
                {...defaultProps}
                size={'small'}
            />
        )
        const smallBadgeElement = screen.getAllByText(/Test Badge/i)?.[1].parentElement
        expect(smallBadgeElement).toHaveClass(styles.small)
    })

    it('renders a React element icon when icon is a ReactElement', () => {
        const customIcon = <span data-testid='custom-icon'>★</span>
        const { getByTestId } = render(
            <Badge
                label='Badge'
                icon={customIcon}
            />
        )
        expect(getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('renders without icon when icon prop is not provided', () => {
        const { container } = render(<Badge label='No Icon' />)
        const svgElement = container.querySelector('svg')
        expect(svgElement).not.toBeInTheDocument()
    })

    it('renders with a numeric label', () => {
        render(<Badge label={42} />)
        expect(screen.getByText('42')).toBeInTheDocument()
    })

    it('calls onClickRemove with numeric label', () => {
        const onClickRemoveMock = jest.fn()
        render(
            <Badge
                label={99}
                onClickRemove={onClickRemoveMock}
            />
        )
        fireEvent.click(screen.getByRole('button'))
        expect(onClickRemoveMock).toHaveBeenCalledWith(99)
    })

    it('applies medium size class by default', () => {
        const { container } = render(<Badge label='Default' />)
        const badgeElement = container.querySelector('div')
        expect(badgeElement).toHaveClass(styles.medium)
    })

    it('passes through additional HTML attributes', () => {
        const { container } = render(
            <Badge
                label='Test'
                data-testid='badge-test'
            />
        )
        expect(container.querySelector('[data-testid="badge-test"]')).toBeInTheDocument()
    })
})
