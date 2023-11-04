import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Presentation">Presentation</section>
      <Experience />
      <section id="Projects">
        <Projects />
      </section>
      <section id="Technologies">
        <Parallax />
      </section>
      <section>Technologies</section>
      <section id="Education">Education</section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
