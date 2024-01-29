import React from "react";
import "./App.css";
import Work from "./components/Experience/Work";
import Header from "./components/Header/Header";
import Skillset from "./components/SkillContainer/Skillset";
import TopContainer from "./components/Topcontainer/TopContainer";
import Contact from "./components/contact/Contact";
import MyProjects from "./components/project/MyProjects";
function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <Skillset />
      <MyProjects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
