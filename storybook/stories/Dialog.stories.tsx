import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Button, type DialogProps, Dialog } from '../../src'

const meta: Meta<DialogProps> = {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A portal-based modal dialog. Visibility is controlled externally via the `open` prop. The dialog renders into `document.body` (or a custom `parentRef` element) and optionally shows a backdrop overlay. Press `Escape` or click the overlay to close.'
            }
        }
    },
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Controls whether the dialog is open',
            table: { defaultValue: { summary: 'false' } }
        },
        title: {
            control: 'text',
            description: 'Header text rendered as an `<h2>` inside the dialog'
        },
        maxWidth: {
            control: 'text',
            description: 'CSS max-width of the dialog panel',
            table: { defaultValue: { summary: '500px' } }
        },
        contentHeight: {
            control: 'text',
            description: 'Fixed height of the scrollable content area (e.g. `"300px"`)'
        },
        showOverlay: {
            control: 'boolean',
            description: 'Whether to render a backdrop overlay behind the dialog',
            table: { defaultValue: { summary: 'true' } }
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Renders an ✕ close button in the header',
            table: { defaultValue: { summary: 'false' } }
        },
        showBackLink: {
            control: 'boolean',
            description: 'Renders a ← back link in the header',
            table: { defaultValue: { summary: 'false' } }
        },
        backLinkCaption: {
            control: 'text',
            description: 'Text label for the back link button'
        },
        children: {
            control: false,
            description: 'Content rendered inside the dialog body'
        },
        parentRef: {
            control: false,
            description:
                'Optional React ref to a parent element — the dialog portal mounts inside it instead of `document.body`'
        },
        onCloseDialog: {
            control: false,
            description: 'Callback fired when the dialog should close (overlay click, Escape key, or close button)'
        },
        onBackClick: {
            control: false,
            description: 'Callback fired when the back link button is clicked'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false)
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog
                    {...args}
                    open={open}
                    title='Confirmation'
                    showCloseButton
                    onCloseDialog={() => setOpen(false)}
                >
                    <p>Are you sure you want to proceed with this action?</p>
                    <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                        <Button
                            onClick={() => setOpen(false)}
                            variant='positive'
                        >
                            Confirm
                        </Button>
                        <Button
                            mode='outline'
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </Dialog>
            </>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'A simple confirmation dialog with a close button. Click "Open Dialog" to see it. The `open` state is managed by the parent component — the dialog itself only fires `onCloseDialog`.'
            }
        }
    }
}

export const WithBackLink: Story = {
    name: 'With Back Link',
    render: () => {
        const [open, setOpen] = useState(false)
        const [step, setStep] = useState(1)

        const handleBack = () => setStep((s) => Math.max(1, s - 1))
        const handleNext = () => setStep((s) => s + 1)

        return (
            <>
                <Button
                    onClick={() => {
                        setStep(1)
                        setOpen(true)
                    }}
                >
                    Open Multi-step Dialog
                </Button>
                <Dialog
                    open={open}
                    title={`Step ${step} of 3`}
                    showBackLink={step > 1}
                    backLinkCaption='Back'
                    showCloseButton
                    onBackClick={handleBack}
                    onCloseDialog={() => setOpen(false)}
                >
                    <p>Content for step {step}. Use Back / Next to navigate between steps.</p>
                    <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                        {step < 3 ? (
                            <Button onClick={handleNext}>Next</Button>
                        ) : (
                            <Button
                                onClick={() => setOpen(false)}
                                variant='positive'
                            >
                                Finish
                            </Button>
                        )}
                    </div>
                </Dialog>
            </>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'The `showBackLink` and `onBackClick` props enable multi-step wizard dialogs with a ← back navigation button in the header.'
            }
        }
    }
}

export const CustomDimensions: Story = {
    name: 'Custom Dimensions',
    render: () => {
        const [open, setOpen] = useState(false)
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Wide Dialog</Button>
                <Dialog
                    open={open}
                    title='Wide Dialog'
                    maxWidth='800px'
                    contentHeight='300px'
                    showCloseButton
                    onCloseDialog={() => setOpen(false)}
                >
                    <p>
                        This dialog uses <code>maxWidth="800px"</code> and a fixed <code>contentHeight="300px"</code>.
                        The content area becomes scrollable when its content exceeds the specified height.
                    </p>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <p
                            key={i}
                            style={{ margin: '8px 0', color: '#555' }}
                        >
                            Content line {i + 1}
                        </p>
                    ))}
                </Dialog>
            </>
        )
    },
    parameters: {
        docs: {
            description: {
                story: '`maxWidth` controls the dialog panel width and `contentHeight` sets a fixed height on the scrollable body area.'
            }
        }
    }
}

export const WithoutCloseButton: Story = {
    name: 'Without Close Button',
    render: () => {
        const [open, setOpen] = useState(false)
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog
                    open={open}
                    title='Non-dismissible Dialog'
                    showOverlay={false}
                    onCloseDialog={() => setOpen(false)}
                >
                    <p>
                        This dialog has no close button and no overlay — the user must use the button below to dismiss
                        it.
                    </p>
                    <Button
                        style={{ marginTop: 16 }}
                        onClick={() => setOpen(false)}
                    >
                        Dismiss
                    </Button>
                </Dialog>
            </>
        )
    },
    parameters: {
        docs: {
            description: {
                story: 'When `showCloseButton` and `showOverlay` are both false the dialog can only be dismissed programmatically — useful for mandatory confirmation flows.'
            }
        }
    }
}
