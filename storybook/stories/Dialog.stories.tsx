import React, { useRef, useState } from 'react'

import { Button, Dialog, DialogProps } from '../../src'

import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<DialogProps> = {
    title: 'Components/Dialog',
    component: Dialog
}

export default meta

const Template: StoryFn<DialogProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef<HTMLDivElement | null>(null)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    return (
        <div
            ref={parentRef}
            style={{ position: 'relative', height: 300 }}
        >
            <Button onClick={handleOpen}>Open Dialog</Button>
            <Dialog
                {...args}
                open={isOpen}
                parentRef={parentRef}
                onCloseDialog={handleClose}
            >
                <p>This is the dialog content!</p>
                <Button onClick={handleClose}>Close Dialog</Button>
            </Dialog>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    title: 'Dialog Header',
    contentHeight: '200px',
    maxWidth: '400px',
    backLinkCaption: 'Back',
    showBackLink: true,
    showCloseButton: true,
    onBackClick: () => alert('Back clicked!')
}
