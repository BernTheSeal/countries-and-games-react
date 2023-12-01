import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flags, Tittle, Board, GameOver } from "../../style/gamesStyle/flagMatch";

const FlagMatch = ({ countries }) => {
      
  const [flags, setFlags] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [score, setScore] = useState(0)
  const [isFlagClickable, setIsFlagClickable] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [counter, setCounter] = useState(null)
  const [titleColor, setIsTittleColor] = useState('black')
  const navigate = useNavigate()
  
  useEffect(() => {
    if (countries && countries.length > 0) {
      generateRandomFlags()
    }
  }, [countries])
  
  useEffect(() => {
    generateSelectedCountry()
  }, [flags])

  useEffect(() => {
    let interval;
    if (isFlagClickable) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isFlagClickable]);

  useEffect(() => {
    if (counter === 0) {
      setIsGameOver(true);
    }
  }, [counter]);
  
  const generateRandomFlags = () => {
    setIsTittleColor('black')
    setCounter(10)
    setIsGameOver(false)
    setIsFlagClickable(true)
    
    const newFlags = [];
    while (newFlags.length < 4) {
      const randomIndex = Math.floor(Math.random() * countries.length)
      if (!newFlags.includes(countries[randomIndex])) {
        newFlags.push(countries[randomIndex])
      }
    }
    setFlags(newFlags)
  };

  const generateSelectedCountry = () => {    
    const randomIndex = Math.floor(Math.random() * 4)
    const selectedCountry = flags[randomIndex]
    setSelectedCountry(selectedCountry)
  }

  const handleAnswer = (id) => {
    if (!isFlagClickable) {
      return;
    }
    const correctFlagIndex = flags.findIndex(flag => flag === selectedCountry)
    const isCorrect = correctFlagIndex === id
    setIsFlagClickable(false)

    if (isCorrect) {
      setIsTittleColor('green')
      setScore(n => n + 1)
      setTimeout(() => {
        generateRandomFlags()
      }, 2000);  
    } else {
      setIsTittleColor('red')
      setTimeout(() => {
        setIsGameOver(true)
      }, 2000);
    }    
  }

  return (
    <Container>
      {isGameOver && (
        <GameOver>
          <div>
            {selectedCountry.name.common} flags is <img src={selectedCountry.flags.png} alt="" />
          </div>
          <div>
            your score is : {score}
          </div>
          <p>Game Over</p>
          <button onClick={() => {
              setScore(0) 
              generateRandomFlags()
            }
          }>try again</button>

          <button onClick={() => navigate('/GamesPage')}> go game page</button>
        </GameOver>
      )}
      {(!isGameOver) && flags.map((fl, i) => {
        return (
          <Flags
            isFlagClickable={isFlagClickable}
            key={i}
            onClick={() => handleAnswer(i)}
          >
            <div>
              <img src={fl.flags.png} alt="flag" />
            </div>
          </Flags>
        );
      })}

      <Tittle titleColor={titleColor}>
          {selectedCountry ? selectedCountry.name.common : ''}
      </Tittle>
      <Board>
          <div className="score">score: {score}</div>
          <div className="counter">{counter}</div>
      </Board>
    </Container>
  );
};

export default FlagMatch;
