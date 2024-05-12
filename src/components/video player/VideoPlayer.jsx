import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/urex.mp4'

const VideoPlayer = () => {
  return (
    <div className='video-player'>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer