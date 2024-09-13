import { useState } from "react";
import { FaUser , FaLock } from "react-icons/fa";
import '../loginForm.css';

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:8080/register' , {
            method: 'POST',
            body: JSON.stringify({username , password}),
            headers: {'Content-Type' : 'application/json'}
        })
        if(response.status === 200){
            alert("Registration successfull");
        }else{
            alert("Registration failed");
        }
    }
    return (
        <div className="log">
           <div className="wrapper">
                <form className="register" onSubmit={register}>
                <h1>Signup Page</h1>
                <div className="input-box">
                   
                    <input type="text"
                    placeholder="Username"
                            id="username"
                            name="username"
                            value={username}
                            onChange={e=> setUsername(e.target.value)}
                            required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                
                    <input type="password"
                    placeholder="Password"
                            id="password"
                            name="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                    /> 
                    <FaLock className="icon"/>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                  <a href="/login">Already have an account?</a> <a href="/">Go back to Homepage</a>
                </div>
                
                </form> 
            </div>
        </div>       
    )
}