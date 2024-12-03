import React from "react";
import "./ProjectCard.style.css";

const ProjectCard = ({ url, img, title, description, tools }) => {

  const buttonText = title === "Spotify-Demo" ? "Demo Video" : "Website";

  return (
    <li className='projects__list-item'>
      <a
        href={url}
        target='_blank'
      >
        <img
          src={img}
          alt={title}
        />
        <div className='project__metadata'>
          <h3 className='project__title'>{title}</h3>
          <p className='project__description'>{description}</p>
          <ul className='project__tools'>
            {tools.map((tool, index) => (
              <li
                key={index}
                className='project__tool'
              >
                #{tool}
              </li>
            ))}
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
              href={url}
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
