import React from 'react'
import './whl.css'
import Leftsidebar from '../LeftSidebar/leftsidebar';
import Whlvideolist from './whlvideolist';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../actions/History';

function Whl({page,videoList}) {
    const CurrentUser = useSelector(state => state?.currentUserReducer)
    const dispatch=useDispatch()
  const handleClearHistory=()=>{
    if(CurrentUser){
      dispatch(clearHistory({
        userId:CurrentUser?.result._id
      }))
    }
  }
  return (
    <div className='container_pages'>
        <Leftsidebar />
       <div className="container2_pages">
        <p className="container_whl">
            <div className="box_whl leftside_whl">
                <b>Watch {page} </b>
                {
                    page==='History'&&
                    <div className="clear_history_btn" onClick={()=>handleClearHistory()}>
                    Clear History
                    </div>
                }
            </div>
            <div className="rightside_whl">
                <h1>{page}</h1>
                <div className="whl_list">
                    <Whlvideolist page={page}
                    CurrentUser={CurrentUser?.result._id}
                    videoList={videoList}/>
                </div>
            </div>
        </p>
    </div>
</div>
  )
}

export default Whl;