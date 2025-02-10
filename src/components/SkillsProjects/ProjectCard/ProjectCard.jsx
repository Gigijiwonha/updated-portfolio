import React, { useEffect, useState } from "react";
import "./ProjectCard.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({
  projectType,
  year,
  url,
  img,
  git,
  title,
  description,
  tools,
}) => {
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
    <li className='projects__card'>
        <a
          href={url}
          target='_blank'
          className='projects__img'
        >
          <img
            src={img}
            alt={title}
          />
        </a>
      <div className={`project__content ${isActivated ? "activated" : ""}`}>
        <div className='project__info'>
          <span className='project__info-bg'>{projectType}</span>
          <span>{year}</span>
        </div>
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
            className='project__btn web'
          >
            {buttonText}
          </a>
          <a
            href={git}
            target='_blank'
            className='project__btn git'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='gitIcon'
            />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
