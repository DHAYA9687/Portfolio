import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";
function TopContent() {
  return (
    <div className="TopContent">
      <div className="TopContent__Container">
        <h1>Mr.Dhaya</h1>
        <p>A Professional web and App Developer</p>
        <a href="www.google.com" target="_blank" id="cv">
          <button className="downloadcv">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={200}>
          <button className="work">Work</button>
        </Link>
      </div>
    </div>
  );
}

export default TopContent;
