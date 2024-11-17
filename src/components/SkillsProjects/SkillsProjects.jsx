import React from "react";
import "./SkillsProjects.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSwift,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className='skillsAndProjectsContainer'>
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
        <div className='skills__gridContainer'>
          <div className='skills__language girdBox'>
            <h3>💻 Language</h3>
            <div className='gridBox__item'>
              <h4>Proficient In</h4>
              <ul className='gridBox__item__list--icon'>
                <li>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className='liIcon'
                  />
                  HTML 5
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    className='liIcon'
                  />
                  CSS 6
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faJs}
                    className='liIcon'
                  />
                  Java Script
                </li>
              </ul>
            </div>
            <div className='gridBox__item'>
              <h4>Familiar With</h4>
              <ul className='gridBox__item__list--icon'>
                <li>
                  <FontAwesomeIcon
                    icon={faSwift}
                    className='liIcon'
                  />
                  Swift
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faJava}
                    className='liIcon'
                  />
                  Java
                </li>
              </ul>
            </div>
          </div>
          <div className='skills__library girdBox'>
            <h3>📚 Library</h3>
            <ul className='gridBox__item__list--colomn'>
              <li>React</li>
              <li>React Query</li>
              <li>Redux</li>
              <li>Midleware Thunk</li>
              <li>Axios</li>
            </ul>
          </div>
          <div className='skills__tool girdBox'>
            <h3>⚙️ Tools</h3>

            <ul className='gridBox__item__list'>
              <li>VS Code</li>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='ProjectsSection'>
        <h2 className='projects__title sectionTitle'>Projects</h2>

        <ul className='projects__sortingContainer'>
          <li>All</li>
          <li>Java Script</li>
          <li>Swift</li>
        </ul>

        <ul className='projects__cardContainer'>
          <li>
          <button onClick={() => window.location.href = "https://nutflix-demo-by-gigi.netlify.app"}>Go to Nutflix</button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
