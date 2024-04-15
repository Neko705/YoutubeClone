import React from 'react'
//import vid2 from '../../components/Videos/video.mp4';
import Showvideo from '../ShowVideo/showvideo';
import { useSelector } from 'react-redux';

function Showvideolist({videoId}) {
  const vids=useSelector(s=>s.videoReducer)
  console.log(vids)
    /*const vids = [
        {
          _id:1,
          video_src: vid2,
          Chanel:"62bafe675cea35a6c30685f",
          title:"video 1",
          uploder:"abc",
          discription:'discription of video-1'
        },
        {
          _id:2,
          video_src: vid2,
          Chanel:"add",
          title:"video 2",
          uploder:"abc",
          discription:'discription of video-2'
        },
        {
          _id:3,
          video_src: vid2,
          Chanel:"cdd",
          title:"video 3",
          uploder:"abc",
          discription:'discription of video-3'
        },
        {
          _id:4,
          video_src: vid2,
          Chanel:"cdd",
          title:"video 4",
          uploder:"abc",
          discription:'discription of video-4'
        }
      ];*/
  return (
    <div className='container_showvideogrid'>
        {
            vids?.data?.filter(q=>q._id===videoId).map(vi=>
            {
                return(
                    <div key={vi._id} className="video_box">
                        <Showvideo vid={vi}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Showvideolist;