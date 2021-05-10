
import {useAuth} from "../contexts/authcontext";
import "../styles/button.css";
import {useState} from "react";
import LoginPageForm from "./loginPageForm";
function Login(){
    
    const{authState,authDispatch}=useAuth();
    return(<div>
        <h3>{authState.isUserLogin && authState.credVerificationStatus ? "You are logged in" : "Log in to continue"}</h3>
        <LoginPageForm/>
        <br/>
        {authState.credVerificationStatus ? <p>You have logged in successfully.</p> : <p> Invalid or empty credentials! </p> }
    </div>)
}

export default Login;