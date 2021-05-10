
import {useAuth} from "../contexts/authcontext";
import "../styles/button.css";
import {useState} from "react";
import LoginPageForm from "./loginPageForm";
function Login(){
    
    const{authState,authDispatch}=useAuth();
    return(<div>
        <h3>{authState.isUserLogin ? "You are logged in" : "Log in to continue"}</h3>
        {!authState.isUserLogin && <LoginPageForm/>}
        <br/>

    </div>)
}

export default Login;