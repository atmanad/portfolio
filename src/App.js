import React from "react";
import loadable from "@loadable/component";
import "./css/style.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
const SkillsComponent = loadable(() => import("./components/skills"));
const EducationComponent = loadable(() => import("./components/Education"));
const ProjectsComponent = loadable(() => import("./components/projects"));
const FooterComponent = loadable(() => import("./components/footer"));

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <Intro />
        <SkillsComponent />
        <EducationComponent />
        <ProjectsComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
