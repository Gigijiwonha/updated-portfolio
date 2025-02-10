import React from "react";
import "./Footer.style.css";
import mainLogoStroke from "../../Assets/mainLogoStroke.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ scrollToSection, refs }) => {
  const { homeRef, aboutMeRef, skillsRef, projectsRef, contactRef } = refs;
  return (
    <div className='footerSection'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__content--left'>
            <img
              src={mainLogoStroke}
              alt='Main Logo'
              className='footer__logo'
            />
            <p>There's will, there's always the way</p>
          </div>
          <div className='footer__content--right'>
            <ul className='footer__content--navList'>
              <li onClick={() => scrollToSection(homeRef)}>Home</li>
              <li onClick={() => scrollToSection(aboutMeRef)}>About Me</li>
              <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
              <li onClick={() => scrollToSection(projectsRef)}>projects</li>
              <li onClick={() => scrollToSection(contactRef)}>Contact Me</li>
            </ul>
            <div className='footer__content--icons'>
              <a
                href={"https://github.com/Gigijiwonha"}
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className='footer__icon'
                />
              </a>
              <a
                href={"https://www.linkedin.com/in/gigi-jiwon-ha/"}
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='footer__icon'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='footer__copyright'>
          <p>© 2024 Gigi Jiwon Ha Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
