import  ReactPlayer from "react-player";
import {videoData} from "../data/videodataList";
import "../displaycomponents/category/category.css";
import LikeButton from "../displaycomponents/likeButton/likefunctionality.js";

function WinterVideoList(){

    return(<div>
        <h3>Winter Special Gardening Videos</h3>
        <div className="video-list-display">
        {
                videoData.map((item)=>{
                    if(item.category==="winter"){
                        return (<div className="video-style">
                            <ReactPlayer url= {item.url} controls={true} width="420px" height="250px" />
                            <LikeButton/>
                           </div>) 
                    }
                  return;
                }) 
            }
        
        </div>
    </div>)
}

export default WinterVideoList;