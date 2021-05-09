import CreateNewPlaylist from "./createPlaylist";
import ExistingPlaylists from "./existingplaylist";

function Playlist(){

    return (<div>
        <h2>Playlists:</h2>
        <div  className="playlist-container">
            <div className="playlist-section">
            <CreateNewPlaylist/>
            </div>
            <div className="playlist-section">
            <div><ExistingPlaylists/></div>
            </div>
        
        </div>
        </div>)
}

export default Playlist;