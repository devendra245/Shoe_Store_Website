import React from 'react';
import './footer.css'; 
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                    <h2>Shoe Store</h2>
                </div>
                <div className="footer-links">
                    <ul>
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="./Contact" >CONTACT US</Link></li>
                   <li><Link to="./About" >ABOUT US</Link></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
