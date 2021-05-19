import CreateNewPlaylist from "./createPlaylist";
import ExistingPlaylists from "./existingplaylist";
import "../../styles/playlist.css";
function Playlist() {
  return (
    <div>
      <h2>Playlists</h2>
      <div className="playlist-container">
        <div className="playlist-section create-playlist-section">
          <CreateNewPlaylist />
        </div>
        <div className="playlist-section multiple-playlists-section">
          <div>
            <h3>Existing Playlists </h3>
            <ExistingPlaylists />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
