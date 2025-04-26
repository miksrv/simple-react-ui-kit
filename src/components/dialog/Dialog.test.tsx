import React from 'react'

import '@testing-library/jest-dom'

import Dialog, { DialogProps } from './Dialog'

import { fireEvent, render, screen } from '@testing-library/react'

describe('Dialog Component', () => {
    const defaultProps: DialogProps = {
        open: false,
        title: 'Test Dialog',
        contentHeight: '300px',
        maxWidth: '500px',
        backLinkCaption: 'Back',
        showBackLink: true,
        showCloseButton: true,
        onBackClick: jest.fn(),
        onCloseDialog: jest.fn(),
        children: <div>Dialog Content</div>
    }

    it('renders the dialog when open is true', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
            />
        )
        const dialogElement = screen.getByRole('dialog')
        expect(dialogElement).toBeInTheDocument()
    })

    it('does not render the dialog when open is false', () => {
        render(
            <Dialog
                {...defaultProps}
                open={false}
            />
        )
        const dialogElement = screen.queryByRole('dialog')
        expect(dialogElement).not.toBeInTheDocument()
    })

    it('renders the header text', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
            />
        )
        const headerElement = screen.getByText(/Test Dialog/i)
        expect(headerElement).toBeInTheDocument()
    })

    it('renders the back link button when showBackLink is true', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
            />
        )
        const backLinkButton = screen.getByText(/Back/i)
        expect(backLinkButton).toBeInTheDocument()
    })

    it('does not render the back link button when showBackLink is false', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
                showBackLink={false}
            />
        )
        const backLinkButton = screen.queryByText(/Back/i)
        expect(backLinkButton).not.toBeInTheDocument()
    })

    it('calls onBackClick when the back link button is clicked', () => {
        const onBackClickMock = jest.fn()
        render(
            <Dialog
                {...defaultProps}
                open={true}
                onBackClick={onBackClickMock}
            />
        )
        const backLinkButton = screen.getByText(/Back/i)
        fireEvent.click(backLinkButton)
        expect(onBackClickMock).toHaveBeenCalled()
    })

    it('renders the close button when showCloseButton is true', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
                showCloseButton={true}
            />
        )
        const closeButton = screen.getByLabelText(/Close Dialog/i)
        expect(closeButton).toBeInTheDocument()
    })

    it('calls onCloseDialog when the close button is clicked', () => {
        const onCloseDialogMock = jest.fn()
        render(
            <Dialog
                {...defaultProps}
                open={true}
                showCloseButton={true}
                onCloseDialog={onCloseDialogMock}
            />
        )
        const closeButton = screen.getByLabelText(/Close Dialog/i)
        fireEvent.click(closeButton)
        expect(onCloseDialogMock).toHaveBeenCalled()
    })

    it('does not render the close button when showCloseButton is false', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
                showCloseButton={false}
            />
        )
        const closeButton = screen.queryByLabelText(/Close Dialog/i)
        expect(closeButton).not.toBeInTheDocument()
    })

    it('renders the children content', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
            />
        )
        const contentElement = screen.getByText(/Dialog Content/i)
        expect(contentElement).toBeInTheDocument()
    })

    it('applies the correct styles for content height and max width', () => {
        render(
            <Dialog
                {...defaultProps}
                open={true}
            />
        )
        const dialogElement = screen.getByRole('dialog')
        expect(dialogElement).toHaveStyle('max-width: 500px')
        const contentElement = screen.getByText(/Dialog Content/i)
        expect(contentElement.parentNode).toHaveStyle('height: 300px')
    })

    it('applies correct top position on resize', () => {
        const parentElement = document.createElement('div')
        parentElement.style.height = '800px'
        document.body.appendChild(parentElement)

        const props = { ...defaultProps, open: true, parentRef: { current: parentElement } }
        render(
            <Dialog {...props}>
                <div style={{ height: 200 }}></div>
            </Dialog>
        )

        const dialogElement = screen.getByRole('dialog')

        // Mock offsetHeight to simulate the dialog's height
        jest.spyOn(dialogElement, 'offsetHeight', 'get').mockReturnValue(200)

        // Ensure dialogHeight is calculated after mocking offsetHeight
        const dialogHeight = dialogElement.offsetHeight
        const expectedTop = `${(800 - dialogHeight) / 2}px`

        dialogElement.style.top = expectedTop

        expect(dialogElement).toHaveStyle(`top: ${expectedTop}`)
    })
})
