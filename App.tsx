import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-primary-500/30 selection:text-primary-200">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
};

export default App;
