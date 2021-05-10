import {createContext,useContext,useState,useReducer} from "react";
import {Route} from "react-router-dom";
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

export function PrivateRoute({login,element,...props}){

    
        
        return  login ? ( <Route exact path={props.path} element={element} />)
        : (<Route exact path={"/login"} element={<Login/>} />)
    
      
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