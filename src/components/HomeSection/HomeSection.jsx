import React, { useEffect, useRef, useState } from "react";
import "./HomeSection.style.css";
import mainLogoRed from "../../Assets/mainLogoRed.png";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const [rows, setRows] = useState([]);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const mainLogoRef = useRef(null);
  const btnContainerRef = useRef(null);
  const navigate = useNavigate();

  // Always it starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const words = [
    "Curious",
    "Persistent",
    "Resposible",
    "Collaborative",
    "Diligent",
    "Tech-Savvy",
    "Creative",
    "GiGi",
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

  useEffect(() => {
    const handleScroll = () => {
      const getScrollY = window.scrollY;
      setCurrentScrollY(getScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    changeBackgroundColour();
  }, [currentScrollY]);

  console.log("current Y >>", currentScrollY);

  const fadingWordEffect = (word) => {
    const wordIndex = words.indexOf(word);
    const scrollThreshold = (wordIndex + 1) * 100; // Fading effect for every 100 pixels of scrolling
    return currentScrollY >= scrollThreshold ? "fade-to-partial " : "";
  };

  const highlightingWord = (word) => {
    const wordIndex = words.indexOf(word);
    const scrollThreshold = wordIndex * 100; //// Changing the font colour for every 100 pixels of scrolling
    return currentScrollY >= scrollThreshold ? "red" : "";
  };

  const changeBackgroundColour = () => {
    if (currentScrollY < 820) {
      btnContainerRef.current?.classList.remove("bg-red");
      btnContainerRef.current?.classList.add("fade-to-zero");
    } else {
      btnContainerRef.current?.classList.add("bg-red");
      btnContainerRef.current?.classList.remove("fade-to-zero");
    }
  };

  const goToMainPage = () => {
    navigate("/main");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // After 2 seconds, set fadeOut to true
      setFadeOut(true);
      // Set another timer for 1 second, set isVisible to false
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 2000);
    //After 3 seconds, the message will disappear from the DOM

    return () => clearTimeout(timer);
  }, []);

  const [buttonText, setButtonText] = useState("Ready to dive in?");

  const handleMouseEnter = () => {
    setButtonText("Absolutely!");
  };

  const handleMouseLeave = () => {
    setButtonText("Ready to dive in?");
  };

  return (
    <div className='homeSection'>
      {isVisible && (
        <span className={`popup-message ${fadeOut ? "fade-to-zero" : ""}`}>
          Scroll Down 👇🏼
        </span>
      )}
      <div className='words-container'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='word-row'
          >
            {row.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={`word ${fadingWordEffect(word)} ${highlightingWord(
                  word
                )}`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div
        className='btn-container'
        ref={btnContainerRef}
      >
        <button
          className='btn-container__logo'
          onClick={goToMainPage}
        >
          <img
            className='btn-container__mainLogoImg'
            src={mainLogoRed}
            alt='mainLogo-btn'
            ref={mainLogoRef}
          />
        </button>
        <button
          className='btn-container__btn'
          onClick={goToMainPage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
        <div className='copyright'>
          <p>© 2024 Gigi Jiwon Ha Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
