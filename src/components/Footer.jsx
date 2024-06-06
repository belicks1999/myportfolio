import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(<div className="col-lg-6 d-flex align-items-center">
    <div className="social-icons">
      <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  </div>);

}

export default Footer;