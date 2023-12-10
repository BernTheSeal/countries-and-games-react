import { useEffect, useState } from "react"
import { Container } from "../../style/gamesStyle/populationShowdown"
import { useNavigate } from "react-router-dom";

const PopulationsShowdown = ({countries}) => {
    const storedScore = localStorage.getItem('PopulationShowdownHighScore') || 0;
    const [highScore, setHighScore] = useState(parseInt(storedScore, 10))
    const navigate = useNavigate()
    const [twoCountries, setTwoCountries] = useState(null)
    const [score, setScore] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)
    const [isClick, setIsClick] = useState(null)   
    const [clickable, setClickable] = useState(true)

    useEffect(() => {
        if(score > highScore) {
          localStorage.setItem('PopulationShowdownHighScore', score.toString());      
        }
    }, [score])
    
    useEffect(() => {
        if (countries && countries.length > 0) {
            generateTwoCountry()
        }
    }, [countries])

    const generateTwoCountry = () => {
        setIsClick(false)
        setClickable(true)
        setIsGameOver(false)
        setScore(0)
        const array = []
        while (array.length < 2) {
            const randomIndex = Math.floor(Math.random() * countries.length)
            if (!array.includes(countries[randomIndex])) {
                array.push(countries[randomIndex])
            }
        }
        setTwoCountries(array)
    }

    const handleAnswer = (answer) => {
        if (!clickable) {
            return;
        }
        setIsClick(true)
        setClickable(false)
        if ((answer === 'higher' && twoCountries[1].population >= twoCountries[0].population) || 
            (answer === 'lower' && twoCountries[1].population <= twoCountries[0].population)) {
            setScore(n => n + 1)
            setTimeout(() => {getNextCountry()},1500)
        } else {
            setTimeout(() => {setIsGameOver(true)},1500)            
        }
    }

    const getNextCountry = () => {
        setIsClick(false)
        setClickable(true)
        const array = []
        while (array < 1) {
            const randomIndex = Math.floor(Math.random() * countries.length)
            if (!twoCountries.includes(countries[randomIndex])) {
                array.push(countries[randomIndex])
            }
        }
        array.unshift(twoCountries[1])
        setTwoCountries(array)
    }
    
    return (
        <Container>
            {isGameOver && (<GameOverPage func={generateTwoCountry} score={score} twoCountries={twoCountries} navigate={navigate}/>)}
            {!isGameOver && (<GamePage func={handleAnswer} twoCountries={twoCountries} score={score} isClick={isClick} />)}
        </Container>
    )
}

const GamePage = ({twoCountries, func, score, isClick}) => {
    console.log(isClick)
    return (
        <>
            <div className="vs">
                VS
            </div>
            <div className="score">
                score: <span>{score}</span> 
            </div>
            <div className="country-a countries">
                <div className="info">
                    <img src={twoCountries && twoCountries[0].flags.png} alt="" />
                    <div>
                        <h2>{twoCountries && twoCountries[0].name.common}</h2>
                        <div className="population">{twoCountries && twoCountries[0].population.toLocaleString()}</div>
                    </div>
                </div>                
            </div>
            <div className="country-b countries">
                <div className="info">  
                    <img src={twoCountries && twoCountries[1].flags.png} alt="" />
                    <div>
                        <h2>{twoCountries && twoCountries[1].name.common}</h2>
                        <div className="population">
                            {isClick && isClick ? (twoCountries && twoCountries[1].population.toLocaleString()) : '???' }
                        </div>
                    </div>
                    <div className="buttons">
                        <div className={`${ isClick ? 'isClickTrue' : 'isClickFalse' }`} onClick={() => {func('higher')}}>
                            <p style={{top: 23}}  className="icon"><i class="fa-solid fa-sort-up"></i></p>
                            <p>Higher</p>
                        </div>
                        <div className={`${ isClick ? 'isClickTrue' : 'isClickFalse' }`} onClick={() => {func('lower')}}>
                            <p  style={{bottom: 23}}  className="icon"><i class="fa-solid fa-sort-down"></i></p>
                            <p>lower</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

const GameOverPage = ({func, score, twoCountries, navigate }) => {
    return (
        <>
            <div className="game-over-container">
                <div className="game-over-info">
                    <div className="game-over">Game Over :(</div>
                    <div className="last-countries">
                        <div>
                            <img src={twoCountries[0].flags.png} alt="" />
                            <p>{twoCountries[0].name.common}</p>
                            <div style={{fontWeight:400, fontSize:30, marginTop:10 }}>{twoCountries[0].population.toLocaleString()}</div>
                        </div>
                        <div>
                            <img src={twoCountries[1].flags.png} alt="" />
                            <p>{twoCountries[1].name.common}</p>
                            <div style={{fontWeight:400, fontSize:30, marginTop:10  }}>{twoCountries[1].population.toLocaleString()} </div>
                        </div>
                    </div>
                    <div className="game-over-score">
                       score  <span> {score}</span> 
                    </div>
                    <div className="game-over-buttons">
                        <div onClick={func}> <i class="fa-solid fa-rotate-right"></i> try again</div>
                        <div onClick={() => navigate('/GamesPage')}><i class="fa-solid fa-arrow-left"></i>Games Menu</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopulationsShowdown