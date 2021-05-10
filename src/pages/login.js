
import {useAuth} from "../contexts/authcontext";
import "../styles/button.css";
import {useState} from "react";
function Login(){
    
    const{authState,authDispatch}=useAuth();
    return(<div>
        <h3>{authState.isUserLogin ? "You are logged in" : "Log in to continue"}</h3>
        <button className="btn-text"
        onClick={()=>{
            if(authState.isUserLogin){               
                authDispatch({type:"LOG_OUT"})
            }
            else{               
                authDispatch({type:"LOG_IN"})
            }
        }}
        >{authState.isUserLogin ? "Log out" : "Log in"}</button>

    </div>)
}

export default Login;