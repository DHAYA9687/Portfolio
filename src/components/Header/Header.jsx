import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className="Header__left">
        <h1>
          Develop<span>ER</span>
        </h1>
      </div>
      <div className="Header__right">
        <Link to="about" smooth={true} duration={800}>
          <h4>About Me</h4>
        </Link>
        <Link to="Skills" smooth={true} duration={700}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={700}>
          <h4>Projects</h4>
        </Link>
        <Link to="Experience" smooth={true} duration={700}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={700}>
          <h4>Contact</h4>
        </Link>
        <h4>Join with Me</h4>
      </div>
    </div>
  );
}

export default Header;
