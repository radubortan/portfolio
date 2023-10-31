import "./app.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Parallax">Parallax</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
