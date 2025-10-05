import { Meta, StoryFn } from '@storybook/react-webpack5'

import { Spinner, SpinnerProps } from '../../src'

const meta: Meta<SpinnerProps> = {
    title: 'Components/Spinner',
    component: Spinner
}

export default meta

const Template: StoryFn<SpinnerProps> = (args) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}
    >
        {/* Spinner with different sizes */}
        <div
            style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}
        >
            <Spinner
                className={args.className}
                style={{
                    width: 30,
                    height: 30
                }}
            />
            <Spinner
                className={args.className}
                style={{
                    width: 50,
                    height: 50
                }}
            />
            <Spinner
                className={args.className}
                style={{
                    width: 70,
                    height: 70
                }}
            />
        </div>

        {/* Spinner on black background */}
        <div
            style={{
                backgroundColor: '#000',
                padding: '20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <Spinner
                className={args.className}
                style={{
                    width: 20,
                    height: 20
                }}
            />
            <span style={{ color: '#fff' }}>Loading...</span>
        </div>

        {/* Spinner on white background */}
        <div
            style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #ddd'
            }}
        >
            <Spinner
                className={args.className}
                style={{
                    width: 20,
                    height: 20
                }}
            />
            <span>Loading...</span>
        </div>
    </div>
)

export const Default = Template.bind({})
Default.args = { className: 'custom-spinner' }
