import './App.css';
import Allrouters from './components/Allrouters';
import Drawersidebar from './components/LeftSidebar/drawersidebar';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import Createchannel from './pages/Channel/createchanel';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fatchAllChanel } from './actions/chanelUser';
import Videoupload from './pages/Videoupload/videoupload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLter';
import { getAllHistory } from './actions/History';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawersidebar, settoggleDrawersidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawersidebar.display==='none'){
      settoggleDrawersidebar({
        display:'flex',
      })
    }else{
      settoggleDrawersidebar({
        display:'none',
      })
    }
  }
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [Editcreatechanelbtn, setEditcreatechanelbtn] = useState(false)
  return (
    <Router>
      {vidUploadPage && <Videoupload setVidUploadPage={setVidUploadPage}/>}
      {Editcreatechanelbtn && <Createchannel setEditcreatechanelbtn={setEditcreatechanelbtn}/>}
      <Navbar
      setEditcreatechanelbtn={setEditcreatechanelbtn}
      toggleDrawer={toggleDrawer}
      />
      <Drawersidebar
      toggleDrawer={toggleDrawer}
      toggleDrawersidebar={toggleDrawersidebar}
      />
      <Allrouters setVidUploadPage={setVidUploadPage} setEditcreatechanelbtn={setEditcreatechanelbtn}/>
    </Router>
  );
}

export default App;
