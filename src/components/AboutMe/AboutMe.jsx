import React from "react";
import "./AboutMe.style.css";
import profileImage from "../../Assets/profileImage.png";

const AboutMe = () => {
  return (
    <div className='aboutMeSection'>
      <h2 className='aboutMe__title sectionTitle'>About Me</h2>
      <div className='aboutMe__content'>
        <div className='aboutMe__content__left'>
          <div className='aboutMe__content__name'>
            <h1>GiGi</h1>
            <h2>Jiwon Ha</h2>
          </div>
          <img
            className='aboutMe__content__img'
            src={profileImage}
            alt='profile image'
          />
        </div>
        <div className='aboutMe__content__right'>
          <div className='aboutMe__content__title'>
            <h3>Front-End Developer </h3>
            <h3>+</h3>
            <h3>UI/UX Design Expertise </h3>
          </div>
          <p className='aboutMe__content__description'>
            With my background in UX/UI design, I'm excited to move into
            front-end development. This combination of skills allows me to
            approach problems from a unique perspective, setting me apart from
            other developers. I aim to weave design principles into my coding to
            create a smooth and enjoyable user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
