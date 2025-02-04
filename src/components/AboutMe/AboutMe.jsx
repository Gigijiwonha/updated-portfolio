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
            With my UX/UI design background, I bring a unique perspective to
            front-end development—bridging user experience, design
            collaboration, and technical problem-solving. When others said a
            designer couldn’t become a developer, my willpower turned it into
            progress. With a can-do attitude, I keep growing as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
