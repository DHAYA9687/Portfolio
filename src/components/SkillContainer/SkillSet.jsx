import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { Element } from "react-scroll";
import image from "../../assets/image.jpg";
import "./Skillset.css";
function Skillset() {
  return (
    <Element name="Skills" className="SkillContainer">
      <div className="Skill__image">
        <img src={image} alt="SkillSet__image" width="600" height="400" />
      </div>
      <div className="SkillContainer__text">
        <h2>SKILLSET</h2>
        <div className="SkillContainer__SkillSet">
          <h5>React</h5>
          <div className="SkillContainer__Slider Slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>Javascript</h5>
          <div className="SkillContainer__Slider Slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>HTML_5</h5>
          <div className="SkillContainer__Slider Slider3">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>CSS(Cascading Style Sheet)</h5>
          <div className="SkillContainer__Slider Slider4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>SASS</h5>
          <div className="SkillContainer__Slider Slider5">
            <LinearProgress variant="determinate" value={100} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>Bootstrap</h5>
          <div className="SkillContainer__Slider Slider6">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>JAVA</h5>
          <div className="SkillContainer__Slider Slider7">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="SkillContainer__SkillSet">
          <h5>C Programming</h5>
          <div className="SkillContainer__Slider Slider8">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skillset;
