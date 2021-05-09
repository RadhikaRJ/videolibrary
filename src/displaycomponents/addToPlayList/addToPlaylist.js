
import {useState} from "react";

function AddToPlaylist(props){
const [addStatus,setAddStatus]=useState(false);
    return(<div>
        <button class="material-icons btn-icon material-icons-outlined"
        onClick={()=>setAddStatus((addStatus)=>!addStatus)}
        >{addStatus ? "playlist_add_check" : "playlist_add"}</button>
    </div>);
}
export default AddToPlaylist;