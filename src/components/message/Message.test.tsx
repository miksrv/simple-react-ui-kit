import React from 'react'

import { render, screen } from '@testing-library/react'

import Message from './Message'

import '@testing-library/jest-dom'

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
})
