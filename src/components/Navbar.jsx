import React from "react";
import "./Navbar.css"
import logo from "../images/logo.png";

function Navbar(){
    return <div class = "navbar">
    <img src={logo} alt="Logo"/> 
      <a href="#">Home</a> 
      <a href="#">About</a> 
      <a href="#">Projects</a>
      <a href="#">Contact</a> 
      <div class="navbar-right">
    <a href="#" >Let's Work Together</a>
    </div>
    
    </div>
}

export default Navbar;
