import { memo } from 'react'

function Render() {
    console.log('re-render')
    
    return (
        <h2>Hello</h2>
    )
}

export default memo(Render)