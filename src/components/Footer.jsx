import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(<div className="col-lg-6 d-flex align-items-center">
    <div className="social-icons">
      <a href="https://x.com/MaxBelicks" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.facebook.com/share/9HpaY5oY8zmX7NuY/?mibextid=kFxxJD" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://www.instagram.com/belicks_maxwell?igsh=Z2x0eWs1aDQ4eWs2&utm_source=qr" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.linkedin.com/in/belicks-maxwell-751b40251/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  </div>);

}

export default Footer;