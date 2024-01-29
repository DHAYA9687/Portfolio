import React from "react";
import "./Workbox.css";
function Workbox({ number, title, style }) {
  return (
    <div style={{ ...style }} className="Workbox">
      <p>{number}</p>
      <h4>{title}</h4>
    </div>
  );
}

export default Workbox;
