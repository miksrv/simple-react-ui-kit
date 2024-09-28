import React from 'react'
import { createRoot } from 'react-dom/client'

import {Button} from '@/index'

const App = () => (
    <div>
        <h1>UI Components Demo</h1>
        <Button />
    </div>
)

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)
root.render(<App />)
