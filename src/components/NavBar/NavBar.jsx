import React from 'react'
import './NavBar.style.css'
import mainLogo from "../../Assets/mainLogo.png"

const NavBar = () => {
  return (
    <div className='navBar'>
      <img className='navBar__mainLogo' src={mainLogo} alt="main logo" />
      <span className='navBar__mainLogo_text'>Contact me!</span>
      <ul className='navBar__menu'>
          <li className='navBar__menu_item'>About Me</li>
          <li className='navBar__menu_item'>Skills</li>
          <li className='navBar__menu_item'>Projects</li>
          <li className='navBar__menu_item'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
