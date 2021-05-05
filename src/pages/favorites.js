import {useVideoPlayerContext} from "../contexts/videoListcontext";
import  ReactPlayer from "react-player";
import "../displaycomponents/category/category.css";
import "../displaycomponents/category/button.css";

function Favorites(){
 const {favoriteList,dispatch} =useVideoPlayerContext();

    return(<div>
       {favoriteList.length===0? <h2>Ooops! You do not have any favorites yet.</h2> : <h2>Here are your favourites!</h2>}
       <div className="video-list-display">
       {
           favoriteList.length!==0 && 
            favoriteList.map((item)=>{
                return (<div className="video-style">
                            <ReactPlayer url= {item.url} controls={true} width="420px" height="250px" />
                            <button className="link-Text-Btn" onClick={()=>dispatch({type:"REMOVE_FROM_FAVORITES",item})}>Remove</button>
                           </div>) 
            })
       }
        </div>
    </div>);
}
export default Favorites;