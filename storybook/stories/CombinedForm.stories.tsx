import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import {
    Button,
    Checkbox,
    Container,
    Input,
    Message,
    Progress,
    Select,
    type SelectOptionType,
    Spinner
} from '../../src'

const meta: Meta = {
    title: 'Examples/Registration Form',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A real-world composite example demonstrating how to combine multiple UI kit components into a fully functional registration form. Includes validation, loading states, progress tracking, and success feedback.'
            }
        }
    }
}

export default meta
type Story = StoryObj<typeof meta>

const countries: Array<SelectOptionType<string>> = [
    { key: 'us', value: 'United States', emoji: '🇺🇸' },
    { key: 'ru', value: 'Russia', emoji: '🇷🇺' },
    { key: 'de', value: 'Germany', emoji: '🇩🇪' },
    { key: 'jp', value: 'Japan', emoji: '🇯🇵' },
    { key: 'fr', value: 'France', emoji: '🇫🇷' }
]

const interests: Array<SelectOptionType<string>> = [
    { key: 'tech', value: 'Technology' },
    { key: 'design', value: 'Design' },
    { key: 'music', value: 'Music' },
    { key: 'sports', value: 'Sports' },
    { key: 'travel', value: 'Travel' }
]

const CombinedForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        interests: [] as string[],
        newsletter: false,
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const validate = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email address'
        }
        if (!formData.country) {
            newErrors.country = 'Please select a country'
        }
        if (formData.interests.length === 0) {
            newErrors.interests = 'Select at least one interest'
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = () => {
        if (!validate()) {
            return
        }

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setShowSuccess(true)
            setTimeout(() => setShowSuccess(false), 4000)
        }, 2000)
    }

    const filledFields = Object.values(formData).filter((v) => {
        if (Array.isArray(v)) {
            return v.length > 0
        }
        if (typeof v === 'boolean') {
            return v
        }
        return !!v
    }).length

    const totalFields = Object.keys(formData).length
    const formProgress = Math.round((filledFields / totalFields) * 100)

    return (
        <Container
            title='User Registration'
            style={{ maxWidth: 560 }}
            header={
                <div>
                    <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>
                        {filledFields} of {totalFields} fields completed
                    </div>
                    <Progress
                        value={formProgress}
                        height={4}
                        color='main'
                    />
                </div>
            }
            footer={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: '#6b7280' }}>All fields marked * are required</span>
                    <Button
                        mode='primary'
                        onClick={handleSubmit}
                        loading={loading}
                    >
                        Create Account
                    </Button>
                </div>
            }
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {showSuccess && (
                    <Message
                        type='success'
                        title='Account Created!'
                    >
                        Welcome aboard! You can now sign in with your credentials.
                    </Message>
                )}

                <Input
                    required
                    label='Full Name'
                    placeholder='Jane Doe'
                    value={formData.name}
                    disabled={loading}
                    error={errors.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Input
                    required
                    label='Email Address'
                    type='email'
                    placeholder='jane@example.com'
                    value={formData.email}
                    disabled={loading}
                    error={errors.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <Select<string>
                    searchable
                    clearable
                    multiple={false}
                    label='Country'
                    options={countries}
                    value={formData.country}
                    placeholder='Select your country'
                    disabled={loading}
                    error={errors.country}
                    onSelect={(opt) => setFormData({ ...formData, country: opt?.[0]?.key || '' })}
                />

                <Select<string>
                    multiple
                    closeOnSelect={false}
                    label='Interests'
                    placeholder='Choose at least one interest'
                    options={interests}
                    value={formData.interests}
                    disabled={loading}
                    error={errors.interests}
                    onSelect={(opts) => setFormData({ ...formData, interests: opts?.map((o) => o.key) || [] })}
                />

                <Input
                    required
                    label='Password'
                    type='password'
                    placeholder='Min. 6 characters'
                    value={formData.password}
                    disabled={loading}
                    error={errors.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <Input
                    required
                    label='Confirm Password'
                    type='password'
                    placeholder='Repeat your password'
                    value={formData.confirmPassword}
                    disabled={loading}
                    error={errors.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />

                <Checkbox
                    label='Subscribe to product updates and newsletter'
                    checked={formData.newsletter}
                    disabled={loading}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                />

                {loading && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#6b7280' }}>
                        <Spinner style={{ width: 16, height: 16 }} />
                        <span>Creating your account...</span>
                    </div>
                )}
            </div>
        </Container>
    )
}

export const RegistrationForm: Story = {
    name: 'Registration Form',
    render: () => (
        <div style={{ width: 560 }}>
            <CombinedForm />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'An interactive registration form demonstrating `Container`, `Input`, `Select`, `Checkbox`, `Button`, `Message`, `Progress`, and `Spinner` working together. Fill in the fields and click "Create Account" to see validation, loading state, and success feedback.'
            }
        }
    }
}
