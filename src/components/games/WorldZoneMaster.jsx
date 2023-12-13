import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GamePageContainer, GameOverContainer } from "../../style/gamesStyle/worldZoneMaster";

const WorldZoneMaster = ({countries}) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [allSubregion, setAllSubregion] = useState([])
    const [score, setScore] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)
    const navigate = useNavigate()
    const storedScore = localStorage.getItem('WorldZoneMasterHighScore') || 0;
    const [highScore, setHighScore] = useState(parseInt(storedScore, 10))
    const [isFlagClickable, setIsFlagClickable] = useState(true)
    
    useEffect(() => {
        if (countries && countries.length > 0) {
            handleSelectedCountry()
            getRegions()
        }
    }, [countries])

    useEffect(()=> {
        if( score > highScore) {
            localStorage.setItem('WorldZoneMasterHighScore', score.toString());
        }
    },[score])

    const handleSelectedCountry = () => {
        setIsFlagClickable(true)
        let randomCountry
        do {
            const randomIndex = Math.floor(Math.random() * countries.length);
            randomCountry = countries[randomIndex];
        } while (!randomCountry.subregion);
        setSelectedCountry (randomCountry)
        setScore(0)
        setIsGameOver(false)
    }

    const handleNextCountry = () => {
        setIsFlagClickable(true)
        let randomCountry
        do {
            const randomIndex = Math.floor(Math.random() * countries.length);
            randomCountry = countries[randomIndex];
        } while (!randomCountry.subregion);
        setSelectedCountry (randomCountry)
        setIsGameOver(false)
    }

    const getRegions = () => {
        const newArr = []
        for (let key of countries) {
            if (!newArr.includes(key.subregion) && (key.subregion !== undefined)) {
                newArr.push(key.subregion)
            }
        }
        setAllSubregion(newArr)
    }

    const handleAnswer = (subregion) => {
        if (!isFlagClickable) {
            return;
        }

        setIsFlagClickable(false)
        if (subregion === selectedCountry.subregion) {
            setScore(n => n +1)
            setTimeout(() => {
                handleNextCountry()
            }, 1500);
            
        } else {
            setTimeout(() => {
                setIsGameOver(true)
            }, 1500);
        }
    }

    return (
        <>
            {isGameOver && (<GameOverPage  navigate={navigate} score={score} country={selectedCountry}  func={handleSelectedCountry} />)}
            {!isGameOver && (<GamePage selectedCountry={selectedCountry} allSubregion={allSubregion} score={score} func={handleAnswer} />)} 
        </>
    )
}

const GamePage = (props) => {
    return (
        <GamePageContainer>
            <div className="subregions-buttons">
                {props.allSubregion && props.allSubregion.map((subregion, i) => {
                return (<div data={subregion} className={`subregion ${(subregion && subregion.replace(/\s+/g, '').toLowerCase())}`} onClick={() => props.func(subregion)} key={i}></div>) 
                })}
            </div>
            <div className="country-info">
                <img titleColor={props.titleColor} src={props.selectedCountry && props.selectedCountry.flags.png} alt="flag" />
                <p>{props.selectedCountry && props.selectedCountry.name.common}</p>
            </div>
            <div className="score">
                <p>score: {props.score}</p>
            </div>  
        </GamePageContainer>
    )
}

const GameOverPage = ({func, score, country, navigate}) => {
    return (
        <GameOverContainer>
            <div className="game-over-container">
                <div className="game-over-info">
                    <div className="game-over">Game Over :(</div>
                    <div className="country">
                        <div >
                            {country.name.common} is in <span style={{fontWeight:400}}>{country.subregion}</span>
                        </div>
                    </div>
                    <div className="game-over-score">
                       score  <span> {score} </span> 
                    </div>
                    <div className="game-over-buttons">
                        <div onClick={func}> <i class="fa-solid fa-rotate-right"></i> try again</div>
                        <div onClick={() => navigate('/GamesPage')}><i class="fa-solid fa-arrow-left"></i>Games Menu</div>
                    </div>
                </div>
            </div>
        </GameOverContainer>
    )
}


export default WorldZoneMaster;