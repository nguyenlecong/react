import { useRef, forwardRef, useImperativeHandle } from 'react'

import video1 from './videos/video-1.mp4'


function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            // ref={ref}
            ref={videoRef}
            src={video1}
            width={200}
            // controls
        />
    )
}

export default forwardRef(Video)