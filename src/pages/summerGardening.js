import  ReactPlayer from "react-player";
import {videoData} from "../data/videodataList";
import "../displaycomponents/category/category.css";
function SummerVideoList(){

    return(<div>
        <h3>Summer Special Gardening Videos</h3>
        <div className="video-list-display">
        {
                videoData.map((item)=>{
                    if(item.category==="summer"){
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

export default SummerVideoList;