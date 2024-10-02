import React, { useEffect, useState } from "react";
import "./MainSection.style.css";
import profileImage from "../../Assets/profileImage.png";

const MainSection = () => {
  const [greetingMessage, setGreetingMessage] = useState("");

  const greetingMessageByHour = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
  };

  const updateGreetingMessage = () => {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    console.log("currentTime>>", currentTime);
    console.log("currentHour>>", currentHour);

    if (currentHour >= 0 && currentHour < 5) {
      setGreetingMessage("Hello");
    } else if (currentHour < 12) {
      setGreetingMessage(greetingMessageByHour.morning);
    } else if (currentHour < 18) {
      setGreetingMessage(greetingMessageByHour.afternoon);
    } else {
      setGreetingMessage(greetingMessageByHour.evening);
    }
  };

  useEffect(() => {
    updateGreetingMessage();
  }, [greetingMessage]);

  return (
    <div className='mainSection'>
      <div className='mainSection__container'>
        <div className='mainSection__container_left'>
          <h3>{greetingMessage}!</h3>
          <h1>
            const todayGrowingPains = () =&gt; &#123; return &apos;growing 1%
            stronger&apos;; &#125;
          </h1>
          <p>
            This code represents efficient performance like O(1) in Big O
            notation. Daily growing pains lead to a 1% growth, allowing for
            steady progress. When looking at the long term, I aim for consistent
            and stable growth. Just like O(1), which maintains its performance
            regardless of input size, I strive to develop consistently in a
            changing environment. Even with new technologies emerging every day,
            I avoid being overconfident and focus on learning continuously to
            grow efficiently. I always aim to produce reliable results, becoming
            a solid developer through sincere and deep approaches.
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
  );
};

export default MainSection;
