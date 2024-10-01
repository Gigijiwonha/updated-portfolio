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
          <h2>{greetingMessage}!</h2>
          <h1>I'm Design-Tech Lover, GiGi</h1>
          <p>
            I'm a recent graduate skilled in design, interaction design, and
            programming. I'm passionate about combining creativity with
            technical know-how, and I'm excited to start my journey as a
            Front-End Developer or Web Developer. Let's create something amazing
            together! 🚀
          </p>
        </div>
        <div className='mainSection__container_right'>
          <img
            src={profileImage}
            alt='profile'
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
