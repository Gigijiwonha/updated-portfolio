import { React, useRef } from "react";
import NavBar from "../components/NavBar/NavBar";
import MainSection from "../components/MainSection/MainSection";
import AboutMe from "../components/AboutMe/AboutMe";
import SkillsProjects from "../components/SkillsProjects/SkillsProjects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutMeRef, skillsRef, projectsRef, contactRef }}
      />
      <div ref={homeRef}>
        <MainSection />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <SkillsProjects 
        skillsRef={skillsRef} 
        projectsRef={projectsRef}  
        />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
