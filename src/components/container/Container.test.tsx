import React from 'react'

import { render, screen } from '@testing-library/react'

import { Container } from './Container'
import { ContainerProps } from './types'

describe('Container Component', () => {
    const defaultProps: ContainerProps = {
        title: 'Test Title',
        children: 'This is a container content',
        footer: <div>Footer Content</div>
    }

    it('renders the container with title and content', () => {
        render(<Container {...defaultProps} />)
        const titleElement = screen.getByText(/Test Title/i)
        const contentElement = screen.getByText(/This is a container content/i)
        expect(titleElement).toBeInTheDocument()
        expect(contentElement).toBeInTheDocument()
    })

    it('renders the footer if provided', () => {
        render(<Container {...defaultProps} />)
        const footerElement = screen.getByText(/Footer Content/i)
        expect(footerElement).toBeInTheDocument()
    })

    it('applies additional class names', () => {
        const { container } = render(
            <Container
                {...defaultProps}
                className='custom-container-class'
            />
        )
        const containerElement = container.querySelector('section')
        expect(containerElement).toHaveClass('custom-container-class')
    })

    it('renders custom header when provided', () => {
        const customHeader = <div>Custom Header</div>
        render(
            <Container
                {...defaultProps}
                header={customHeader}
            />
        )
        const headerElement = screen.getByText(/Custom Header/i)
        expect(headerElement).toBeInTheDocument()
    })

    it('renders an action element if provided', () => {
        const actionElement = <button>Action Button</button>
        render(
            <Container
                {...defaultProps}
                action={actionElement}
            />
        )
        const actionButton = screen.getByText(/Action Button/i)
        expect(actionButton).toBeInTheDocument()
    })

    it('does not render header section when neither title, header, nor action is provided', () => {
        const { container } = render(<Container>Content only</Container>)
        expect(container.querySelector('.header')).not.toBeInTheDocument()
    })

    it('renders only title in header without action or custom header', () => {
        render(<Container title='Only Title'>Content</Container>)
        expect(screen.getByText('Only Title')).toBeInTheDocument()
        const heading = screen.getByRole('heading', { level: 2 })
        expect(heading).toHaveTextContent('Only Title')
    })

    it('renders only action in header without title', () => {
        const { container } = render(
            <Container action={<button>Do It</button>}>Content</Container>
        )
        expect(screen.getByText('Do It')).toBeInTheDocument()
        expect(container.querySelector('.header')).toBeInTheDocument()
    })

    it('does not render footer when footer prop is not provided', () => {
        const { container } = render(<Container title='No Footer'>Content</Container>)
        expect(container.querySelector('.footer')).not.toBeInTheDocument()
    })

    it('renders as section element', () => {
        const { container } = render(<Container title='Section'>Content</Container>)
        expect(container.querySelector('section')).toBeInTheDocument()
    })

    it('passes additional HTML attributes to section', () => {
        const { container } = render(
            <Container
                title='Test'
                data-testid='my-container'
            >
                Content
            </Container>
        )
        expect(container.querySelector('[data-testid="my-container"]')).toBeInTheDocument()
    })
})
