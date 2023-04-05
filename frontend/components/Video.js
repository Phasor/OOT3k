import React, {useRef, useEffect, useState} from "react"
import VideoSpinner from "./VideoSpinner";

// We use this method rather than the <video> tag because the <video> tag does not work on safari mobile
// https://stackoverflow.com/questions/54732340/react-video-loading-in-memory-before-rendering-to-screen

export default function Video(props) {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })

    return (
        <>
            { loading && <VideoSpinner /> }
        
            <video
                className={props.className}
                ref={videoRef}
                loop
                autoPlay
                muted
                playsInline
                src={props.video} 
                type="video/mp4"
                onPlaying={() => {
                    // console.log("finished loading") 
                    setLoading(false)
                }}
            /> 

        </>
    );
}