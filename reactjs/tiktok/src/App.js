import { useState } from 'react'
// import Content from './UseEffect'
// import Content from './UseLayoutEffect'
// import Content from './UseRef'
// import Content from './useCallback'
// import Content from './useMemo'
// import Content from './useReducer'
// import Content from './useContext'
// import { ThemeProvider } from "./ThemeContext"
// import Content from './GlobalContext'
import Content from './useImperativeHandle'

function App() {
    const [show, setShow] = useState(false)
    return (
        // <ThemeProvider>
            <div className="App">
                <div style={{paddingLeft: 20}}>
                    <button onClick={() => setShow(!show)}>Toggle</button>
                    {show && <Content />}
                </div>
            </div>
        // </ThemeProvider>
    );
}

export default App;
