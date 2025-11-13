import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Icon, iconNames, IconTypes } from '../../src'

const meta: Meta = {
    title: 'Icon',
    component: Icon,
    argTypes: { fill: { control: 'color' } } // Color control for changing the icon's fill
}

export default meta

export const AllIcons: StoryFn = ({ fill }) => {
    const [search, setSearch] = useState('') // State for handling search input
    const [copied, setCopied] = useState<string | null>(null) // State to track the last copied icon name

    // Function to copy icon name to clipboard
    const copyToClipboard = async (name: string) => {
        await navigator.clipboard.writeText(name) // Copy the icon name
        setCopied(name) // Update the state with the copied icon name
        setTimeout(() => setCopied(null), 2000) // Clear the copied state after 2 seconds
    }

    // Filter the icons based on the search input
    const filteredIcons = Object.keys(iconNames).filter((name) => name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            {/* Search input */}
            <div style={{ marginBottom: '16px' }}>
                <input
                    type='text'
                    placeholder='Search icons...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        padding: '8px',
                        fontSize: '14px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                        maxWidth: '300px',
                        marginBottom: '20px'
                    }}
                />
            </div>

            {/* Display all filtered icons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {filteredIcons.length > 0 ? (
                    filteredIcons.map((name) => (
                        <div
                            key={name}
                            style={{
                                width: '12%',
                                textAlign: 'center',
                                cursor: 'pointer' // Make icons clickable
                            }}
                            onClick={() => copyToClipboard(name)} // Copy the icon name when clicked
                        >
                            {/* Icon component */}
                            <Icon
                                name={name as IconTypes}
                                style={{ width: 24, height: 24 }}
                                fill={fill}
                            />
                            {/* Display the name of the icon */}
                            <div style={{ marginTop: '8px', fontSize: '11px', color: '#555' }}>{name}</div>
                            {/* Show "Copied!" message when an icon is clicked */}
                            {copied === name && <div style={{ fontSize: '10px', color: 'green' }}>Copied!</div>}
                        </div>
                    ))
                ) : (
                    <p>No icons found</p>
                )}
            </div>
        </div>
    )
}
