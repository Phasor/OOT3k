import React, {useRef, useEffect} from "react"

// We use this method rather than the <video> tag because the <video> tag does not work on safari mobile

export default function Video(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <video
            className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={props.video} type="video/mp4"/>
        </video>
    );
}