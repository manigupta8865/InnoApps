import React from "react";
import {Link} from 'react-router-dom'
import "./App.css";
import Search from "./Search";
const NavBar = () => {
  return (
      <header>
    <div className="NavBar-Container">
      <div className="Header-Logo">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" >
              <img src="https://aperfectspace.com/images/new-home-logo-black.png"></img>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to=""
              className="nav-link active text-muted list-group-item-action"
              
            >
              About
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="" className="nav-link text-muted list-group-item-action" >
              How it works
            </Link>
          </li>
          <li className="nav-item border-class">
            <Link to="" className="nav-link text-muted list-group-item-action" >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link text-muted list-group-item-action" >
              List a Space
            </Link>
          </li>
          <li className="nav-item border-class">
            <Link to="" className="nav-link text-muted list-group-item-action" >
              Find a Space
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register"
              className="nav-link text-muted list-group-item-action Sign-Up"
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin"
              className="nav-link text-muted list-group-item-action Sign-In"
              
            >
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </header>
   
  );
};
export default NavBar;
