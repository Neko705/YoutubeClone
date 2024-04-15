import React from 'react';
import './likewatchlaterbtn.css';
import  { useState } from 'react';
import  { BsThreeDots } from 'react-icons/bs';
import  { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import  { MdPlaylistAddCheck } from 'react-icons/md';
import  { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo } from '../../actions/video';
import { addTolikedVideo, deletelikedVideo } from '../../actions/likedVideo';
import { useEffect } from 'react';
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLter';

function LikeWatchLater(vv,vid) {
    const CurrentUser = useSelector(state => state?.currentUserReducer)
    const dispatch=useDispatch()
    const [Savevideo, setSavevideo] = useState(true);
    const [Dislikebtn, setDislikebtn] = useState(false);
    const [Likebtn, setLikebtn] = useState(false);

    const likedVideoList = useSelector(state => state.likedVideoReducer);
    const watchLaterList= useSelector(state=>state.watchLaterReducer)
    useEffect(() => {
        likedVideoList?.data
          .filter(
            (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
          )
          .map((m) => setLikebtn(true));
          watchLaterList?.data
          .filter(
            (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
          )
          .map((m) => setSavevideo(true));
      },[]);

    const toggleSavedvideo=()=>{
        if(CurrentUser){
        if(Savevideo){
            setSavevideo(false);
            dispatch(deleteWatchLater({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
            }));
        }else{
            setSavevideo(true);
            dispatch(addTowatchLater({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
            }))
        }
    }else{
        alert("plz login to save the video")
    }
};

    const toggleLikebtn=(lk,e)=>{
        if(CurrentUser){
        if(Likebtn){
            setLikebtn(false);
            dispatch(
                likeVideo({
                  id: vid,
                  Like: lk - 1,
                })
              );
            dispatch(deletelikedVideo({
                videoId:vid,
                Viewer: CurrentUser?.result._id,
            }))
        }else{
            setLikebtn(true);
            dispatch(
                likeVideo({
                  id: vid,
                  Like: lk + 1,
                })
              );
            dispatch(addTolikedVideo({
                videoId:vid,
                Viewer: CurrentUser?.result._id,
            }));
            setDislikebtn(false)
        }
    }else{
        alert("plz login to give like")
    }
    }
    const toggleDislikebtn=(lk,e)=>{
        if(CurrentUser){
        if(Dislikebtn){
            setDislikebtn(false);
        }else{
            setDislikebtn(true);
            if (Likebtn) {
                dispatch(
                  likeVideo({
                    id: vid,
                    Like: lk - 1,
                  })
                );
                dispatch(deletelikedVideo({
                    videoId:vid,
                    Viewer: CurrentUser?.result._id,
                }))
            }
            setLikebtn(false)
        }
    }else{
        alert('plz login')
    }
    }
  return (
    <div className='btns_cont_videopage'>
        <div className="btn_videopage">
            <BsThreeDots/>
        </div>
        <div className="btn_videopage">
            <div className="like_videopage" onClick={(e)=>toggleLikebtn(e,vv.Like)}>
                {
                    Likebtn? (
                    <>
                    <AiFillLike size={22} className='btns_videopage'/>
                    </>
                    ):(
                    <>
                    <AiOutlineLike size={22} className='btns_videopage'/>
                    </>
                )}
                <b>{vv?.views}</b>
            </div>
            <div className="like_videopage" onClick={(e)=>toggleDislikebtn(e,vv.Like)}>
                {
                    Dislikebtn? (
                    <>
                    <AiFillDislike size={22} className='btns_videopage'/>
                    </>
                    ):(
                    <>
                    <AiOutlineDislike size={22} className='btns_videopage'/>
                    </>
                )}
                <b>Dislike</b>
            </div>
            <div className="like_videopage" onClick={()=>toggleSavedvideo()}>
                {
                    Savevideo? (
                    <>
                    <RiPlayListAddFill size={22} className='btns_videopage'/>
                    <b>Save</b>
                    </>
                    ):(
                    <>
                    <MdPlaylistAddCheck size={25} className='btns_videopage'/>
                    <b>Saved</b>
                    </>
                )}
            </div>
            <div className="like_videopage">
                    <>
                      <RiHeartAddFill size={22} className='btns_videopage'/>
                      <b>Thanks</b>
                    </>
            </div>
            <div className="like_videopage">
                    <>
                      <RiShareForwardLine size={22} className='btns_videopage'/>
                      <b>Share</b>
                    </>
            </div>
        </div>
        </div>
  );
}

export default LikeWatchLater;