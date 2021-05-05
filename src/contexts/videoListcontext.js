import {createContext,useContext} from "react";

export const VideoPlayerContext=createContext();

 export function VideoPlayerContextProvider({children}){

    return (
        <VideoPlayerContext.Provider>{children}</VideoPlayerContext.Provider>
    )
}

 export function useVideoPlayerContext(){
    return useContext(VideoPlayerContext);
}


