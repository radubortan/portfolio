import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Parallax">Parallax</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
