import {createContext,useContext,useReducer} from "react";

export const VideoPlayerContext=createContext();

export const favoriteList=[];
export const watchLaterList=[];


 export function VideoPlayerContextProvider({children}){

    const [state,dispatch]=useReducer(videoPlaylistReducer,{favoriteList,watchLaterList,userPlaylists: {
        MyPlaylist: [],
      },})
    return (
        <VideoPlayerContext.Provider value={{state, dispatch}}>{children}</VideoPlayerContext.Provider>
    )
}

 export function useVideoPlayerContext(){
    return useContext(VideoPlayerContext);
}

export const checkVideoInPlaylist=(playlist,id)=>{
    console.log(playlist);
    for(let video in playlist){
        if(video.id === id){
           
            return true;
        }
        
    }
   
    return false;
}

function videoPlaylistReducer(state,action){
    switch(action.type){
        case "ADD_TO_FAVORITES":
            return{
                ...state,
                favoriteList:state.favoriteList.concat(action.props.item),
                
            };
      
        case "REMOVE_FROM_FAVORITES":
            return{
                ...state,
                favoriteList:state.favoriteList.filter((item)=>action.item.id !==item.id),
                
            }
           
        case "ADD_TO_WATCHLATER":
            return{
               ...state,
                watchLaterList:state.watchLaterList.concat(action.props.item)
            }
          
        case "REMOVE_FROM_WATCHLATER":
            return{
                ...state,
                watchLaterList:state.watchLaterList.filter((item)=>action.item.id !==item.id)
            }
           
        case "CREATE_NEW_PLAYLIST":
            return{
                ...state,
                userPlaylists:{
                    ...state.userPlaylists,
                    [action.payload.newPlaylistName]:[],
                }
            }
           
        case "ADD_REMOVE_FROM_PLAYLIST":
            return checkVideoInPlaylist(state.userPlaylists[action.playlist],action.props.item.id) 
                    ? {
                        ...state,
                        userPlaylists:{
                            ...state.userPlaylists,
                            [action.playlist]:state.userPlaylists[action.playlist].filter((video)=>video.id!==action.props.item.id),
                        },
                    }
                    :
                    {
                        ...state,
                        userPlaylists:{
                            ...state.userPlaylists,
                            [action.playlist]:[...state.userPlaylists[action.playlist],action.props.item],
                        },
                    };
               
        default:
            return;
        }
}