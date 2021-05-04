import {useState} from "react";
function LikeButton(){
    
    const [likeStatus,setLikeStatus]=useState(false);

    return( <div> { 
        <button class="material-icons btn-icon material-icons-outlined"
        onClick={()=>setLikeStatus((likeStatus)=>!likeStatus)}
        >
          {likeStatus ? "favorite" : "favorite_border"}  
            </button> 
        
        
        
        }</div>)
}

export default LikeButton;