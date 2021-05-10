
import "../styles/loginForm.css";
import "../styles/input.css";
import {useAuth} from "../contexts/authcontext";
import "../styles/category.css";
function LoginPageForm(){

    const{authState,authDispatch}=useAuth();
    return(<div className="userLoginForm-container apply-shadow">
        
        <label id="username">Usename:</label>
        <input type="text" for="username" placeholder="name"/>
        <br/>
        <label id="password">Password: </label>
        <input type="password" for="password" />
        <br/>
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
       
    </div>);
}

export default LoginPageForm;