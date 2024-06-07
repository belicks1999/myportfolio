import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile from "../images/my.jpg";

function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set showText to true after the component has mounted
    setShowText(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className={`hero-content ${showText ? 'fade-in' : ''}`}>
        <div className="text-content">
          <h1>Hello, i'm Belicks</h1>
          <h2>Software engineer | BEng in (Hons) | Full-Stack Developer</h2>
          <p>From coding to testing, I ensure <br /> excellence in every aspect of <br />software development.  Explore <br /> my portfolio to witness my <br /> commitment to quality.</p>
        </div>
        <div className="image-frame">
          <img src={profile} className="profile-image" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
