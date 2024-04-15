import React from 'react'
import Showvideogrid from '../../components/ShowVideoGrid/showvideogrid';
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';
//import vid2 from '../../components/Videos/video.mp4';
import Describchannel from './describchannel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Channel({setEditcreatechanelbtn,setVidUploadPage}) {
  const {Cid}=useParams();
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();


  return (
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">
          <Describchannel Cid={Cid} setVidUploadPage={setVidUploadPage} setEditcreatechanelbtn={setEditcreatechanelbtn}/>
          <Showvideogrid vids={vids}/>
        </div>
    </div>
  )
}

export default Channel;