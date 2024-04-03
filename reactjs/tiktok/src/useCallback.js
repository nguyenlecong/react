import { useState, useCallback } from "react"
import Render from "./Memo"

function Content() {
    const [count, setCount] = useState(0)

    // const handleIncrease = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    // Re-render 'Render' with each click -> use React.memo
    return (
        <div>
            <Render onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}

export default Content