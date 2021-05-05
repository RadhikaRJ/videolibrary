import  ReactPlayer from "react-player";
import {videoData} from "../data/videodataList";
import "../displaycomponents/category/category.css";
import "../displaycomponents/category/button.css";
import WatchLaterButton from "../displaycomponents/watchLaterButton/watchLater";
import LikeButton from "../displaycomponents/likeButton/likefunctionality.js";
function SpringVideoList(){

 
    return(<div>
        <h3>Spring Special Gardening Videos</h3>
        <div className="video-list-display">
            {
                videoData.map((item)=>{
                    if(item.category==="spring"){
                        return (<div className="video-style">
                            <ReactPlayer url= {item.url} controls={true} width="420px" height="250px" />
                            <div className="video-btns">
                            <LikeButton item={item}/>
                            <WatchLaterButton item={item}/>
                            </div>
                             
                           </div>) 
                    }
                  return (<div></div>)  ;
                }) 
            }
        
        </div>
    </div>)
}
export default SpringVideoList;