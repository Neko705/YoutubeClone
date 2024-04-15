import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import Explore from '../pages/Explore/explore';
import Subscription from '../pages/Subscription/subscription';
import Library from '../pages/Library/library';
import Watchhistory from '../pages/History/history';
import Yourvideos from '../pages/YourVideos/yourvideo';
import Watchlater from '../pages/WatchLater/watchlater';
import Likevideo from '../pages/LikeVideo/likevideo';
import Videopage from '../pages/Videopage/videopage';
import Channel from '../pages/Channel/channel';
import Search from '../pages/Search/search';

function Allrouters({setEditcreatechanelbtn,setVidUploadPage }) {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/subscription' element={<Subscription />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/watchhistory' element={<Watchhistory />}/>
        <Route path='/yourvideos' element={<Yourvideos />}/>
        <Route path='/watchlater' element={<Watchlater />}/>
        <Route path='/likevideos' element={<Likevideo />}/>
        <Route path="/videopage/:vid" element={<Videopage />} />
        <Route path='/chanel/:Cid' element={<Channel setVidUploadPage={setVidUploadPage} setEditcreatechanelbtn={setEditcreatechanelbtn}/>}/>
        <Route path='/search/:searchQuery' element={<Search />}/>
    </Routes>
  )
}

export default Allrouters;