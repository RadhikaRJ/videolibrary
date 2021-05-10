import {createContext,useContext,useState,useReducer} from "react";
import {Route,Navigate} from "react-router-dom";
import Login from "../pages/login";

export const AuthContext=createContext();

export function AuthContextProvider({children}){
    
    const[authState,authDispatch]=useReducer(authReducer,{isUserLogin:false});

    return(
        <AuthContext.Provider value={{authState,authDispatch}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){

    return useContext(AuthContext);
}

export function PrivateRoute({path,...props}){

    const {authState}=useAuth();
    
        
        return  authState.isUserLogin ? ( <Route path={path} {...props}/>)
        : (<Navigate state={{from:path}} {...props} replace to="/login"/>)
    
      
  }


function authReducer(state,action){

    switch(action.type){
        case "LOG_IN":
            return{...state,
            isUserLogin:true,
        }
        case "LOG_OUT":
            return{
                ...state,
                isUserLogin:false,
            }
        default:
            return state;
    }
}