import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

// function Paragraph({ theme }) {
function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <p className={context.theme}>
            Text here
        </p>
    )
}

export default Paragraph