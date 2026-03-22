import React from 'react'

import { render, screen } from '@testing-library/react'

import { Message } from './Message'

describe('Message Component', () => {
    it('renders the Message component with title and children', () => {
        render(<Message title='Test Title'>This is a test message</Message>)

        const titleElement = screen.getByText(/Test Title/i)
        expect(titleElement).toBeInTheDocument()

        const contentElement = screen.getByText(/This is a test message/i)
        expect(contentElement).toBeInTheDocument()
    })

    it('applies correct styles based on message type', () => {
        render(
            <Message
                type='warning'
                title='Warning Title'
            >
                Warning content
            </Message>
        )

        const titleElement = screen.getByText(/Warning Title/i)
        expect(titleElement).toBeInTheDocument()

        const sectionElement = titleElement.closest('section')
        expect(sectionElement).toHaveClass('warning')
    })

    it('renders correctly without a title or list', () => {
        render(<Message>This message has no title or list</Message>)

        const contentElement = screen.getByText(/This message has no title or list/i)
        expect(contentElement).toBeInTheDocument()

        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })

    it('applies error type class', () => {
        render(
            <Message
                type='error'
                title='Error'
            >
                Error content
            </Message>
        )
        const section = screen.getByText('Error').closest('section')
        expect(section).toHaveClass('error')
    })

    it('applies success type class', () => {
        render(
            <Message
                type='success'
                title='Success'
            >
                Success content
            </Message>
        )
        const section = screen.getByText('Success').closest('section')
        expect(section).toHaveClass('success')
    })

    it('applies info type class', () => {
        render(
            <Message
                type='info'
                title='Info'
            >
                Info content
            </Message>
        )
        const section = screen.getByText('Info').closest('section')
        expect(section).toHaveClass('info')
    })

    it('renders without children', () => {
        const { container } = render(<Message title='Title only' />)
        expect(screen.getByText('Title only')).toBeInTheDocument()
        expect(container.querySelector('.content')).not.toBeInTheDocument()
    })

    it('does not render title div when title is not provided', () => {
        const { container } = render(<Message>Content only</Message>)
        expect(container.querySelector('.title')).not.toBeInTheDocument()
    })

    it('does not apply type class when type is not provided', () => {
        render(<Message title='No type'>Content</Message>)
        const section = screen.getByText('No type').closest('section')
        expect(section).not.toHaveClass('error')
        expect(section).not.toHaveClass('warning')
        expect(section).not.toHaveClass('success')
        expect(section).not.toHaveClass('info')
    })

    it('passes additional HTML attributes to section', () => {
        render(
            <Message
                title='Test'
                data-testid='message-test'
            >
                Content
            </Message>
        )
        expect(screen.getByTestId('message-test')).toBeInTheDocument()
    })
})
