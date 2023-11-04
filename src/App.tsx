import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";
import Education from "./components/education/Education";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About Me">
        <AboutMe />
      </section>
      <Experience />
      <section id="Projects">
        <Projects />
      </section>
      <section id="Technologies">
        <Parallax type="technologies" />
      </section>
      <section style={{ backgroundColor: "#111132" }}>Technologies</section>
      <section id="Studies">
        <Parallax type="studies" />
      </section>
      <section>
        <Education />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
