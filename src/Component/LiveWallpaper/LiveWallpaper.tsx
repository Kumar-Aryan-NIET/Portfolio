import React from 'react'
import './LiveWallpaper.css'
import vedio from '../../assets/demon-slayer.mp4';
import vedio2 from '../../assets/soul-leveling.mp4';
import vedio3 from '../../assets/solo-leveling2.mp4';

const LiveWallpaper = () => {
  return (
    <div className='vedio-container'>
        <video className='video-live' src={vedio} autoPlay loop muted />
    </div>
  )
}

export default LiveWallpaper