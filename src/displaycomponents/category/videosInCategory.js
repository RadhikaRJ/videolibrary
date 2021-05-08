import "./category.css";
import LikeButton from "../likeButton/likefunctionality";
import WatchLaterButton from "../watchLaterButton/watchLater";
import  ReactPlayer from "react-player";

function VideosInCategory(props){

    return(<div className="video-style">
    <ReactPlayer url= {props.item.url} controls={true} width="420px" height="250px" />
    <div className="video-btns">
    <LikeButton item={props.item}/>
    <WatchLaterButton item={props.item}/>
    </div>
   
   </div>)
}

export default VideosInCategory;