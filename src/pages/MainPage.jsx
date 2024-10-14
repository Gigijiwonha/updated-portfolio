import React from "react";
import NavBar from '../components/NavBar/NavBar';
import MainSection from '../components/MainSection/MainSection';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;
