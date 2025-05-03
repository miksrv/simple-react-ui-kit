import React from 'react'

import { render } from '@testing-library/react'

import Overlay from './Overlay'

import '@testing-library/jest-dom'

describe('Overlay Component', () => {
    const defaultProps = {
        open: false,
        overlayId: 'test-overlay',
        onClose: jest.fn(),
        parentRef: { current: document.createElement('div') }
    }

    it('renders without crashing', () => {
        const { container } = render(<Overlay {...defaultProps} />)
        expect(container).toBeEmptyDOMElement()
    })

    it('creates an overlay element in the parent when open', () => {
        const parentElement = document.createElement('div')
        document.body.appendChild(parentElement)
        const props = { ...defaultProps, open: true, parentRef: { current: parentElement } }
        render(<Overlay {...props} />)
        const overlayElement = parentElement.querySelector('[data-overlay-id="test-overlay"]')
        expect(overlayElement).toBeInTheDocument()
        expect(overlayElement).toHaveClass('displayed')
        expect(overlayElement).not.toHaveClass('noInitialized')
        document.body.removeChild(parentElement)
    })

    it('applies the correct class when open is true', () => {
        const parentElement = document.createElement('div')
        const props = { ...defaultProps, open: true, parentRef: { current: parentElement } }
        render(<Overlay {...props} />)
        const overlayElement = parentElement.querySelector('[data-overlay-id="test-overlay"]')
        expect(overlayElement).toHaveClass('displayed')
    })

    it('applies the correct class when initial state open is false', () => {
        const parentElement = document.createElement('div')
        const props = { ...defaultProps, open: false, parentRef: { current: parentElement } }
        render(<Overlay {...props} />)
        const overlayElement = parentElement.querySelector('[data-overlay-id="test-overlay"]')
        expect(overlayElement).toHaveClass('noInitialized')
        expect(overlayElement).not.toHaveClass('hidden')
    })

    it('calls onClose when the overlay is clicked', () => {
        const parentElement = document.createElement('div')
        const props = { ...defaultProps, open: true, parentRef: { current: parentElement } }
        render(<Overlay {...props} />)
        const overlayElement = parentElement.querySelector('[data-overlay-id="test-overlay"]') as HTMLElement
        overlayElement.click()
        expect(defaultProps.onClose).toHaveBeenCalled()
    })

    it('removes the overlay element on unmount', () => {
        const parentElement = document.createElement('div')
        const props = { ...defaultProps, open: true, parentRef: { current: parentElement } }
        const { unmount } = render(<Overlay {...props} />)
        unmount()
        const overlayElement = parentElement.querySelector('[data-overlay-id="test-overlay"]')
        expect(overlayElement).not.toBeInTheDocument()
    })

    it('uses document.body as the default parent if parentRef is not provided', () => {
        render(
            <Overlay
                {...defaultProps}
                parentRef={undefined}
                open={true}
            />
        )
        const overlayElement = document.body.querySelector('[data-overlay-id="test-overlay"]')
        expect(overlayElement).toBeInTheDocument()
    })
})
