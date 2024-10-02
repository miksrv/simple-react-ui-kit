import React from 'react'

import Icon, { iconNames, IconTypes } from '@/icon'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'Components/Icon',
    component: Icon
} as Meta

export const AllIcons: StoryFn = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {Object.keys(iconNames).map((name) => (
            <div
                key={name}
                style={{ textAlign: 'center' }}
            >
                <Icon
                    name={name as IconTypes}
                    style={{ width: 24, height: 24 }}
                />
            </div>
        ))}
    </div>
)
