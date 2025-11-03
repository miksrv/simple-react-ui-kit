import React, { useRef, useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { Button, Dialog, DialogProps } from '../../src'

const meta: Meta<DialogProps> = {
    title: 'Components/Dialog',
    component: Dialog
}

export default meta

const Template: StoryFn<DialogProps> = (args) => {
    const [isGlobalOpen, setIsGlobalOpen] = useState(false)
    const [isInlineOpen, setIsInlineOpen] = useState(false)
    const parentRef = useRef<HTMLDivElement | null>(null)

    return (
        <div
            ref={parentRef}
            id={'dialog-parent'}
            style={{ position: 'relative', height: 300 }}
        >
            <div style={{ display: 'flex', gap: 10 }}>
                <Button onClick={() => setIsGlobalOpen(true)}>Open Global Dialog</Button>
                <Button onClick={() => setIsInlineOpen(true)}>Open Inline Dialog</Button>
            </div>

            <Dialog
                {...args}
                title={'Dialog'}
                open={isInlineOpen}
                parentRef={parentRef}
                onCloseDialog={() => setIsInlineOpen(false)}
            >
                <p>This is the inline dialog content!</p>
                <Button onClick={() => setIsInlineOpen(false)}>Close Dialog</Button>
            </Dialog>

            <Dialog
                {...args}
                title={'Global Dialog'}
                open={isGlobalOpen}
                showBackLink={false}
                onCloseDialog={() => setIsGlobalOpen(false)}
            >
                <p>This is the global dialog content!</p>
            </Dialog>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    contentHeight: '200px',
    maxWidth: '400px',
    backLinkCaption: 'Back',
    showOverlay: true,
    showBackLink: true,
    showCloseButton: true,
    onBackClick: () => alert('Back clicked!')
}
