import { useState } from "react"
import Render from "./Const"

function Content() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    // Re-render 'Render' with each click -> use React.memo
    return (
        <div>
            <Render />
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}

export default Content