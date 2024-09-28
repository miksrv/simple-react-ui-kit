import React from 'react'
import {createRoot} from 'react-dom/client'

import {Button} from '@/index'

const App = () => {
    return (
        <div>
            Мой тестовый
            <Button>2222</Button>
        </div>
    )
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<React.StrictMode><App /></React.StrictMode>)
