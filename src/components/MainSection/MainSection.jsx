import React, { useEffect, useState } from "react";
import "./MainSection.style.css";
import profileImage from "../../Assets/profileImage.png";

// 1. Randomly arrange the words to fill the entire screen✅
// 2. Fade out one word group at a time as scrolling down by a certain amount
// 3. Make the word group fade back in as scrolling up
// 4. Display the greeting message after fading out all word groups

const MainSection = () => {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [rows, setRows] = useState([]);

  const words = [
    "curious",
    "persistent",
    "resposible",
    "collaborative",
    "diligent",
    "tech-savvy",
    "creative",
    "GIGI",
  ];

  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  useEffect(() => {
    // Update the state variabl rows
    const handleResize = () => {
      setRows(generateRows());
    };

    // When window is resized, call handleResize
    window.addEventListener("resize", handleResize);
    // When the components mounts, immediately set rows by calling handleResize
    handleResize();

    //Clean up event listener when it is no longer needed
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth, screenHeight]); // Rerender when screenWidth changes

  const generateRows = () => {
    const wordSize = 8;
    const rowHeight = 27.5;
    const rowLines = Math.floor(screenHeight / rowHeight);
    const rows = [];
    let currentLineWidth;
    let currentRow;
    console.log("screen width>>", screenWidth);
    console.log("screen height>>", screenHeight);

    while (rows.length < rowLines) {
      currentLineWidth = 0; // Initialise the width of the current line
      currentRow = []; // Initialise array of current row

      while (currentLineWidth <= screenWidth) {
        const getRandomWord = (words) => {
          const randomIndex = Math.floor(Math.random() * words.length);
          return words[randomIndex];
        };
        const randomWord = getRandomWord(words); // a random word
        const randomWordWidth = randomWord.length * wordSize + 5; // size of random word plus spacing

        if (currentLineWidth + randomWordWidth <= screenWidth) {
          currentRow.push(randomWord);
          currentLineWidth += randomWordWidth;
        } else {
          break; // Otherwise terminate loop
        }
      }

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
    }
    return rows;
  };

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
    } else if (currentHour < 11) {
      setGreetingMessage(greetingMessageByHour.evening);
    } else {
      setGreetingMessage(greetingMessage.night);
    }
  };

  useEffect(() => {
    updateGreetingMessage();
  }, [greetingMessage]);

  return (
    <div>
      <div className='words-container'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='word-row'
          >
            {row.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className='word'
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className='mainSection'>
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
    </div>
  );
};

export default MainSection;
