import {createContext,useContext,useReducer} from "react";

export const VideoPlayerContext=createContext();

export const favoriteList=[];

 export function VideoPlayerContextProvider({children}){

    const [state,dispatch]=useReducer(videoPlaylistReducer,{favoriteList})
    return (
        <VideoPlayerContext.Provider value={{favoriteList:state.favoriteList,dispatch}}>{children}</VideoPlayerContext.Provider>
    )
}

 export function useVideoPlayerContext(){
    return useContext(VideoPlayerContext);
}


function videoPlaylistReducer(state,action){
    switch(action.type){
        case "ADD_TO_FAVORITES":
            return{
                favoriteList:state.favoriteList.concat(action.props.item)
            };
        break;
        case "REMOVE_FROM_FAVORITES":
            return{
                favoriteList:state.favoriteList.filter((item)=>action.item.id !==item.id)
            }
            break;
        default:
            return;
        }
}