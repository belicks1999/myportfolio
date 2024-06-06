import React from "react";
import "./About.css";

function About(){
    return (
        <section id="about" className="about-section">
        <div className="about-container">
          <div className="about">
            <h2>About</h2>
          </div>
          <div className="content">
            <div className="paragraph-container">
              <p>
                I'm Belicks, a Software Engineer with a Bachelor's degree in Software Engineering from London Metropolitan University. I am skilled in JavaScript, HTML, CSS, and frameworks like Node.js and React.js.
              </p>
             
            </div>
            <br />
            <div className="paragraph-container">
              <p>
                My expertise includes manual and basic automated software testing, with a solid understanding of testing methodologies. Professionally, I've freelanced on Fiverr and worked in dropshipping on eBay, enhancing my skills in Git, SQL, and agile development.
              </p>
            </div>
            <br />
            <div className="paragraph-container">
              <p>
                I excel in team collaboration, problem-solving, and effective communication, making me adaptable in fast-paced environments. I'm passionate about continuous learning and contributing to innovative projects in software engineering and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>  
      );
}

export default About;