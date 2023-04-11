import React, { useRef, useEffect, useState } from 'react';
import VideoSpinner from './VideoSpinner';

// // We use this method rather than the <video> tag because the <video> tag does not work on safari mobile
// // https://stackoverflow.com/questions/54732340/react-video-loading-in-memory-before-rendering-to-screen

export default function Video({ onPlaying, children, ...props }) {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
    }
  }, []);

  return (
    <>
      {loading && <VideoSpinner />}
      <video
        ref={videoRef}
        {...props}
        onPlaying={() => {
          setLoading(false);
          if (onPlaying) {
            onPlaying();
          }
        }}
      >
        {children}
      </video>
    </>
  );
}
