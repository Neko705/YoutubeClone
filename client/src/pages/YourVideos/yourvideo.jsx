import React from 'react'
import './Yourvideos.css'
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';
import Showvideogrid from '../../components/ShowVideoGrid/showvideogrid';
import { useSelector } from 'react-redux';
//import vid2 from '../../components/Videos/video.mp4';


function Yourvideos() {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
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
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">
          <div className="container_yourvideo">
          <h1>Your Videos</h1>
          {
            CurrentUser ?(<>
          <Showvideogrid vids={vids} />
            </>):<>
            <h3>Plz Login to see Your uploded video list</h3></>
          }
        </div>
    </div>
  </div>
  )
}

export default Yourvideos;