import { withThemeByDataAttribute } from '@storybook/addon-themes'

import '../../src/styles/theme.css'
import './preview.css'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },

    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: 'light',
                dark: 'dark'
            },
            defaultTheme: 'light',
            attributeName: 'data-theme',
            parentSelector: 'html'
        })
    ],

    tags: ['autodocs']
}

export default preview
