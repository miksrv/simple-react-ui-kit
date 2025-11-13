import React, { useEffect, useRef, useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import {
    Button,
    Checkbox,
    DatePicker,
    Dialog,
    DialogProps,
    Dropdown,
    DropdownOption,
    iconNames,
    Input,
    Message,
    MultiSelect,
    Progress
} from '../../src'

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

export const WithForm: StoryFn = (args) => {
    const [open, setOpen] = useState(true)
    const [progress, setProgress] = useState(40)
    const [selectedDate, setSelectedDate] = useState<string | undefined>()
    const [checked, setChecked] = useState<string[]>([])
    const [dropdownValue, setDropdownValue] = useState<string | undefined>()
    const [selectedOptions, setSelectedOptions] = useState<Array<DropdownOption<string>> | undefined>(undefined)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(Math.floor(Math.random() * 101))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Form Dialog</Button>
            <Dialog
                {...args}
                title={'Form Dialog'}
                open={open}
                onCloseDialog={() => setOpen(false)}
            >
                <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
                    <Message type='info'>Please fill out the form below</Message>
                    <Progress
                        value={progress}
                        style={{ margin: '10px 0' }}
                    />
                    <DatePicker
                        placeholder='Select a date'
                        buttonMode='secondary'
                        datePeriod={[selectedDate, selectedDate]}
                        onDateSelect={setSelectedDate}
                    />
                    <Input
                        label='First Name'
                        placeholder='Enter first name'
                    />
                    <Input
                        label='Last Name'
                        placeholder='Enter last name'
                    />
                    <Checkbox
                        label='Option A'
                        checked={checked.includes('a')}
                        onChange={(e) =>
                            setChecked((val) => (e.target.checked ? [...val, 'a'] : val.filter((i) => i !== 'a')))
                        }
                    />
                    <Checkbox
                        label='Option B'
                        checked={checked.includes('b')}
                        onChange={(e) =>
                            setChecked((val) => (e.target.checked ? [...val, 'b'] : val.filter((i) => i !== 'b')))
                        }
                    />
                    <Checkbox
                        label='Option C'
                        checked={checked.includes('c')}
                        onChange={(e) =>
                            setChecked((val) => (e.target.checked ? [...val, 'c'] : val.filter((i) => i !== 'c')))
                        }
                    />
                    <Dropdown
                        value={dropdownValue}
                        mode={'secondary'}
                        placeholder={'Select an option'}
                        onSelect={(option) => setDropdownValue(option?.key)}
                        options={[
                            { key: '1', value: 'One' },
                            { key: '2', value: 'Two' },
                            { key: '3', value: 'Three' }
                        ]}
                    />
                    <MultiSelect
                        placeholder={'Select multiple options'}
                        value={selectedOptions?.map((option) => option.key) as string[]}
                        onSelect={(options) => setSelectedOptions(options)}
                        options={[
                            { key: 'apple', value: 'Heart Empty Icon', icon: iconNames.HeartEmpty },
                            { key: 'banana', value: 'Simple Camera Icon', icon: iconNames.Camera },
                            { key: 'cherry', value: 'Medal or Award Icon', icon: iconNames.Award }
                        ]}
                    />
                    <Button
                        onClick={() => setOpen(false)}
                        style={{ marginTop: 16 }}
                        size={'large'}
                    >
                        Submit
                    </Button>
                </div>
            </Dialog>
        </>
    )
}
