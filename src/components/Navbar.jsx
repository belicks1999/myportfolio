import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <span className="navbar-toggle" onClick={toggleNavbar}>
        &#9776; {/* Unicode for hamburger menu icon */}
      </span>
      <div className={`navbar-links ${isOpen ? "show" : ""}`}>
        <Link to="hero" smooth={true} duration={500} onClick={toggleNavbar}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleNavbar}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={toggleNavbar}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleNavbar}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
