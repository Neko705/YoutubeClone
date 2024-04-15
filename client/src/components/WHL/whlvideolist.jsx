import React from 'react'
import Showvideolist from '../Showvideolist/showvideolist';

function Whlvideolist({page,videoList,CurrentUser}) {
   //console.log(videoList)
return (
  <>
   { CurrentUser ?(<>
   {
            videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map(m=>{
              return(
                  <>
                  <Showvideolist videoId={m?.videoId} key={m?._id}/>
                  </>
              )
          })
   }
    </>) :(<>
    <h2 style={{color:"white"}}>Plz Login To Watch Your {page} </h2>
    </>)

   }
  </>
)
}

export default Whlvideolist;