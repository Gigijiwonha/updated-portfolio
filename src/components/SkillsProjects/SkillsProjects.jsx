import React, { useState } from "react";
import "./SkillsProjects.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSwift,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import netflixDemo from "../../Assets/netflixDemo.png";
import retailShop from "../../Assets/retailShop.png";
import goToList from "../../Assets/goToList.png";
import spotifyDemo from "../../Assets/spotifyDemo.png";
import groceryShop from "../../Assets/groceryShop.png";
import weatherApp from "../../Assets/weatherApp.png";
import ProjectCard from "./ProjectCard/ProjectCard";

const Skills = ({ skillsRef, projectsRef }) => {
  const projects = [
    {
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7249378011748151296/",
      git: "https://github.com/Gigijiwonha/spotify-demo",
      img: spotifyDemo,
      title: "Spotify-Demo",
      description: "Fetching data via Spotify API",
      tools: ["JS", "React", "React Query", "Axios"],
    },
    {
      url: "https://nutflix-demo-by-gigi.netlify.app",
      git: "https://github.com/Gigijiwonha/netflix-demo",
      img: netflixDemo,
      title: "Netflix-Demo",
      description: "Displaying data with TMDb API",
      tools: ["JS", "React", "React Query", "Axios"],
    },
    {
      url: "https://weatherapp-by-gigi.netlify.app/",
      git: "https://github.com/Gigijiwonha/updated-weather-app",
      img: weatherApp,
      title: "Weather Application",
      description: "Retrieving data from OpenWeather API",
      tools: ["JS", "React", "React Query", "Axios"],
    },
    {
      url: "https://go-to-list-by-gigi.netlify.app",
      git: "https://github.com/Gigijiwonha/go-to-list",
      img: goToList,
      title: "Create Your Go-To List",
      description: "Building a small app with Bootstrap & Redux",
      tools: ["JS", "React", "Bootstrap", "Redux"],
    },
    {
      url: "https://online-retail-store-by-gigi.netlify.app",
      git: "https://github.com/Gigijiwonha/online-retail-store",
      img: retailShop,
      title: "Online Retail Shop",
      description: "Serving data using JSON Server",
      tools: ["JS", "React", "JSON Server"],
    },
    {
      //https://grocery-shopping-website-by-gigi.netlify.app
      // https://github.com/Gigijiwonha/online-grocery-store
      url: "",
      git: "",
      img: groceryShop,
      title: "Online Grocery Shop",
      description: "Storing data with local storage",
      tools: ["JS", "PHP", "Local storage"],
    },
  ];

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
      <div
        className='skillsSection'
        ref={skillsRef}
      >
        <h2 className='skills__title sectionTitle'>Skills</h2>
        <div className='skills__container'>
          <p>
            I primarily use HTML, CSS, and JavaScript to build websites.
            Additionally, I have academic experience with Swift and Java from my
            university coursework. I've utilised libraries like React, React
            Query, Redux, Middleware Thunk, and Axios in various personal
            projects and contributed to a team project as well.
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
      </div>
      <div
        className='ProjectsSection'
        ref={projectsRef}
      >
        <h2 className='projects__title sectionTitle'>Projects</h2>
        <p></p>
        <ul className='projects__list'>
          {projects.map((project, index) => (
            <div className='projects__list__item'>
              <ProjectCard
                key={index}
                url={project.url}
                git={project.git}
                img={project.img}
                title={project.title}
                description={project.description}
                tools={project.tools}
              />
            </div>
          ))}
        </ul>
        <div class='custom-shape-divider-bottom-1738544114'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z'
              class='shape-fill'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skills;
