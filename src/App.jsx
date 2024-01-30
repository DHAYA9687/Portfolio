import React from "react";
import "./App.css";
import Work from "./components/Experience/Work";
import Header from "./components/Header/Header";
import SkillSet from "./components/SkillContainer/SkillSet";
import TopContainer from "./components/Topcontainer/TopContainer";
import Contact from "./components/contact/Contact";
import MyProjects from "./components/project/MyProjects";
function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <SkillSet />
      <MyProjects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
