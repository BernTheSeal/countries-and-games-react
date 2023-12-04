import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flags, Tittle, Board, GameOver, ContainerGameOver } from "../../style/gamesStyle/flagMatch";

const FlagMatch = ({ countries }) => {
  const storedScore = localStorage.getItem('flagMatchHighScore') || 0;
  const [flags, setFlags] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [score, setScore] = useState(0)
  const [isFlagClickable, setIsFlagClickable] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [counter, setCounter] = useState(null)
  const [titleColor, setIsTittleColor] = useState('black')
  const [highScore, setHighScore] = useState(parseInt(storedScore, 10))
  const navigate = useNavigate()

  useEffect(() => {
    if(score > highScore) {
      localStorage.setItem('flagMatchHighScore', score.toString());      
    }
  }, [score])
  
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
      interval = setInterval(() => {setCounter((prevCounter) => prevCounter - 1) }, 1000);
    }
    return () => clearInterval(interval)
  }, [isFlagClickable])

  useEffect(() => {
    if (counter === 0) {
      setIsGameOver(true)
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
      setTimeout(() => {generateRandomFlags()}, 2000)
    } else {
      setIsTittleColor('red')
      setTimeout(() => {setIsGameOver(true) }, 2000)
    }    
  }
  return (
    <Container>
      {isGameOver && (
        <GameOver>
          <ContainerGameOver>
            <div className="game-over">Game Over :(</div>
            <div className="country-info">
              <div>
                <span style={{fontWeight:400}}> {selectedCountry.name.common}</span>'s flag is
              </div>
              <img src={selectedCountry.flags.png} alt="" />
            </div>
            <div className="score">
              <p> Score <span style={{fontSize:50, fontWeight:300}}> {score} </span> </p>
            </div>
            <div className="buttons">
              <div onClick={() => {
                  setScore(0) 
                  generateRandomFlags()
                }
              }> <i class="fa-solid fa-rotate-right"></i>  Try Again</div>
              <div onClick={() => navigate('/GamesPage')}> <i class="fa-solid fa-arrow-left"></i> Games Menu</div>
            </div>
          </ContainerGameOver>        
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
