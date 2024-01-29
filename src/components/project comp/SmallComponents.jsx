import React, { useState } from "react";
import "./SmallComponents.css";

function SmallComponents({ title, img, desc, link }) {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
        className="project"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        {show ? (
          <div className="project__info">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ) : (
          <img src={img} alt="project__image" />
        )}
      </div>
    </a>
  );
}

export default SmallComponents;
