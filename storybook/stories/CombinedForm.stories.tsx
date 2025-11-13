import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button, Checkbox, Container, Input, Message, Progress, Select, SelectOptionType, Spinner } from '../../src'

const meta: Meta = {
    title: 'Examples/Registration Form',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'Demonstration of all UI kit components in a real registration form. Shows interaction, validation, loading, portals, and styling.'
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
    { key: 'jp', value: 'Japan', emoji: '🇯🇵' }
]

const interests = [
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
    const [, setProgress] = useState(0)
    const [showSuccess, setShowSuccess] = useState(false)

    const validate = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name) {
            newErrors.name = 'Name is required'
        }
        if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email'
        }
        if (!formData.country) {
            newErrors.country = 'Select a country'
        }
        if (formData.interests.length === 0) {
            newErrors.interests = 'Select at least one interest'
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password too short'
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!validate()) {
            return
        }

        setLoading(true)
        setProgress(0)

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setLoading(false)
                    setShowSuccess(true)
                    setTimeout(() => setShowSuccess(false), 4000)
                    return 100
                }
                return prev + 10
            })
        }, 200)
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

    const totalFields = 7
    const formProgress = Math.round((filledFields / totalFields) * 100)

    return (
        <Container
            title='User Registration'
            style={{ maxWidth: 600 }}
            header={
                <div>
                    <div style={{ fontSize: 12, marginBottom: 4 }}>Complete your profile</div>
                    <Progress
                        value={formProgress}
                        height={4}
                        color='main'
                    />
                </div>
            }
            footer={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>
                        {filledFields} of {totalFields} fields filled
                    </span>
                    <Button
                        mode='primary'
                        onClick={handleSubmit}
                        loading={loading}
                    >
                        Submit Registration
                    </Button>
                </div>
            }
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {showSuccess && (
                    <Message
                        type='success'
                        title='Success!'
                    >
                        Your account has been created.
                    </Message>
                )}

                {/* Name */}
                <Input
                    required
                    label='Full Name'
                    placeholder='John Doe'
                    value={formData.name}
                    disabled={loading}
                    error={errors.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                {/* Email */}
                <Input
                    required
                    label='Email Address'
                    type='email'
                    placeholder='john@example.com'
                    disabled={loading}
                    value={formData.email}
                    error={errors.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                {/* Country Select */}
                <Select<string>
                    searchable={true}
                    clearable={true}
                    multiple={false}
                    label='Country'
                    options={countries}
                    value={formData.country}
                    placeholder='Select your country'
                    disabled={loading}
                    error={errors.country}
                    onSelect={(opt) => setFormData({ ...formData, country: opt?.[0]?.key || '' })}
                />

                {/* Interests Select */}
                <Select<string>
                    multiple={true}
                    closeOnSelect={false}
                    label='Interests'
                    placeholder='Choose interests'
                    notFoundCaption='No interests found'
                    options={interests}
                    value={formData.interests}
                    error={errors.interests}
                    disabled={loading}
                    onSelect={(opts) =>
                        setFormData({ ...formData, interests: opts?.map((option) => option.key) || [] })
                    }
                />

                {/* Password */}
                <Input
                    required
                    label='Password'
                    type='password'
                    placeholder='••••••••'
                    value={formData.password}
                    disabled={loading}
                    error={errors.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                {/* Confirm Password */}
                <Input
                    required
                    label='Confirm Password'
                    type='password'
                    placeholder='••••••••'
                    value={formData.confirmPassword}
                    disabled={loading}
                    error={errors.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />

                {/* Newsletter */}
                <Checkbox
                    label='Subscribe to newsletter'
                    checked={formData.newsletter}
                    disabled={loading}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                />

                {/* Loading State Example */}
                {loading && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#4B5563' }}>
                        <Spinner style={{ width: 16, height: 16 }} />
                        <span>Creating your account...</span>
                    </div>
                )}
            </div>
        </Container>
    )
}

export const RegistrationForm: Story = {
    render: () => (
        <div style={{ width: 600 }}>
            <CombinedForm />
        </div>
    )
}
