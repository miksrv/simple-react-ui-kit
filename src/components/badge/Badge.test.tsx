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
})
