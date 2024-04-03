import { useState } from 'react'
// import Content from './UseEffect'
// import Content from './UseLayoutEffect'
// import Content from './UseRef'
import Content from './useCallback'

function App() {
    const [show, setShow] = useState(false)
    return (
        <div className="App">
            <div style={{paddingLeft: 20}}>
                <button onClick={() => setShow(!show)}>Toggle</button>
                {show && <Content />}
            </div>
        </div>
    );
}

export default App;
