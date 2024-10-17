import React, { useEffect, useRef, useState } from "react";
import './HomeSection.style.css';
import mainLogo from "../../Assets/mainLogo.png"
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {
  const [rows, setRows] = useState([]);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const mainLogoRef = useRef(null);
  const navigate = useNavigate();

  const words = [
    "curious",
    "persistent",
    "resposible",
    "collaborative",
    "diligent",
    "tech-savvy",
    "creative",
    "gigi",
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
    fadingEffect();
  }, [currentScrollY]);

  console.log("current Y >>", currentScrollY);
  const fadingWordEffect = (word) => {
    const wordIndex = words.indexOf(word);
    const scrollThreshold = (wordIndex + 1) * 100; // 각 단어별로 100px 단위로 페이드
    return currentScrollY >= scrollThreshold ? "fade" : "";
  };

  const fadingEffect = () => {
      if (currentScrollY < 820) {
        mainLogoRef.current?.classList.add("fade");
      } else {
        mainLogoRef.current?.classList.remove("fade");
      }
    };

  const goToMainPage = () => {
    navigate('/main');
  }

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
                className={`word ${word} ${fadingWordEffect(word)}`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className='btn-container'>
        <button onClick={goToMainPage}>
          <img className='btn-container__mainLogo' src={mainLogo} alt="mainLogo-btn" ref={mainLogoRef}/>
        </button>
      </div>
    </div>
  )
}

export default HomeSection
