import React from "react";
import { Element } from "react-scroll";
import Workbox from "../Experiencebox/Workbox";
import "./Work.css";
const Work = () => {
  const Work = [
    {
      number: "10+",
      title: "Clients",
    },
    {
      number: "20+",
      title: "Projects",
    },
    {
      number: "6+",
      title: "years Teaching",
    },
    {
      number: "50000+",
      title: "students got Trained",
    },
  ];
  return (
    <Element name="Experience" className="Work__Container">
      <div className="WorkExp">
        <h2>Work Experience</h2>
      </div>
      <div className="Workbox__Container">
        {Work.map((Work, index) => {
          return (
            <Workbox key={index} number={Work.number} title={Work.title} />
          );
        })}
      </div>
    </Element>
  );
};

export default Work;
