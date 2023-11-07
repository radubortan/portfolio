import "./app.scss";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";
import Studies from "./components/studies/Studies";
import Skills from "./components/skills/Skills";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Parallax type="skills" />
      <Skills />
      <Parallax type="studies" />
      <Studies />
      <Contact />
    </div>
  );
}

export default App;
