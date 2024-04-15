
import React, { useState } from 'react'
import './createchannel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/chanelUser';

function Createchannel({setEditcreatechanelbtn}) {
   // const CurrentUser={
   //     result:{
   //         email:"xyz@gmail.com",
   //         name:"xyz",
   //         joinedOn:"2222-07-15T09:57:23.489Z",
   //     },
   // };
   const CurrentUser = useSelector(state=>state.currentUserReducer)
    const [name, setName] = useState(CurrentUser?.result.name)
    const [desc, setDesc] = useState(CurrentUser?.result.desc)
    const dispatch=useDispatch();

   const handleSubmit = () => {
    if (!name) {
      alert("Plz Enter Name !");
    } else if (!desc) {
      alert("Plz Enter Discription !");
    } else {
      dispatch(
        updateChanelData(CurrentUser?.result._id, {
          name: name,
          desc: desc,
        })
      );
      setEditcreatechanelbtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser?.result.email }));
      }, 5000);
    }
  };
  return (
    <div className='container_createchannel'>
        <input type="submit" onClick={()=>setEditcreatechanelbtn(false)} name='text' value={'x'} className='ibtn_x' />
        <div className="container2_createchannel">
            <h1>
                    {CurrentUser?.result.name ?<>Edit</>:<>Create</>}
                    Your Channel
            </h1>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                name='text'
                placeholder='Enter Your/Channel name'
                className='ibox' />

                <textarea type='text'
                rows={15}
                placeholder='Enter Channel Discription'
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
                className='ibox'></textarea>

                <input type="submit"
                value={'submit'}
                onClick={handleSubmit}
                className='ibtn' />
        </div>
    </div>
  )
}

export default Createchannel;


