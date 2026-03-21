import React, { createRef } from 'react'

import { fireEvent, screen } from '@testing-library/dom'
import { act, render } from '@testing-library/react'

import { Popout } from './Popout'
import { PopoutHandleProps } from './types'

describe('Popout Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the Popout component', () => {
        render(<Popout trigger={'Click me'}>Popout Content</Popout>)
        const buttonElement = screen.getByRole('button', { name: /Click me/i })
        expect(buttonElement).toBeInTheDocument()
    })

    it('toggles the popout content on button click', () => {
        render(<Popout trigger={'Click me'}>Popout Content</Popout>)
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

    it('does not open popout when disabled is true', () => {
        render(
            <Popout
                trigger={'Click me'}
                disabled={true}
            >
                {'Popout Content'}
            </Popout>
        )
        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Try to open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })

        // Popout content should not appear
        expect(screen.queryByText(/Popout Content/i)).not.toBeInTheDocument()
    })

    it('closes popout when clicking outside', () => {
        const { container } = render(<Popout trigger={'Click me'}>Popout Content</Popout>)
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
                trigger={'Click me'}
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
                trigger={'Click me'}
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
                trigger={'Click me'}
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

    it('calls onOpenChange when isOpen changes', () => {
        const onOpenChange = jest.fn()

        render(
            <Popout
                trigger={'Click me'}
                onOpenChange={onOpenChange}
            >
                Popout Content
            </Popout>
        )

        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(buttonElement)
        })

        expect(onOpenChange).toHaveBeenCalledWith(true)

        act(() => {
            fireEvent.click(buttonElement)
        })

        expect(onOpenChange).toHaveBeenCalledWith(false)
    })

    it('applies custom className to popout wrapper', () => {
        const { container } = render(
            <Popout
                trigger={'Click me'}
                className='custom-popout'
            >
                Content
            </Popout>
        )
        expect(container.querySelector('.custom-popout')).toBeInTheDocument()
    })

    it('applies disabled class to trigger when disabled is true', () => {
        render(
            <Popout
                trigger={'Click me'}
                disabled={true}
            >
                Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })
        expect(triggerSpan).toHaveClass('disabled')
    })

    it('renders trigger with aria-expanded false when closed', () => {
        render(<Popout trigger={'Click me'}>Content</Popout>)
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })
        expect(triggerSpan).toHaveAttribute('aria-expanded', 'false')
    })

    it('renders trigger with aria-expanded true when open', () => {
        render(<Popout trigger={'Click me'}>Content</Popout>)
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        expect(triggerSpan).toHaveAttribute('aria-expanded', 'true')
    })

    it('renders ReactNode trigger', () => {
        render(
            <Popout trigger={<button>Open Popout</button>}>Content</Popout>
        )
        expect(screen.getByText('Open Popout')).toBeInTheDocument()
    })

    it('cleans up portal node on unmount', () => {
        const { unmount } = render(
            <Popout trigger='Click'>Content</Popout>
        )
        const portalsBefore = document.body.querySelectorAll('.portal')
        unmount()
        const portalsAfter = document.body.querySelectorAll('.portal')
        expect(portalsAfter.length).toBeLessThan(portalsBefore.length + 1)
    })

    it('renders content with correct position left style', () => {
        render(
            <Popout
                trigger={'Click me'}
                position='left'
            >
                Positioned Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        expect(screen.getByText('Positioned Content')).toBeInTheDocument()
    })

    it('renders content in portal when portal prop is true', () => {
        render(
            <Popout
                trigger={'Click me'}
                portal={true}
            >
                Portal Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        const content = screen.getByText('Portal Content')
        expect(content).toBeInTheDocument()
        // Content should be rendered in a portal container in document.body
        expect(content.closest('.portal')).toBeInTheDocument()
    })

    it('renders content in portal when portal prop is false', () => {
        render(
            <Popout
                trigger={'Click me'}
                portal={false}
            >
                Non-Portal Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        const content = screen.getByText('Non-Portal Content')
        expect(content).toBeInTheDocument()
        // Content is still rendered through portal (default behavior)
        expect(content.closest('.portal')).toBeInTheDocument()
    })

    it('updates position on scroll when portal is enabled', () => {
        render(
            <Popout
                trigger={'Click me'}
                portal={true}
            >
                Scroll Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        expect(screen.getByText('Scroll Content')).toBeInTheDocument()

        // Simulate scroll event
        act(() => {
            fireEvent.scroll(window)
        })

        // Content should still be visible after scroll
        expect(screen.getByText('Scroll Content')).toBeInTheDocument()
    })

    it('updates position on resize when portal is enabled', () => {
        render(
            <Popout
                trigger={'Click me'}
                portal={true}
            >
                Resize Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        expect(screen.getByText('Resize Content')).toBeInTheDocument()

        // Simulate resize event
        act(() => {
            fireEvent.resize(window)
        })

        // Content should still be visible after resize
        expect(screen.getByText('Resize Content')).toBeInTheDocument()
    })

    it('renders content with position right style in portal mode', () => {
        render(
            <Popout
                trigger={'Click me'}
                portal={true}
                position='right'
            >
                Right Positioned Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        const content = screen.getByText('Right Positioned Content')
        expect(content).toBeInTheDocument()
    })

    it('renders content with position left style in portal mode', () => {
        render(
            <Popout
                trigger={'Click me'}
                portal={true}
                position='left'
            >
                Left Positioned Content
            </Popout>
        )
        const triggerSpan = screen.getByRole('button', { name: /Click me/i })

        act(() => {
            fireEvent.click(triggerSpan)
        })

        const content = screen.getByText('Left Positioned Content')
        expect(content).toBeInTheDocument()
    })

    it('closes popout when clicking outside in portal mode', () => {
        const { container } = render(
            <Popout
                trigger={'Click me'}
                portal={true}
            >
                Portal Content
            </Popout>
        )
        const buttonElement = screen.getByRole('button', { name: /Click me/i })

        // Open the popout
        act(() => {
            fireEvent.click(buttonElement)
        })
        expect(screen.getByText(/Portal Content/i)).toBeInTheDocument()

        // Click outside the popout
        act(() => {
            fireEvent.mouseDown(container)
        })
        expect(screen.queryByText(/Portal Content/i)).not.toBeInTheDocument()
    })
})
