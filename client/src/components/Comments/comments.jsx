import React, { useState } from 'react'
import './comments.css'
import Displaycomments from './Displaycomments';
import { useDispatch, useSelector } from "react-redux";
import { postComment } from '../../actions/comments';

function Comments({ videoId }) {
    const [commentText, setcommentText] = useState("");
    const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const commentsList = useSelector((s) => s.commentReducer);
    /*const commentList=[
      {
        _id:'1',
        commentBody:'hello',
        userCommented:'Neko',
      },
      {
        _id:'2',
        commentBody:'hiii',
        userCommented:'Yuki',
      },
    ]*/
    const dispatch = useDispatch();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if (CurrentUser) {
          if (!commentText) {
            alert("Plz Type your comment ! ");
          } else {
            dispatch(
              postComment({
                videoId: videoId,
                userId: CurrentUser?.result._id,
                commentBody: commentText,
                userCommented: CurrentUser?.result.name,
              })
            );
            setcommentText("");
          }
        }else{
          alert("Plz login to post your commnet !")
        }
    }
  return (
    <>
      <form action="" className='comments_sub_form_comments' onSubmit={handleOnSubmit}>
        <input type="text" onChange={e=>setcommentText(e.target.value)} placeholder='Add comments..'value={commentText} className='comment_ibox'/>
        <input type="submit" value='Comment' className='comment_add_btn_comments'/>
      </form>
      <div className="display_comment_container">
        {
          commentsList?.data?.filter((q) => videoId === q?.videoId)
          .reverse().map(m=>{
            return(
              <Displaycomments cId={m._id} userId={m.userId} commentOn={m.commentOn} commentBody={m.commentBody} userCommented={m.userCommented}/>
            )
          })
        }
      </div>
    </>
  )
}

export default Comments;