import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    },
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.test.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: ['node_modules/(?!(module-to-transform)/)']
}

export default config
