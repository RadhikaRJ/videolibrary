import {useVideoPlayerContext} from "../contexts/videoListcontext";
import  ReactPlayer from "react-player";
import "../styles/button.css";
import "../styles/category.css";

function WatchLaterVideoList(){

    const {watchLaterList,dispatch}=useVideoPlayerContext();
    return(<div>
        {watchLaterList.length===0 ? <h2>Oops! Your watch later list is empty.</h2> : <h2>Here's your list of videos to watch later:</h2>}
        <div className="video-list-display">
       {
           watchLaterList.length!==0 && 
           watchLaterList.map((item)=>{
                return (<div className="video-style">
                            <ReactPlayer url= {item.url} controls={true} width="420px" height="250px" />
                            <button className="link-Text-Btn" onClick={()=>dispatch({type:"REMOVE_FROM_WATCHLATER",item})}>Remove</button>
                           </div>) 
            })
       }
        </div>
        
        
        </div>)
}

export default WatchLaterVideoList;