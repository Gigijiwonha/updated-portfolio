import React from "react";
import "./AboutMe.style.css";
import profileImage from "../../Assets/profileImage.png"

const AboutMe = () => {
  return (
    <div className='aboutMeSection'>
      <div
        className='aboutMe'
      >
        <div className='aboutMe__container'>
          <div className='mainSection__container_left'>
            <h3></h3>
            <h1>
              const todayGrowingPains = () =&gt; &#123; return &apos;growing 1%
              stronger&apos;; &#125;
            </h1>
            <p>
              This code represents efficient performance like O(1) in Big O
              notation. Daily growing pains lead to a 1% growth, allowing for
              steady progress. When looking at the long term, I aim for
              consistent and stable growth. Just like O(1), which maintains its
              performance regardless of input size, I strive to develop
              consistently in a changing environment. Even with new technologies
              emerging every day, I avoid being overconfident and focus on
              learning continuously to grow efficiently. I always aim to produce
              reliable results, becoming a solid developer through sincere and
              deep approaches.
            </p>
          </div>
          <div className='mainSection__container_right'>
            <img
              className='mainSection__container_profileImg'
              src={profileImage}
              alt='profile'
            />
            <div className='mainSection__container_profile'>
              <h1>GiGi Jiwon Ha</h1>
              <p>Design-Tech Lover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
