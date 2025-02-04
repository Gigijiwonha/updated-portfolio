import React, { useEffect, useState } from "react";
import "./ProjectCard.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ url, img, git, title, description, tools }) => {
  const [isActivated, setIsActivated] = useState(window.innerWidth <= 768);

  const buttonText =
    title === "Spotify-Demo"
      ? "Demo Video"
      : title === "Online Grocery Shop"
      ? "Coming soon"
      : "Website";

  useEffect(() => {
    const handleResize = () => {
      setIsActivated(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li className='projects__list-item'>
      <a>
        <img
          src={img}
          alt={title}
        />
       
        <div className={`project__metadata ${isActivated ? "activated" : ""}`}>
          <h3 className='project__title'>{title}</h3>
          <p className='project__description'>{description}</p>
          <ul className='project__tools'>
            <li className='project__tool'>
              {tools.map((tool, index) => `#${tool}`).join("  ")}
            </li>
          </ul>
          <div className='project__btns'>
            <a
              href={url}
              target='_blank'
              className='project__btn'
            >
              {buttonText}
            </a>
            <a
              href={git}
              target='_blank'
              className='project__btn'
            >
              GitHub
            </a>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
