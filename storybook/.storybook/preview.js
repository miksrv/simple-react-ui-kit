import '../../src/styles/global.css'

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            options: {
                light: { name: 'light', value: '#ffffff' },
                dark: { name: 'dark', value: '#1b1b1b' }
            }
        }
    },

    tags: ['autodocs'],

    initialGlobals: {
        backgrounds: {
            value: 'light'
        }
    }
}

export default preview
