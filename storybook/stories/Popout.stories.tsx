import React, { useRef } from 'react'

import { Button, Popout, PopoutProps } from '../../src'

import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<PopoutProps> = {
    title: 'Components/Popout',
    component: Popout
}

export default meta

const Template: StoryFn<PopoutProps> = (args) => {
    const popoutRef = useRef<any>(null)

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
    action: 'Open Popout',
    mode: 'secondary',
    position: 'left',
    className: 'custom-popout'
}
