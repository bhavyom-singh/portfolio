import "./App.css";
import "./style.css";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import About from "././components/About/About";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import Particle from "./components/Particle";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skillset from "./components/Skillset";
import ContactMe from "./components/ContactMe";
import { trackPageview } from "./analytics";

function App() {
  useEffect(() => {
    trackPageview(window.location.href); // initial page load
  }, []);
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        <Navigation />
        <ScrollToTop />
        <Home />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skillset />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
