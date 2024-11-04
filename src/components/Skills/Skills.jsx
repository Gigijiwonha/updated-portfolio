import React from "react";
import "./Skills.style.css";

const Skills = () => {
  return (
    <div>
      <div class='custom-shape-divider-top-1730634535'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='skillsSection'>
        <h2 className='skills__title sectionTitle'>Skills</h2>
        <p>
          I mainly use HTML, CSS and Java Script for building website,
          additionally I had some experience using Swift and Jave at Uni
        </p>
        <div className='skills__container'>
          <h3>Language</h3>
          <div className='skills__box language'>
            <ul className='skills__box_items'>
              <li>HTML 5</li>
              <li>CSS 6</li>
              <li>Java Script</li>
              <li>Swift</li>
              <li>Java</li>
            </ul>
          </div>
          <h3>Library</h3>
          <div className='skills__box library'>
            <ul className='skills__box_items'>
              <li>React</li>
              <li>React Query</li>
              <li>Redux</li>
              <li>Midleware Thunk</li>
              <li>Axios</li>
            </ul>
          </div>
          <h3>Tools</h3>
          <div className='skills__box tool'>
            <ul className='skills__box_items'>
              <li>VS Code</li>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
