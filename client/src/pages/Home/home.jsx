import React from 'react'
import './home.css'
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';
import Showvideogrid from '../../components/ShowVideoGrid/showvideogrid';
//import vid2 from '../../components/Videos/video.mp4';
import { useSelector } from 'react-redux';

function Home() {
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  //console.log(videosFile)
//  const vids = [
//    {
//      _id:1,
//      video_src: vid2,
//      Chanel:"62bafe675cea35a6c30685f",
//      title:"video 1",
//      uploder:"abc",
//      discription:'discription of video-1'
//    },
//    {
//      _id:2,
//      video_src: vid2,
//      Chanel:"add",
//      title:"video 2",
//      uploder:"abc",
//      discription:'discription of video-2'
//    },
//    {
//      _id:3,
//      video_src: vid2,
//      Chanel:"cdd",
//      title:"video 3",
//      uploder:"abc",
//      discription:'discription of video-3'
//    },
//    {
//      _id:4,
//      video_src: vid2,
//      Chanel:"cdd",
//      title:"video 4",
//      uploder:"abc",
//      discription:'discription of video-4'
//    }
//  ];
  const NavList=[
    'All',
    'Python',
    'Anime',
    'Web dev',
    'Movies',
    'git',
    'Trailer',
    'Animation',
    'Gameplay',
    'Gaming'
  ]
  return (
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">
          <div className="navigation_home">
            {
              NavList.map(m=>{
                return(
                <p key={m} className="btn_nav_home">
                  {m}
                </p>)
              })
            }
          </div>
          <Showvideogrid vids={vids}/>
        </div>
    </div>
  )
}

export default Home;