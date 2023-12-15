import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import loadable from "@loadable/component";
import NavBar from "./components/NavigationBar.jsx";
import ProjectsCarousel from "./components/ProjectsCarousel.jsx";
import Intro from "./components/Intro.jsx"
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";


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
