
import {videoData} from "../data/videodataList";
import "../displaycomponents/category/category.css";
import VideosInCategory from "../displaycomponents/category/videosInCategory";

function SpringVideoList(){

 
    return(<div>
        <h3>Spring Special Gardening Videos</h3>
        <div className="video-list-display">
            {
                videoData.map((item)=>{
                    if(item.category==="spring"){
                        return (<VideosInCategory item={item}/>) 
                    }
                  return (<div></div>)  ;
                }) 
            }
        
        </div>
    </div>)
}
export default SpringVideoList;