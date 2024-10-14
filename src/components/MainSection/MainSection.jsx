import React, { useEffect, useRef, useState } from "react";
import "./MainSection.style.css";
import profileImage from "../../Assets/profileImage.png";

// 1. Randomly arrange the words to fill the entire screen✅
// 2. Fade out one word group at a time as scrolling down by a certain amount
// 3. Make the word group fade back in as scrolling up
// 4. Display the greeting message after fading out all word groups

const MainSection = () => {
  const [greetingMessage, setGreetingMessage] = useState("");
  const mainSectionRef = useRef(null);


  // const fadingEffect = () => {
  //   if (currentScrollY < 800) {
  //     mainSectionRef.current?.classList.add("fade");
  //   } else {
  //     mainSectionRef.current?.classList.remove("fade");
  //   }
  // };

  const greetingMessageByHour = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
    night: "Good Night",
  };

  const updateGreetingMessage = () => {
    let currentTime = new Date();
    let currentHour = currentTime.getHours(); // Get current hour

    console.log("currentTime>>", currentTime);
    console.log("currentHour>>", currentHour);

    if (currentHour >= 3 && currentHour < 5) {
      setGreetingMessage("Hello");
    } else if (currentHour < 12) {
      setGreetingMessage(greetingMessageByHour.morning);
    } else if (currentHour < 18) {
      setGreetingMessage(greetingMessageByHour.afternoon);
    } else if (currentHour < 21) {
      setGreetingMessage(greetingMessageByHour.evening);
    } else {
      setGreetingMessage(greetingMessageByHour.night);
    }
  };

  useEffect(() => {
    updateGreetingMessage();
  }, [greetingMessage]);

  return (
    <div>
      <div
        className='mainSection'
        ref={mainSectionRef}
      >
        <div className='mainSection__container'>
          <div className='mainSection__container_left'>
            <h3>{greetingMessage}</h3>
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
      <div className='emptyBox'></div>
    </div>
  );
};

export default MainSection;
