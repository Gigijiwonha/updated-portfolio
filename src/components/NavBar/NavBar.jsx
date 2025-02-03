import React, { act, useEffect, useRef, useState } from "react";
import "./NavBar.style.css";
import mainLogoRed from "../../Assets/mainLogoRed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = ({ scrollToSection, refs, activeSection, scrollPosition }) => {
  const { homeRef, aboutMeRef, skillsRef, projectsRef, contactRef } = refs;
  const navRef = useRef(0);
  const [navWidth, setNavWith] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const getNavWidth = () => {
    const getWidth = navRef.current.clientWidth;
    console.log("nav width>>>", getWidth);
    setNavWith(getWidth);
  };

  const toggleBurgerBar = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    getNavWidth();
    window.addEventListener("resize", getNavWidth);
    return () => window.removeEventListener("resize", getNavWidth);
  }, [navWidth]);

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
    <div
      className='navBar'
      ref={navRef}
    >
      <img
        className='navBar__mainLogo'
        src={mainLogoRed}
        alt='main logo'
        onClick={goToLandingPage}
      />
      <span className='navBar__mainLogo_text'>Go Back!</span>
      <ul
        className={`navBar__menu ${scrollPosition >= 150 ? "bg-active" : ""} ${
          navWidth <= 768 ? "fade" : ""
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={item}
            className={`navBar__menu_item ${
              activeSection === index ? "active" : ""
            }`}
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
      <button
        onClick={() => toggleBurgerBar()}
        className={`hamburger-bar ${navWidth <= 768 ? "enabled" : ""} ${
          isToggled ? "beige" : ""
        }`}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sideBar ${isToggled ? "toggled" : ""}`}>
        <ul className='sideBar__list'>
          {menuItems.map((item, index) => (
            <li
              key={item}
              className='sideBar__item'
              onClick={() => {
                const key = item.toLowerCase().replace(" ", "");
                const targetRef = sectionRefs[key];
                if (targetRef) {
                  scrollToSection(targetRef);
                  toggleBurgerBar();
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
