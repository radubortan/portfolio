import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";
import Studies from "./components/studies/Studies";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <Experience />
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="studies">
        <Parallax type="studies" />
      </section>
      <section>
        <Studies />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
