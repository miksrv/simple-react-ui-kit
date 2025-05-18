import React, { useRef } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Button, Popout, PopoutHandleProps, PopoutProps } from '../../src'

const meta: Meta<PopoutProps> = {
    title: 'Components/Popout',
    component: Popout
}

export default meta

const Template: StoryFn<PopoutProps> = (args) => {
    const popoutRef = useRef<PopoutHandleProps>(null)

    return (
        <div style={{ position: 'relative', height: 130 }}>
            <Popout
                ref={popoutRef}
                {...args}
            >
                <div style={{ padding: '10px' }}>
                    <p>This is the popout content!</p>
                    <Button onClick={() => alert('Action clicked!')}>Perform Action</Button>
                </div>
            </Popout>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    trigger: 'Open Popout',
    position: 'left',
    className: 'custom-popout'
}
