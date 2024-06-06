import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className={showMenu ? "navbar-links active" : "navbar-links"}>
        <Link to="hero" smooth={true} duration={500} onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={() => setShowMenu(false)}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={showMenu ? "bar active" : "bar"}></div>
        <div className={showMenu ? "bar active" : "bar"}></div>
        <div className={showMenu ? "bar active" : "bar"}></div>
      </div>
    </nav>
  );
}

export default Navbar;
