import React, { useRef, useEffect, useState } from "react";
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

  const sectionRefs = [homeRef, aboutMeRef, skillsRef, projectsRef, contactRef];
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const getScrollPostion = () => {
    const getScrollY = window.scrollY;
    setScrollPosition(getScrollY);
    console.log("nav scroll>>>", scrollPosition);
  };

  useEffect(() => {
    const options = {
      rootMargin: "-10% 0px 0px 0px",
      threshold: [0, 0.98],
    };

    const handleIntersection = (entries) => {
      let lastVisibleIndex;
      console.log("entries>>>", entries);

      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          lastVisibleIndex = index;
        }
        console.log("index", index);
      });
      console.log("current entry index>>", lastVisibleIndex);
      if (lastVisibleIndex !== -1) {
        setActiveSection(lastVisibleIndex);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, [sectionRefs]);

  useEffect(() => {
    window.addEventListener("scroll", getScrollPostion);

    return () => {
      window.removeEventListener("scroll", getScrollPostion); // 클린업
    };
  }, []);

  return (
    <div>
        <NavBar
          scrollToSection={scrollToSection}
          refs={{homeRef, aboutMeRef, skillsRef, projectsRef, contactRef }}
          activeSection={activeSection}
          scrollPosition={scrollPosition}
        />

      <div ref={homeRef}>
        <MainSection
          scrollToSection={scrollToSection}
          contactRef={contactRef}
        />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe 
        scrollPosition={scrollPosition}
        />
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
      <Footer
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutMeRef, skillsRef, projectsRef, contactRef }}
      />
    </div>
  );
};

export default MainPage;
