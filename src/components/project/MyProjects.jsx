import React from "react";
import { Element } from "react-scroll";
import image from "../../assets/image.jpg";
import SmallComponents from "../project comp/SmallComponents";
import "./MyProjects.css";
function MyProjects() {
  const project = [
    {
      img: image,
      title: "project1",
      description:
        "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up.",
      link: "www.google.com",
    },
    {
      img: "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project2",
      description:
        "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up.",
      link: "www.google.com",
    },
    {
      img: "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project3",
      description:
        "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom.",
      link: "www.google.com",
    },
    {
      img: "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project4",
      description:
        "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up.",
      link: "www.google.com",
    },
    {
      img: "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project5",
      description:
        "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up",
      link: "www.google.com",
    },
    {
      img: "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project6",
      description:
        "We are looking for an outstanding Web Developer to be responsible for the coding, innovative design and layout of our website. Web developer responsibilities include building our website from concept all the way to completion from the bottom up",
      link: "www.google.com",
    },
  ];
  return (
    <Element id="projects" className="Myprojects">
      <div className="dhaya">
        <h1>MyProjects</h1>
        <p>Here are some projects to make our life simple</p>
      </div>
      <div className="Projects__container">
        {project.map((project, index) => {
          return (
            <SmallComponents
              key={index}
              title={project.title}
              img={project.img}
              desc={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
}

export default MyProjects;
