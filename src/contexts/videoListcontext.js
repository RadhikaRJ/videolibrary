import { createContext, useContext, useReducer } from "react";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
  CREATE_NEW_PLAYLIST,
  ADD_REMOVE_FROM_PLAYLIST,
} from "../constants/constants";
export const VideoPlayerContext = createContext();

export const favoriteList = [];
export const watchLaterList = [];

export function VideoPlayerContextProvider({ children }) {
  const [state, dispatch] = useReducer(videoPlaylistReducer, {
    favoriteList,
    watchLaterList,
    userPlaylists: {
      MyPlaylist: [],
    },
  });
  return (
    <VideoPlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayerContext() {
  return useContext(VideoPlayerContext);
}

export const checkVideoInPlaylist = (playlist, id) => {
  // console.log(playlist);
  for (let video in playlist) {
    // console.log(video);
    if (playlist[video].id === id) {
      return true;
    }
  }

  return false;
};

function videoPlaylistReducer(state, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteList: state.favoriteList.concat(action.props.item),
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (item) => action.item.id !== item.id
        ),
      };

    case ADD_TO_WATCHLATER:
      return {
        ...state,
        watchLaterList: state.watchLaterList.concat(action.props.item),
      };

    case REMOVE_FROM_WATCHLATER:
      return {
        ...state,
        watchLaterList: state.watchLaterList.filter(
          (item) => action.item.id !== item.id
        ),
      };

    case CREATE_NEW_PLAYLIST:
      return {
        ...state,
        userPlaylists: {
          ...state.userPlaylists,
          [action.payload.newPlaylistName]: [],
        },
      };

    case ADD_REMOVE_FROM_PLAYLIST:
      return checkVideoInPlaylist(
        state.userPlaylists[action.payload.playlist],
        action.payload.props.item.id
      )
        ? {
            ...state,
            userPlaylists: {
              ...state.userPlaylists,
              [action.payload.playlist]: state.userPlaylists[
                action.payload.playlist
              ].filter((item) => item.id !== action.payload.props.item.id),
            },
          }
        : {
            ...state,
            userPlaylists: {
              ...state.userPlaylists,
              [action.payload.playlist]: [
                ...state.userPlaylists[action.payload.playlist],
                action.payload.props.item,
              ],
            },
          };

    default:
      return;
  }
}
