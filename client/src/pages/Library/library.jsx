import React from 'react'
import './library.css'
import {FaHistory} from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import Whlvideolist from '../../components/WHL/whlvideolist'
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';
//import vid2 from '../../components/Videos/video.mp4';
import { useSelector } from 'react-redux'

function Library() {
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

  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const historyList = useSelector((state) => state.HistoryReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);
  const watchLaterList = useSelector((state) => state.watchLaterReducer);
  return (
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">
          <div className="container_librarypage">
              <h1 className='title_container_librarypage'>
                <b>
                  <FaHistory />
                </b>
                <b>History</b>
              </h1>
              <div className="container_videolist_librarypage">
                <Whlvideolist
                page={'History'}
                CurrentUser={CurrentUser?.result._id}
                videoList={historyList} />
              </div>
          </div>

          <div className="container_librarypage">
              <h1 className='title_container_librarypage'>
                <b>
                  <MdOutlineWatchLater />
                </b>
                <b>Watch later</b>
              </h1>
              <div className="container_videolist_librarypage">
                <Whlvideolist
                page={'Watch later'}
                CurrentUser={CurrentUser?.result._id}
                videoList={watchLaterList} />
              </div>
          </div>

          <div className="container_librarypage">
              <h1 className='title_container_librarypage'>
                <b>
                  <AiOutlineLike />
                </b>
                <b>Like Videos</b>
              </h1>
              <div className="container_videolist_librarypage">
                <Whlvideolist
                page={'Like Videos'}
                CurrentUser={CurrentUser?.result._id}
                videoList={likedVideoList} />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Library;