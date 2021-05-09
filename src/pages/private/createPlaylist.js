import "../../styles/input.css";
import "../../styles/playlist.css";
import "../../styles/button.css";
import "../../contexts/videoListcontext";
import {useState} from "react";
import { useVideoPlayerContext } from "../../contexts/videoListcontext";

function CreateNewPlaylist(){
 const {dispatch} = useVideoPlayerContext();
 const [newPlaylistName,setNewPlaylistName]=useState("");

 const handleChange = (event)=>{
     setNewPlaylistName(event.target.value)
 }
    return(<div className="create-new-playlist" >
        
        <h3>Add a new Playlist</h3>
        <label><strong>Playlist Name:</strong></label>
        <input type="text" placeholder="name" onChange={handleChange} value={newPlaylistName}/>
        <button class="btn-text" onClick={()=>{
            dispatch({type:"CREATE_NEW_PLAYLIST",payload:{newPlaylistName}})
            setNewPlaylistName("");
            }}>Create</button>
        
    </div>)
}

export default CreateNewPlaylist;