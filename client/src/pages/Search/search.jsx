import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Leftsidebar from "../../components/LeftSidebar/leftsidebar";
import Showvideogrid from "../../components/ShowVideoGrid/showvideogrid";


// import vid from "../../Components/Video/vid.mp4";

function Search() {
    const {searchQuery}=useParams();
  const vids = useSelector(state => state.videoReducer)
    ?.data?.filter((q) => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
    .reverse();

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <h2 style={{color:"white"}}>Search Results for {searchQuery}...</h2>
        <Showvideogrid vids={vids} />
      </div>
    </div>
  );
}

export default Search;