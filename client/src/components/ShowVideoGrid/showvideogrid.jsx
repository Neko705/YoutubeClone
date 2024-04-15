import React from 'react'
import Showvideo from '../ShowVideo/showvideo';
import './showvideogrid.css'

function Showvideogrid({vids}) {
  return (
    <div className='container_showvideogrid'>
        {
            vids?.map(vi=>
            {
                return(
                    <div key={vi._id} className="video_box">
                        <Showvideo vid={vi}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Showvideogrid;