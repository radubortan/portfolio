import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import classes from "./home.module.scss";

const Home = () => {
  return (
    <section id="home" className={classes.container}>
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
