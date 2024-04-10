import { useContext } from 'react'

import Content from './Content'
import { ThemeContext } from './ThemeContext'

import './App.css'

// Theme: Dark / Light

// Context
// CompA => CompB => Comp C
// CompA => CompC ?

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
    const context = useContext(ThemeContext)

    return (
        <div>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            {/* <Content theme={theme}/> */}
            <Content />
        </div>
    )
}

export default App