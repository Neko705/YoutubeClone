import React from 'react'
import {Link} from 'react-router-dom'
import './showvideo.css'
import moment from 'moment'

function Showvideo({vid}) {
  return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
        <video src={`https://myyoutubeclone.onrender.com${vid.filePath}`}
        className='video_showvideo'/>
    </Link>
    <div className='video_discription'>
      <div className="channel_logo_app">
        <div className="fstchar_logo_app">
          <>{vid?.uploder?.charAt(0).toUpperCase()}</>
        </div>
      </div>
      <div className="video_details">
        <p className="title_vid_showvideo">{vid?.videoTitle}</p>
        <pre className='vid_view_uplodetime'>{vid?.Uploder}</pre>
        <pre className='vid_view_uplodetime'>{vid?.Views} views
        <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
        </pre>
      </div>
    </div>
    </>
  )
}

export default Showvideo;
