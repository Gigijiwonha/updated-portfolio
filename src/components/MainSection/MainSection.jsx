import React, { useEffect, useState } from "react";
import "./MainSection.style.css";

const MainSection = () => {
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className='mainSection'>
      <div className='mainSection__container'>
        <h2>{greetingMessage},</h2>
        <h1>I'm Gigi Jiwon Ha.</h1>
        <div className='mainSection__container__loading'>
          <p>Today's growing pains, growing 1% stronger.</p>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
