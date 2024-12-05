import React from "react";
import "./Footer.style.css";
import mainLogoStroke from "../../Assets/mainLogoStroke.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='footer__container'>
        <div className='footer__container--left'>
          <img
            src={mainLogoStroke}
            alt='Main Logo'
            className='footer__logo'
          />
          <p>There's will, there's always the way</p>
        </div>
        <div className='footer__container--right'>
          <ul className='footer__containter--navList'>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>projects</li>
            <li>Contact Me</li>
          </ul>
          <ul className='footer__containter--icons'>
            <li>
              <FontAwesomeIcon
                icon={faSquareGithub}
                className='footer__icon'
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='footer__icon'
              />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>© 2024 Gigi Jiwon Ha Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
