import {createContext,useContext,useReducer} from "react";

export const VideoPlayerContext=createContext();

export const favoriteList=[];
export const watchLaterList=[];


 export function VideoPlayerContextProvider({children}){

    const [state,dispatch]=useReducer(videoPlaylistReducer,{favoriteList,watchLaterList,userPlaylists: {
        MyPlaylist: [],
      },})
    return (
        <VideoPlayerContext.Provider value={{favoriteList:state.favoriteList,watchLaterList:state.watchLaterList, userPlaylists:state.userPlaylists, dispatch}}>{children}</VideoPlayerContext.Provider>
    )
}

 export function useVideoPlayerContext(){
    return useContext(VideoPlayerContext);
}

export const checkVideoInPlaylist=(playlist,id)=>{
    for(let video in playlist){
        if(video.id === id){
            console.log("true");
            return true;
        }
        
    }
    console.log("false");
    return false;
}

function videoPlaylistReducer(state,action){
    switch(action.type){
        case "ADD_TO_FAVORITES":
            return{
                ...state,
                favoriteList:state.favoriteList.concat(action.props.item),
                
            };
        break;
        case "REMOVE_FROM_FAVORITES":
            return{
                ...state,
                favoriteList:state.favoriteList.filter((item)=>action.item.id !==item.id),
                
            }
            break;
        case "ADD_TO_WATCHLATER":
            return{
               ...state,
                watchLaterList:state.watchLaterList.concat(action.props.item)
            }
            break;
        case "REMOVE_FROM_WATCHLATER":
            return{
                ...state,
                watchLaterList:state.watchLaterList.filter((item)=>action.item.id !==item.id)
            }
            break;
        case "CREATE_NEW_PLAYLIST":
            return{
                ...state,
                userPlaylists:{
                    ...state.userPlaylists,
                    [action.payload.newPlaylistName]:[],
                }
            }
            break;
        case "ADD_REMOVE_FROM_PLAYLIST":
            return checkVideoInPlaylist(state.userPlaylists[action.payload.playlist],action.payload.item.id) 
                    ? {
                        ...state,
                        userPlaylists:{
                            ...state.userPlaylists,
                            [action.payload.playlist]:state.userPlaylists[action.payload.playlist].filter((video)=>video.id!==action.payload.item.id),
                        },
                    }
                    :
                    {
                        ...state,
                        userPlaylists:{
                            ...state.userPlaylists,
                            [action.payload.playlist]:[...state.userPlaylists[action.payload.playlist],action.payload.item],
                        },
                    };
                break;
        default:
            return;
        }
}