import React from "react";
import NavBar from '../components/NavBar/NavBar';
import MainSection from '../components/MainSection/MainSection';
import AboutMe from '../components/AboutMe/AboutMe';
import SkillsProjects from '../components/SkillsProjects/SkillsProjects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <MainSection />
      <AboutMe />
      <SkillsProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
