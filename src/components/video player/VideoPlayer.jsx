import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/urex.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className={`video-player ${playState?'':'hide'}`}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer