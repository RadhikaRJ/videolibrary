import { useState } from "react";
import { useVideoPlayerContext } from "../../contexts/videoListcontext";
import { ADD_TO_WATCHLATER } from "../../constants/constants";
function WatchLaterButton(props) {
  const { dispatch } = useVideoPlayerContext();
  const [watchLater, setWatchLater] = useState(false);

  return (
    <div>
      <button
        class="btn-icon material-icons-outlined"
        onClick={() => {
          setWatchLater((watchLater) => !watchLater);
          dispatch({ type: ADD_TO_WATCHLATER, props });
        }}
      >
        {watchLater ? "check_circle_outline" : "watch_later"}
      </button>
    </div>
  );
}
export default WatchLaterButton;
