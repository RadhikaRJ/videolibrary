import {useVideoPlayerContext} from "../../contexts/videoListcontext";
import VideosInCategory from "../../displaycomponents/category/videosInCategory";
function ExistingPlaylists(){
 const {userPlaylists}=useVideoPlayerContext();
 const userCreatedPlaylists=Object.keys(userPlaylists);
console.log({userCreatedPlaylists});
    return(<div>
        <h3>Existing Playlist </h3>
        
        {
            userCreatedPlaylists.map((playlist)=>(
                <div kay={playlist}>
                <h3>{playlist}</h3>
                <div>
                    {
                        userPlaylists[playlist].map((item)=>(
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