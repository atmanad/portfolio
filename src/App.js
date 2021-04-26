import React from "react";
import "./css/style.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./components/Education";
AOS.init();

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
