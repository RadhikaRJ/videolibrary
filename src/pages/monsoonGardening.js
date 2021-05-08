
import {videoData} from "../data/videodataList";
import "../displaycomponents/category/category.css";
import VideosInCategory from "../displaycomponents/category/videosInCategory";

function MonsoonVideoList(){

    return(<div>
        <h3>Monsoon Special Gardening Videos</h3>
        <div className="video-list-display">
        {
                videoData.map((item)=>{
                    if(item.category==="monsoon"){
                        return (
                            <VideosInCategory item={item}/>
                        ) 
                    }
                  return (<div></div>);
                }) 
            }
        
        </div>
    </div>)
}

export default MonsoonVideoList;