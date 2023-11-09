import "./app.scss";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";
import Studies from "./components/studies/Studies";
import Skills from "./components/skills/Skills";
import Home from "./components/home/Home";
import { useEffect, useState } from "react";

function App() {
  const [initialWidth] = useState<number>(window.innerWidth);
  let timer: number;

  // refreshes the page when changing breakpoint to avoid broken animations
  const handleResize = () => {
    clearTimeout(timer);

    const MOBILE = 768;
    const TABLET = 1024;

    let initialBreakpoint = "";
    let currentBreakpoint = "";

    if (initialWidth <= MOBILE) {
      initialBreakpoint = "mobile";
    } else if (initialWidth > MOBILE && initialWidth <= TABLET) {
      initialBreakpoint = "tablet";
    } else {
      initialBreakpoint = "desktop";
    }

    const breakpoints = ["mobile", "tablet", "desktop"];
    const nonInitialBreakpoints = breakpoints.filter(
      (bp) => bp !== initialBreakpoint
    );

    const currentWidth = window.innerWidth;

    if (currentWidth <= MOBILE) {
      currentBreakpoint = "mobile";
    } else if (currentWidth > MOBILE && currentWidth <= TABLET) {
      currentBreakpoint = "tablet";
    } else {
      currentBreakpoint = "desktop";
    }

    if (nonInitialBreakpoints.includes(currentBreakpoint)) {
      timer = setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
