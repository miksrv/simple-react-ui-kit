import React, { createRef } from 'react'

import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

import Popout, { PopoutHandleProps } from './Popout'

import { fireEvent, screen } from '@testing-library/dom'
import { act, render } from '@testing-library/react'

describe('Popout Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the Popout component', () => {
        render(<Popout action='Click me'>Popout Content</Popout>)
        const buttonElement = screen.getByRole('button', { name: /Click me/i })
        expect(buttonElement).toBeInTheDocument()
    })

    it('toggles the popout content on button click', () => {
        render(<Popout action='Click me'>Popout Content</Popout>)
        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Initial state: popout should not be open
        expect(screen.queryByText(/Popout Content/i)).not.toBeInTheDocument()

        // Open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.getByText(/Popout Content/i)).toBeInTheDocument()

        // Close the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.queryByText(/Popout Content/i)).not.toBeInTheDocument()
    })

    it('closes popout when clicking outside', () => {
        const { container } = render(<Popout action='Click me'>Popout Content</Popout>)
        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.getByText(/Popout Content/i)).toBeInTheDocument()

        // Click outside the popout
        act(() => {
            fireEvent.mouseDown(container)
        })
        expect(screen.queryByText(/Popout Content/i)).not.toBeInTheDocument()
    })

    it('closes popout when child element is clicked if closeOnChildrenClick is true', () => {
        render(
            <Popout
                action='Click me'
                closeOnChildrenClick
            >
                <div>Child Element</div>
            </Popout>
        )

        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.getByText(/Child Element/i)).toBeInTheDocument()

        // Click the child element
        act(() => {
            fireEvent.click(screen.getByText(/Child Element/i))
        })
        expect(screen.queryByText(/Child Element/i)).not.toBeInTheDocument()
    })

    it('does not close popout when child element is clicked if closeOnChildrenClick is false', () => {
        render(
            <Popout
                action='Click me'
                closeOnChildrenClick={false}
            >
                <div>Child Element</div>
            </Popout>
        )

        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.getByText(/Child Element/i)).toBeInTheDocument()

        // Click the child element
        act(() => {
            fireEvent.click(screen.getByText(/Child Element/i))
        })
        expect(screen.getByText(/Child Element/i)).toBeInTheDocument() // Содержимое должно оставаться видимым
    })

    it('closes popout when close method is called', () => {
        const ref = createRef<PopoutHandleProps>()

        render(
            <Popout
                ref={ref}
                action='Click me'
            >
                Popout Content
            </Popout>
        )

        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.getByText(/Popout Content/i)).toBeInTheDocument()

        // Close the popout using ref method
        act(() => {
            ref.current?.close()
        })
        expect(screen.queryByText(/Popout Content/i)).not.toBeInTheDocument()
    })
})
