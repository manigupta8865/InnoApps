import React from "react";
import "./App.css";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
     <footer> 
    <div className="footer">
    <img src="https://aperfectspace.com/images/new-home-logo-black.png"></img>
    <p>@2020, A Perfect Space</p>
    <p><Link to="">Cookies</Link></p>
    <p> <Link to="">Terms & Privay</Link></p>
   </div>
   </footer>
  );
};
export default Footer;
