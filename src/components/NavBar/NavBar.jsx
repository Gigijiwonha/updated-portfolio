import React from "react";
import "./NavBar.style.css";
import mainLogoRed from "../../Assets/mainLogoRed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ scrollToSection, refs, activeSection }) => {
  const { homeRef, aboutMeRef, skillsRef, projectsRef, contactRef } = refs;

  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate("/");
  };

  const menuItems = ["Home", "About Me", "Skills", "Projects", "Contact"];
  const sectionRefs = {
    home: homeRef,
    aboutme: aboutMeRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div className='navBar'>
      <img
        className='navBar__mainLogo'
        src={mainLogoRed}
        alt='main logo'
        onClick={goToLandingPage}
      />
      <span className='navBar__mainLogo_text'>Go Back!</span>
      <ul className='navBar__menu'>
        {menuItems.map((item, index) => (
          <li
            key={item}
            className={`navBar__menu_item ${activeSection === index ? "active" : ""}`}
            onClick={() => {
              const key = item.toLowerCase().replace(" ", "");
              const targetRef = sectionRefs[key];
              if (targetRef) {
                scrollToSection(targetRef);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* <ul className='navBar__menu'>
        <li
          className='navBar__menu_item'
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </li>
        <li
          className='navBar__menu_item'
          onClick={() => scrollToSection(aboutMeRef)}
        >
          About Me
        </li>
        <li
          className='navBar__menu_item'
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </li>
        <li
          className='navBar__menu_item'
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </li>
        <li
          className='navBar__menu_item'
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </li>
      </ul> */}
      {/* <button className='hamburger-bar'><FontAwesomeIcon icon={faBars} /></button> */}
    </div>
  );
};

export default NavBar;
