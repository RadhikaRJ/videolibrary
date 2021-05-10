
import "../styles/loginForm.css";
import "../styles/input.css";
import {useAuth} from "../contexts/authcontext";
import "../styles/category.css";
import {useState} from "react";
function LoginPageForm(){
 const [userCreds,setUserCreds]=useState({username:"",password:""})
    const userDetails={
        username:"neogcamp",
        password:"myhappyplace",
    }

    const verifyUserInput=(username,password)=>{
        if(username===userDetails.username && password===userDetails.password){
            return true;            
        }
        return false;
    }


    const{authState,authDispatch}=useAuth();

   
    return(<div className="userLoginForm-container apply-shadow">
        {!authState.isUserLogin && <div>
            <label id="username">Usename:</label>
        <input type="text" for="username" placeholder="name" onChange={(e)=>setUserCreds({...userCreds,username:e.target.value})}/>
        <br/>
        <label id="password">Password: </label>
        <input type="password" for="password" placeholder="password" onChange={(e)=>setUserCreds({...userCreds,password:e.target.value})}/>
            </div>}
        
        <br/>
        <button className="btn-text"
        onClick={()=>{
            
            if(authState.isUserLogin){               
                authDispatch({type:"LOG_OUT"})
                authDispatch({type:"CREDENTIALS_VERIFICATION_FALSE"})
            }
            else{       
                 if(verifyUserInput(userCreds.username,userCreds.password)) {
                     
                    authDispatch({type:"LOG_IN"})
                    authDispatch({type:"CREDENTIALS_VERIFICATION_TRUE"})
                   
                 }   
                 if(!verifyUserInput(userCreds.username,userCreds.password)){
                  
                   authDispatch({type:"CREDENTIALS_VERIFICATION_FALSE"})
                }
            }
        }}
        >{authState.isUserLogin ? "Log out" : "Log in"}</button>

       
    </div>);
}

export default LoginPageForm;