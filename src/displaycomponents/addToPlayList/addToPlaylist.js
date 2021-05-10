
import {useState} from "react";
import { useVideoPlayerContext,checkVideoInPlaylist} from "../../contexts/videoListcontext";
import "../../styles/playlist.css";
import {ADD_REMOVE_FROM_PLAYLIST} from "../../constants/constants";
    function AddToPlaylist(props){

    const {state,dispatch}=useVideoPlayerContext();
   
    const [addStatus,setAddStatus]=useState(false);
    const addIntoPlaylist=(playlist)=>{
   dispatch({type:ADD_REMOVE_FROM_PLAYLIST,payload:{playlist,props}});
    }

   
   
    const allPlaylists=Object.keys(state.userPlaylists);
    


    return(<div>
        <button class="material-icons btn-icon material-icons-outlined"
        onClick={()=>setAddStatus((addStatus)=>!addStatus)}
        >{addStatus ? "playlist_add_check" : "playlist_add"}</button>
        <div>
        {
            addStatus && <div className="playlist-checkbox-container">
                <ul className="playlist-list">
                    {
                        allPlaylists.map((playlist)=>(
                           
                            <li key={playlist} className="playlist-list-item">
                                <input type="checkbox" className="checkbox-input"
                                onChange={()=>addIntoPlaylist(playlist)}
                                 checked={checkVideoInPlaylist(state.userPlaylists[playlist],props.item.id)}
                                ></input>
                                <span>{playlist}</span>
                            </li>
                        ))
                    }
                </ul>
            </div> 
        }
        </div>
        
    </div>);
}
export default AddToPlaylist;