import React, { lazy, Suspense } from "react";
import "./css/style.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
const SkillsComponent = lazy(() => import("./components/skills"));
const EducationComponent = lazy(() => import("./components/Education"));
const ProjectsComponent = lazy(() => import("./components/projects"));
const FooterComponent = lazy(() => import("./components/footer"));
const renderLoader = () => <p>Loading</p>;

class App extends React.Component {
  render() {
    return (
      <div className="body dark">
        <Navbar />
        <Intro />
        <Suspense fallback={renderLoader()}>
          <SkillsComponent />
        </Suspense>
        <Suspense fallback={renderLoader()}>
          <EducationComponent />
        </Suspense>
        <Suspense fallback={renderLoader()}>
          <ProjectsComponent />
        </Suspense>
        <Suspense fallback={renderLoader()}>
          <FooterComponent />
        </Suspense>
      </div>
    );
  }
}

export default App;
