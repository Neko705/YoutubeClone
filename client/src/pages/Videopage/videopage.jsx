import './videopage.css';
import React, { useState, useRef, useEffect } from 'react';
import LikeWatchLater from './likewatchlaterbtn';
import Comments from '../../components/Comments/comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';
import { FaPlay, FaPause, FaForward, FaBackward, FaCog } from 'react-icons/fa';

const Videopage = () => {
  const { vid } = useParams();
  const [quality, setQuality] = useState('720p');
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progres, setProgress] = useState(0);
  const videoRef = useRef(null);

  const vids = useSelector((state) => state.videoReducer);
  const vv = vids?.data.find((q) => q._id === vid);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();

  const handleHistory = () => {
    dispatch(addToHistory({
      videoId: vid,
      Viewer: CurrentUser?.result._id,
    }));
  };

  const handleViews = () => {
    dispatch(viewVideo({ id: vid }));
  };

  const videoSources = {
    '320p': `http://localhost:5500/${vv?.filePath}`,
    '480p': `http://localhost:5500/${vv?.filePath}`,
    '720p': `http://localhost:5500/${vv?.filePath}`,
    '1080p': `http://localhost:5500/${vv?.filePath}`
  };

  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  },);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime);
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleQualityChange = (event) => {
    const newQuality = event.target.value;
    const currentTime = videoRef.current.currentTime;
    const wasPlaying = !videoRef.current.paused;

    setQuality(newQuality);
    videoRef.current.src = videoSources[newQuality];
    videoRef.current.currentTime = currentTime;

    if (wasPlaying) {
      videoRef.current.play();
    }
  };

  const handleProgressClick = (event) => {
        const progressElement = event.target;
    const rect = progressElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newTime = (offsetX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  const handleGesture = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x < rect.width / 3) {
      handleBackward();
    } else if (x > rect.width * 2 / 3) {
      handleForward();
    } else {
      togglePlayPause();
    }
  };

  return (
    <div className="container_videopage">
      <div className="container2_videopage">
        <div className="video_display_screen">
          <video
           ref={videoRef}
            src={videoSources[quality]}
            onClick={handleGesture}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className='video_showvideo_videopage'
            autoPlay
            controls={false}
          ></video>
          <div className="controls">
            <button onClick={togglePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleBackward}>
              <FaBackward />
            </button>
            <button onClick={handleForward}>
            <FaForward />
            </button>
            <button onClick={handleQualityChange}>
              <FaCog />
            </button>
            <div className="progress-bar" onClick={handleProgressClick}>
              <div className="progress" style={{ width: `${(currentTime / videoRef.current?.duration) * 100}%` }}></div>
            </div>
            <div className="buttons">
              <select value={quality} onChange={handleQualityChange}>
                {Object.keys(videoSources).map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="video_details_videopage">
            <div className="video_btns_title_videopage_cont">
              <p className="video_title_videopage">{vv?.videoTitle}</p>
              <div className="views_data_btns_videopage">
                <div className="views_videopage">
                  {vv?.views} views <div className="dot"></div> {moment(vv?.createdAt).fromNow()}
                </div>
                <LikeWatchLater vv={vv} vid={vid} />
              </div>
            </div>
            <Link to={`/chanel/${vv?.videoChanel}`} className="chanel_details_videopage">
              <b className="chanel_logo_videopage">
                <p>{vv?.Uploader}</p>
              </b>
              <p className='chanel_name_videopage'>{vv?.Uploader}</p>
            </Link>
            <div className="comments_videopage">
              <h2>Comments</h2>
              <Comments videoId={vv?._id} />
            </div>
          </div>
        </div>
        <div className="morevideobar">More videos</div>
      </div>
    </div>
  );
};
export default Videopage;
