import React from 'react'
import './NavBar.style.css'
import mainLogoRed from "../../Assets/mainLogoRed.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className='navBar'>
      <img className='navBar__mainLogo' src={mainLogoRed} alt="main logo" />
      <span className='navBar__mainLogo_text'>Contact me!</span>
      {/* <ul className='navBar__menu'>
          <li className='navBar__menu_item'>About Me</li>
          <li className='navBar__menu_item'>Skills</li>
          <li className='navBar__menu_item'>Projects</li>
          <li className='navBar__menu_item'>Contact</li>
      </ul> */}
      <button className='hamburger-bar'><FontAwesomeIcon icon={faBars} /></button>
    </div>
  )
}

export default NavBar
