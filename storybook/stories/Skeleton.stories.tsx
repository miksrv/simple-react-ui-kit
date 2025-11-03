import type { Meta, StoryFn } from '@storybook/react'

import { Skeleton, SkeletonProps } from '../../src'

const meta: Meta<SkeletonProps> = {
    title: 'Components/Skeleton',
    component: Skeleton
}

export default meta

const Template: StoryFn<SkeletonProps> = (args) => (
    <>
        <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '100px', height: '50px' }}>
                <Skeleton {...args} />
            </div>
            <div style={{ width: '150px', height: '75px' }}>
                <Skeleton {...args} />
            </div>
            <div style={{ width: '200px', height: '100px' }}>
                <Skeleton {...args} />
            </div>
            <div style={{ width: '250px', height: '125px' }}>
                <Skeleton {...args} />
            </div>
        </div>
        <div style={{ width: '300px', height: '24px', marginTop: 20 }}>
            <Skeleton {...args} />
        </div>
        <div style={{ width: '300px', height: '14px', marginTop: 10 }}>
            <Skeleton {...args} />
        </div>
        <div style={{ width: '300px', height: '14px', marginTop: 5 }}>
            <Skeleton {...args} />
        </div>
        <div style={{ width: '300px', height: '14px', marginTop: 5 }}>
            <Skeleton {...args} />
        </div>
        <div style={{ width: '200px', height: '14px', marginTop: 5 }}>
            <Skeleton {...args} />
        </div>
    </>
)

export const MultipleSizes = Template.bind({})
MultipleSizes.args = { className: 'custom-skeleton' }
