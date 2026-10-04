import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Badge, Button, Checkbox, Container, Input, Message, Progress, Select, Table, TextArea } from '../../src'

const meta: Meta = {
    title: 'Foundations/Themes',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'The kit ships a light and a dark colour set in `theme.css`. Switch the whole page with ' +
                    '`<html data-theme="dark">`, or put `data-theme="dark"` on any element to make only that ' +
                    'subtree dark. Only colours change between themes; sizes, radii and motion are shared. ' +
                    'The toolbar switcher sets the attribute on `<html>`; the stories below force a theme on a wrapper.'
            }
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

const options = [
    { key: 'design', value: 'Design' },
    { key: 'dev', value: 'Development' },
    { key: 'qa', value: 'QA' }
]

const rows = [
    { id: 1, name: 'Monument of Glory', category: 'Monument', status: 'Published' },
    { id: 2, name: 'Zhiguli Brewery', category: 'Architecture', status: 'Draft' }
]

/** A representative slice of the kit, used by both panels below. */
const Sample: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['design'])
    const [checked, setChecked] = useState(true)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Container
                title='Edit place'
                action={
                    <Button
                        size='small'
                        mode='link'
                        icon='Close'
                    />
                }
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Input
                        label='Title'
                        required
                        placeholder='Place name'
                        defaultValue='Monument of Glory'
                    />
                    <Select<string>
                        label='Tags'
                        multiple
                        searchable
                        placeholder='Pick tags'
                        options={options}
                        value={tags}
                        onSelect={(selected) => setTags(selected?.map((o) => o.key) ?? [])}
                    />
                    <TextArea
                        label='Description'
                        placeholder='A few words about the place'
                        rows={3}
                    />
                    <Input
                        label='Email'
                        error='Please enter a valid email address'
                        defaultValue='not-an-email'
                    />
                    <Checkbox
                        label='Publish immediately'
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                    />
                    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
                        <Button
                            mode='outline'
                            label='Cancel'
                        />
                        <Button
                            mode='secondary'
                            label='Preview'
                        />
                        <Button
                            mode='primary'
                            label='Save'
                        />
                    </div>
                </div>
            </Container>

            <Message
                type='success'
                title='Saved'
            >
                All changes were saved.
            </Message>

            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <Badge label='Monument' />
                <Badge
                    label='Removable'
                    onClickRemove={() => undefined}
                />
                <Badge
                    label='Small'
                    size='small'
                />
            </div>

            <Progress
                value={64}
                color='main'
            />

            <Container>
                <Table
                    size='small'
                    columns={[
                        { header: 'Name', accessor: 'name', isSortable: true },
                        { header: 'Category', accessor: 'category' },
                        { header: 'Status', accessor: 'status' }
                    ]}
                    data={rows}
                />
            </Container>
        </div>
    )
}

/** Paints a panel with its own theme: the attribute scopes the dark tokens to this subtree. */
const Panel: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => (
    <div
        data-theme={theme}
        style={{
            flex: 1,
            minWidth: 320,
            padding: 'var(--space-6)',
            background: 'var(--body-background)',
            color: 'var(--text-color-primary)',
            fontFamily: 'var(--font-family)',
            fontSize: 'var(--font-size)',
            lineHeight: 'var(--line-height)'
        }}
    >
        <div
            style={{
                marginBottom: 'var(--space-4)',
                fontSize: 'var(--font-size-small)',
                fontWeight: 500,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--text-color-secondary)'
            }}
        >
            data-theme=&quot;{theme}&quot;
        </div>
        <Sample />
    </div>
)

export const SideBySide: Story = {
    name: 'Light and dark side by side',
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh' }}>
            <Panel theme='light' />
            <Panel theme='dark' />
        </div>
    )
}

export const Dark: Story = {
    name: 'Dark theme',
    parameters: {
        themes: { themeOverride: 'dark' }
    },
    render: () => (
        <div style={{ maxWidth: 640, margin: '0 auto', padding: 'var(--space-6)' }}>
            <Sample />
        </div>
    )
}

export const Light: Story = {
    name: 'Light theme',
    parameters: {
        themes: { themeOverride: 'light' }
    },
    render: () => (
        <div style={{ maxWidth: 640, margin: '0 auto', padding: 'var(--space-6)' }}>
            <Sample />
        </div>
    )
}
