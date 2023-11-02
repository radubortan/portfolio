import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <Experience />
      <section id="Projects">
        <Parallax />
      </section>
      <section>
        <Projects />
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
