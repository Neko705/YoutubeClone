import React from 'react'
import './discribchannel.css'
import { FaEdit, FaUpload } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Describchannel({setEditcreatechanelbtn,Cid, setVidUploadPage}) {

    const chanels=useSelector((state)=>state?.chanelReducers)
    //console.log(Cid)
    const currentChanel = chanels.filter((c) => c._id === Cid)[0];
    //console.log(currentChanel)
    const CurrentUser = useSelector(state => state?.currentUserReducer);
  return (
    <div className='container3_chanel'>
        <div className="chanel_logo">
            <b>{currentChanel?.name}</b>
        </div>
        <div className="description_chanel">
            <b>{currentChanel?.name}</b>
            <p>{currentChanel?.desc}</p>
        </div>
        {CurrentUser?.result._id === currentChanel?._id && (
             <>
             <p
               className="editbtn_chanel"
               onClick={() => {
                 setEditcreatechanelbtn(true);
               }}
             >
               <FaEdit />
               <b> Edit Chanel</b>
             </p>
             <p className="uploadbtn_chanel" onClick={()=>setVidUploadPage(true)}>
               <FaUpload />
               <b> Upload Video</b>
             </p>
           </>
         )}
       </div>
     );
}

export default Describchannel;

