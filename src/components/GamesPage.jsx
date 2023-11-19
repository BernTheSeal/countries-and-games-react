import { useNavigate } from "react-router-dom";
import { Body, GamesPanel, Header } from "../style/gamesPage";

const GamesPage = () => {
    return (
        <Body >
            <Header>
                <h3 > <i class="fa-solid fa-gamepad"></i>Games & Quizzes</h3>
                <div>
                    <a href="https://github.com/BernTheSeal" target="_blank"> 
                        <i class="fa-brands fa-github fa-bounce"></i>
                    </a>
                </div>
            </Header>
            <GamesPanel>
                <Game 
                   
                    name={"Flag Match"} 
                    iTag={"fa-solid fa-flag-usa"} 
                    go={'/FlagMatch'}
                />
                <Game 
                    name={"Population Showdown"} 
                    iTag={"fa-solid fa-person"} 
                    go={'/PopulationShowdown'}
                />
            </GamesPanel>
        </Body>
    )
}

const Game = ({name, iTag, go}) => {
    const navigate = useNavigate()
    return (
        <div  onClick={() => navigate(go)}  >
            <p style={{fontSize:20}}>
                <i class={iTag} style={{marginRight:40, fontSize:25}}></i>
                {name}    
            </p>
            <p>
                <i class="fa-solid fa-play" style={{fontSize:20}}></i>
            </p>
        </div>
    )
}

export default GamesPage