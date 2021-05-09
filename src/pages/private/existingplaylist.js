import {useVideoPlayerContext} from "../../contexts/videoListcontext";
import VideosInCategory from "../../displaycomponents/category/videosInCategory";
import "../../styles/playlist.css";


function ExistingPlaylists(){
 const {state}=useVideoPlayerContext();
 const userCreatedPlaylists=Object.keys(state.userPlaylists);
console.log(state.userCreatedPlaylists);
    return(<div className="existingplaylist-container">
       
        
        {
            userCreatedPlaylists.map((playlist)=>(
                <div key={playlist} className="individual-playlist-container">
                <h3>{playlist}</h3>
                <div>
                    {
                        state.userPlaylists[playlist].map((item)=>(
                            <VideosInCategory item={item}/>
                        ))
                    }
                </div>
               </div>
                
            ))
        }
    </div>)
}
export default ExistingPlaylists;