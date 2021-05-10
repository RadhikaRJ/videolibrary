import {createContext,useContext,useState,useReducer} from "react";
import {Route,Navigate} from "react-router-dom";
import Login from "../pages/login";

export const AuthContext=createContext();

export function AuthContextProvider({children}){
    
    const[authState,authDispatch]=useReducer(authReducer,{isUserLogin:false,credVerificationStatus:false});

    return(
        <AuthContext.Provider value={{authState,authDispatch}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){

    return useContext(AuthContext);
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
        case "CREDENTIALS_VERIFICATION_TRUE":
            return{
                ...state,
                credVerificationStatus:true,
            }
        case "CREDENTIALS_VERIFICATION_FALSE":
            return{
                ...state,
                credVerificationStatus:false,
            }
        default:
            return state;
    }
}