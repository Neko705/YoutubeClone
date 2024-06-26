import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentuser";
import chanelReducers from './chanel'
import videoReducer from "./video";
import likedVideoReducer from "./likedVideo"
import watchLaterReducer from "./watchLater";
import HistoryReducer from "./History"
import commentReducer from "./comments";

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer,
});