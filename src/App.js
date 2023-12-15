import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import loadable from "@loadable/component";
import NavigationBar from "./components/NavigationBar.jsx";
import ProjectsCarousel from "./components/ProjectsCarousel.jsx";
import Introduction from "./components/Introduction.jsx"
import Experience from "./components/Experience.jsx";
import SkillSet from "./components/SkillSet.jsx";
import Contact from "./components/Contact.jsx";


// const SkillsComponent = loadable(() => import("./components/Skills"));
// const ProjectsComponent = loadable(() => import("./components/projects"));
// const FooterComponent = loadable(() => import("./components/Footer"));
// const IntroComponent = loadable(()=> import("./components/Intro"))



function App() {
    return (
      <div className="body">
        <NavigationBar />
        <Introduction/>
        <SkillSet />
        <Experience/>
        <ProjectsCarousel/>
        <Contact />
      </div>
    );
  }

export default App;
