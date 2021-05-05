import {createContext,useContext,useReducer} from "react";

export const VideoPlayerContext=createContext();

export const favoriteList=[];
export const watchLaterList=[];

 export function VideoPlayerContextProvider({children}){

    const [state,dispatch]=useReducer(videoPlaylistReducer,{favoriteList,watchLaterList})
    return (
        <VideoPlayerContext.Provider value={{favoriteList:state.favoriteList,watchLaterList:state.watchLaterList,dispatch}}>{children}</VideoPlayerContext.Provider>
    )
}

 export function useVideoPlayerContext(){
    return useContext(VideoPlayerContext);
}


function videoPlaylistReducer(state,action){
    switch(action.type){
        case "ADD_TO_FAVORITES":
            return{
                favoriteList:state.favoriteList.concat(action.props.item),
                watchLaterList: state.watchLaterList
            };
        break;
        case "REMOVE_FROM_FAVORITES":
            return{
                favoriteList:state.favoriteList.filter((item)=>action.item.id !==item.id),
                watchLaterList: state.watchLaterList
            }
            break;
        case "ADD_TO_WATCHLATER":
            return{
                favoriteList:state.favoriteList,
                watchLaterList:state.watchLaterList.concat(action.props.item)
            }
            break;
        case "REMOVE_FROM_WATCHLATER":
            return{
                favoriteList:state.favoriteList,
                watchLaterList:state.watchLaterList.filter((item)=>action.item.id !==item.id)
            }
            break;
        default:
            return;
        }
}