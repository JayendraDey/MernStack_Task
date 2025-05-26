import React, { useRef, useEffect } from "react";

const URL = "http://localhost:3900/";


const VideoPlay = ({ videoId ,setSelectedVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      
      videoRef.current.play();
      
      
    }
  }, [videoId]);

  return (
   
    <video
      ref={videoRef}
      controls
      autoPlay
      className="video-player"
      poster={`https://via.placeholder.com/640x360.png?text=${encodeURIComponent(
        videoId
      )}`}
    >
      <source src={`${URL}videos/${videoId}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlay;