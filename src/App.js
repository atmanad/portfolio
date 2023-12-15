import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import loadable from "@loadable/component";
import NavBar from "./components/NavBar";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Intro from "./components/Intro"
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


// const SkillsComponent = loadable(() => import("./components/Skills"));
// const ProjectsComponent = loadable(() => import("./components/projects"));
// const FooterComponent = loadable(() => import("./components/Footer"));
// const IntroComponent = loadable(()=> import("./components/Intro"))



function App() {
    return (
      <div className="body">
        <NavBar />
        <Intro/>
        <Skills />
        <Experience/>
        <ProjectsCarousel/>
        <Footer />
      </div>
    );
  }

export default App;
