import {useState} from "react";
import { useVideoPlayerContext } from "../../contexts/videoListcontext";
function LikeButton(props){
    
    const [likeStatus,setLikeStatus]=useState(false);

    const { dispatch } =useVideoPlayerContext();

    return( <div> { 
        <button class="material-icons btn-icon material-icons-outlined"
        onClick={()=>{          
          setLikeStatus((likeStatus)=>!likeStatus)
          dispatch({type:"ADD_TO_FAVORITES",props})
        }
        }
        >
          {likeStatus ? "favorite" : "favorite_border"}  
            </button> 
        
        
        
        }</div>)
}

export default LikeButton;