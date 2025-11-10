import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|sass|scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup.tsx'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.test.tsx', '!src/**/index.ts', '!src/**/types.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: ['node_modules/(?!(module-to-transform)/)']
}

export default config
