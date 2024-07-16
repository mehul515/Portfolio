import React from "react";
import Hero from "./sub-components/Hero";
import Timeline from "./sub-components/Timeline";
import About from "./sub-components/About";
import Skills from "./sub-components/Skills";
import Portfolio from "./sub-components/Portfolio";
import Contact from "./sub-components/Contact";

const Home = () => {
  return (
    <article className="px-5 mt-2 sm:mx-auto flex flex-col gap-14">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Timeline />
      <Contact /> 
    </article>
  );
};

export default Home;