import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Experience">
        <Parallax />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
