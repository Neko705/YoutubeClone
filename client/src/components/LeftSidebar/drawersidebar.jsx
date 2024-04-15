import React from 'react'
import './leftsidebar.css'
import {NavLink} from 'react-router-dom';
import { AiFillLike, AiFillPlayCircle, AiOutlineHome } from 'react-icons/ai';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';

function Drawersidebar({toggleDrawer,toggleDrawersidebar}) {
  return (
    <div className='container_drawerleftsidebar' style={toggleDrawersidebar}>
        <div className="container2_drawerleftsidebar">
            <div className="drawer_leftsidebar">
                <NavLink to={'/'} className="sidebar_icon_div">
                    <p>
                        <AiOutlineHome className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Home</div>
                    </p>
                </NavLink>
                <div className="sidebar_icon_div">
                    <p>
                        <SiYoutubeshorts className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Shorts</div>
                    </p>
                </div>
                <div className="sidebar_icon_div">
                    <p>
                        <MdOutlineSubscriptions className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Subscription</div>
                    </p>
                </div>
            </div>
            <div className="librarybtn_leftsidebar">
            <NavLink to={'/library'} className="sidebar_icon_div">
                    <p>
                        <MdOutlineVideoLibrary className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Library</div>
                    </p>
                </NavLink>
                <div className="sidebar_icon_div">
                    <p>
                        <MdOutlineExplore className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Explore</div>
                    </p>
                </div>
                <NavLink to={'/watchhistory'} className="sidebar_icon_div">
                    <p>
                        <FaHistory className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">History</div>
                    </p>
                </NavLink>
                <NavLink to={'/yourvideos'} className="sidebar_icon_div">
                    <p>
                        <AiFillPlayCircle className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Your Videos</div>
                    </p>
                </NavLink>
                <NavLink to={'/watchlater'} className="sidebar_icon_div">
                    <p>
                        <MdOutlineWatchLater className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Watch Later</div>
                    </p>
                </NavLink>
                <NavLink to={'/likevideos'} className="sidebar_icon_div">
                    <p>
                        <AiFillLike className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Liked Videos</div>
                    </p>
                </NavLink>
            </div>
            <div className="subscription_lsdbar">
                <h3> Subscriptions</h3>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
            </div>
        </div>
        <div className="container3_drawerleftsidebar"
        onClick={()=>toggleDrawer()}
        ></div>
    </div>
  )
}

export default Drawersidebar;