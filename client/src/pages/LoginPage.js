import { useContext, useState } from "react";
import {Navigate} from 'react-router-dom';
import { UserContext }from '../UserContext'; 
import '../loginForm.css'
import { FaUser , FaLock } from "react-icons/fa";


export default function LoginPage(){
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect , setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    
    // handle the login form submission
    async function login(e){
        e.preventDefault();
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({username, password}),
            credentials: 'include' // send cookies with the request
        });
        if(response.ok){
            response.json().then(userInfo =>{
                setUserInfo(userInfo); // set the user info in the UserContext if the login is successful
                setRedirect(true); // set the redirect flag to true if the login is successful
            })  
        }else{
            alert('Invalid credentials'); // display an alert if the login fails
        }
    }

    if(redirect){
        return <Navigate to={'/'} /> // redirect to the dashboard if the login is successful
    }
    return (  
        
     <div className="log">  
        <div className="wrapper">
            
            <form className="login-page" onSubmit={login}>
                <h1>Login Page</h1>
                <div className="input-box">
                    <input type="text"
                    name="username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                        required/>
                        <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required/>
                        <FaLock className="icon"/>
                </div>
                <div className="remember-forget">
                   <label><input type="checkbox"  /> Remember me</label>
                    <a href="/forgot">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>
                <div className="register-link">
                  <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
              
            </form>   
       </div>    
    </div> 
    )
}