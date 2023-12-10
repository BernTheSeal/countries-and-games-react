import { useNavigate } from "react-router-dom";
import { Body, Games, Header } from "../style/gamesPage";
const flagMatchScore = localStorage.getItem('flagMatchHighScore') || 0;
const populationShowdownScore = localStorage.getItem('PopulationShowdownHighScore') || 0;

const games = [
    {
        title: 'Flag Match',
        icon: 'fa-solid fa-flag-usa',
        link: '/FlagMatch',
        score: flagMatchScore
    },
    {
        title: 'Population Showdown',
        icon: 'fa-solid fa-person',
        link: '/PopulationShowdown',   
        score: populationShowdownScore
    }
]

const GamesPage = () => {
    return (
        <Body >
            <Header>
                <h3> <i class="fa-solid fa-gamepad"> </i>Games</h3>
                <div>
                    <a href="/"> 
                        <i class="fa-solid fa-globe"></i>
                    </a>
                </div>
            </Header>
            <Games>
                {games.map((game, i) => {
                    return ( <Game name={game.title} icon={game.icon} go={game.link} score={game.score}  />)
                })}
            </Games>
        </Body>
    )
}
export default GamesPage

const Game = ({name, icon, go, score}) => {
    const navigate = useNavigate()
    return (
        <div  onClick={() => navigate(go)}  >
            <p style={{fontSize:20}}>
                <i class={icon} style={{marginRight:40, fontSize:25}}></i>
                {name}    
            </p>
            <p className="high-score">
                <p>High Score</p>
                <p >{score}</p>
            </p>
            <p> <i class="fa-solid fa-play" style={{fontSize:20}}></i> </p>
        </div>
    )
}



