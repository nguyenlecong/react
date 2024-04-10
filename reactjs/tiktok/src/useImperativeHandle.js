import { useRef } from 'react'

import Video from './Video'


function Content() {
    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <Video ref={videoRef} />
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
}

export default Content