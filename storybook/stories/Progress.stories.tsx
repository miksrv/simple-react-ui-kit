import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Progress, type ProgressProps } from '../../src'

const meta: Meta<ProgressProps> = {
    title: 'Components/Progress',
    component: Progress,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A horizontal progress bar that visualises a completion percentage. Supports four semantic colour themes, a configurable bar height, and accepts standard `HTMLDivElement` attributes for layout control.'
            }
        }
    },
    argTypes: {
        value: {
            control: { type: 'number', min: 0, max: 100 },
            description: 'Current progress value as a percentage (0–100)',
            table: { type: { summary: 'number' } }
        },
        color: {
            control: 'select',
            options: ['main', 'red', 'orange', 'green'],
            description: 'Colour theme applied to the filled portion of the bar',
            table: {
                defaultValue: { summary: 'main' },
                type: { summary: '"main" | "red" | "orange" | "green"' }
            }
        },
        height: {
            control: { type: 'number', min: 1, max: 24 },
            description: 'Height of the progress bar in pixels',
            table: { type: { summary: 'number' } }
        },
        className: {
            control: 'text',
            description: 'Additional CSS class names for custom styling'
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { value: 50, color: 'main' },
    parameters: {
        docs: {
            description: {
                story: 'Default progress bar at 50%. Use the Controls panel to adjust the value, colour, and height.'
            }
        }
    }
}

export const Colors: Story = {
    name: 'Color Themes',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
            {(
                [
                    { color: 'main', value: 65, label: 'Main' },
                    { color: 'green', value: 80, label: 'Green' },
                    { color: 'orange', value: 45, label: 'Orange' },
                    { color: 'red', value: 25, label: 'Red' }
                ] as const
            ).map(({ color, value, label }) => (
                <div key={color}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                        <span>{label}</span>
                        <span>{value}%</span>
                    </div>
                    <Progress
                        value={value}
                        color={color}
                    />
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'All four colour themes stacked with labelled values.' }
        }
    }
}

export const CustomHeight: Story = {
    name: 'Custom Height',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
            <Progress
                value={60}
                height={3}
            />
            <Progress
                value={60}
                height={6}
            />
            <Progress
                value={60}
                height={10}
            />
            <Progress
                value={60}
                height={16}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'The same value rendered at different `height` settings (3px, 6px, 10px, 16px).' }
        }
    }
}

export const AllStates: Story = {
    name: 'All States (0% to 100%)',
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
            {[0, 25, 50, 75, 100].map((value) => (
                <div key={value}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                        <span style={{ color: value === 0 ? '#999' : value === 100 ? '#16a34a' : undefined }}>
                            {value === 0 ? 'Not started' : value === 100 ? 'Complete' : 'In progress'}
                        </span>
                        <span>{value}%</span>
                    </div>
                    <Progress
                        value={value}
                        color={value === 100 ? 'green' : value === 0 ? 'main' : 'main'}
                    />
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'Progress bar at five milestone values: 0%, 25%, 50%, 75%, and 100%.' }
        }
    }
}
