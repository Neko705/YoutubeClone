import './videopage.css';

import React, { useEffect } from 'react';
//import vid from '../../components/Videos/video.mp4';
import LikeWatchLater from './likewatchlaterbtn';
import Comments from '../../components/Comments/comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';

function Videopage() {
  const { vid } = useParams();
//  console.log(vid)
const vids = useSelector((state) => state.videoReducer);
const vv = vids?.data.filter((q) => q._id === vid)[0];
const CurrentUser = useSelector((state) => state?.currentUserReducer);
const dispatch = useDispatch();

const handleHistory = () => {
  dispatch(
    addToHistory({
      videoId: vid,
      Viewer: CurrentUser?.result._id,
    })
  );
};
const handleViews=()=>{
  dispatch( viewVideo({
    id:vid
  }))
}

useEffect(() => {
  if (CurrentUser) {
    handleHistory();
  }
  handleViews();
}, );
  return (
    <>
      <div className="container_videopage">
        <div className="container2_videopage">
          <div className="video_display_screen">
            <video src={`http://localhost:5500/${vv.filePath}`}
            className='video_showvideo_videopage'
              controls autoPlay></video>
            <div className="video_details_videopage">
              <div className="video_btns_title_videopage_cont">
                <p className="video_title_videopage">{vv?.videoTitle}</p>
                <div className="views_data_btns_videopage">
                  <div className="views_videopage">
                    {vv?.views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLater vv={vv} vid={vid}/>
                </div>
              </div>
              <Link to={`/chanel/${vv?.videoChanel}`} className="chanel_details_videopage">
                <b className="chanel_logo_videopage">
                  <p>{vv.Uploader}</p>
                </b>
                <p className='chanel_name_videopage'>{vv?.Uploader}</p>
              </Link>
              <div className="comments_videopage">
                <h2>Comments</h2>
                <Comments videoId={vv._id} />
              </div>
            </div>
          </div>
          <div className="morevideobar">More videos</div>
        </div>
      </div>
    </>
  );
}


export default Videopage;