import  ReactPlayer from "react-player";
import {videoData} from "../data/videodataList";
import "../displaycomponents/category/category.css";

function MonsoonVideoList(){

    return(<div>
        <h3>Monsoon Special Gardening Videos</h3>
        <div className="video-list-display">
        {
                videoData.map((item)=>{
                    if(item.category==="monsoon"){
                        return (<div className="video-style">
                            <ReactPlayer url= {item.url} controls={true} width="420px" height="250px" />
                           </div>) 
                    }
                  return;
                }) 
            }
        
        </div>
    </div>)
}

export default MonsoonVideoList;