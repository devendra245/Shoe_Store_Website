import "./Navigation.css"
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import React,{useState} from "react";
import LoginDialog from "./LoginDialog";


function Navigation() {
  const[showLoginDialog,setShowLoginDialog] = useState(false);

  const openLoginDialog =() =>{
    setShowLoginDialog(true);
  }
  const closeLoginDialog =() =>{
    setShowLoginDialog(false);
  }
    return (
        <nav className="container"> 
        <div className="logo">
          <img src ={logo} alt="logo"/>
        </div>
        <ul>
          <li><Link to="/" >HOME</Link></li>
          <li><Link to="/Shop" >SHOP</Link></li>
          <li><Link to="./Contact" >CONTACT US</Link></li>
          <li><Link to="./About" >ABOUT US</Link></li>
         
        </ul>
        <button className="login-button" onClick={openLoginDialog}>Login</button>
        {showLoginDialog && <LoginDialog onClose={closeLoginDialog}/>}
      </nav>
      
    );
  }
  
  export default Navigation;