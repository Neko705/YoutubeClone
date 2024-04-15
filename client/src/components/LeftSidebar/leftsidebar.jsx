import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import { MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md'
import {SiYoutubeshorts} from 'react-icons/si'
import './leftsidebar.css'
import { NavLink } from 'react-router-dom'

function Leftsidebar() {
  return (
    <div className='container_leftsidebar'>
        <NavLink to={'/'} className="sidebar_icon_div">
          <AiFillHome size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Home</div>
        </NavLink>
        <NavLink to={'/explor'} className="sidebar_icon_div">
          <SiYoutubeshorts size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Shorts</div>
        </NavLink>
        <NavLink to={'/subscriptions'} className="sidebar_icon_div">
          <MdOutlineSubscriptions size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Subs</div>
        </NavLink>
        <NavLink to={'/library'} className="sidebar_icon_div">
          <MdOutlineVideoLibrary size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Library</div>
        </NavLink>
    </div>
  )
}

export default Leftsidebar