import React,{useState} from "react";
import './LoginDialog.css';

function LoginDialog({onClose}){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[captcha,setCaptcha] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();


        onClose();
    };
    return(
        <div className="login-dialog">
            <button className="close-button" onClick={onClose}>&times;</button>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"
                 value ={email} onChange={(e)=>setEmail(e.target.value)} required/>
                 <input type="password" placeholder="Password"
                 value ={password} onChange={(e)=>setPassword(e.target.value)} required/>
                 <input type="text" placeholder="Captcha"
                 value ={captcha} onChange={(e)=>setCaptcha(e.target.value)} required/>
                 <div className="captcha"> Random Captcha : {Math.floor(Math.random()* 10000)}</div>
                 <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default LoginDialog;