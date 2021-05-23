import { useVideoPlayerContext } from "../contexts/videoListcontext";
import ReactPlayer from "react-player";

import "../styles/category.css";
import "../styles/button.css";
import { REMOVE_FROM_FAVORITES } from "../constants/constants";

function Favorites() {
  const { state, dispatch } = useVideoPlayerContext();

  return (
    <div>
      {state.favoriteList.length === 0 ? (
        <h2>Ooops! You do not have any favorites yet.</h2>
      ) : (
        <h2>Here are your favourites!</h2>
      )}
      <div className="video-list-display">
        {state.favoriteList.length !== 0 &&
          state.favoriteList.map((item) => {
            return (
              <div className="video-style">
                <ReactPlayer
                  url={item.url}
                  controls={true}
                  width="420px"
                  height="250px"
                />
                <button
                  className="link-Text-Btn"
                  onClick={() =>
                    dispatch({ type: REMOVE_FROM_FAVORITES, item })
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Favorites;
