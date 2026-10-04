/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-docs',
        '@chromatic-com/storybook',
        '@storybook/addon-themes'
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {}
    },

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
}
export default config
