import { Header, Tittle, SearchBar, List} from "../style/home"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

const Home = ({countries}) => {
    const [q, setQ] = useState('')
    const navigate = useNavigate()

    return (
        <>
            <Header>
                <Tittle> 
                    <i class="fa-solid fa-earth-americas"></i>
                    <h1> Countries & Games</h1>
                </Tittle>
                <SearchBar>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input 
                            type="search" 
                            placeholder="search country, capital or region" 
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                    />
                    <div onClick={() => navigate('GamesPage')}>
                        <i class="fa-solid fa-puzzle-piece"></i>
                        <span style={{fontSize: 16}}>games</span>
                    </div>
                </SearchBar>
            </Header>
            <List>
                <ul>
                    {
                        //* search countries || name , region , capital 
                        countries && countries.filter(country => (
                             (country.name.common.toLowerCase().includes(q)) ||  
                             (country.region.toLowerCase().includes(q)) ||
                             (country.capital && country.capital[0].toLowerCase().includes(q))
                        )).map((country, index) => (
                            country.population > 0 &&
                            <Link to={`Details/${country.population}`}>
                                <li  key={index}>
                                    <img className="flag" src={country.flags.png} alt='flag' />
                                    <div>
                                        <h3 style={{
                                                fontWeight: 600,
                                                marginBottom: 15
                                            }}>{country.name.common}
                                        </h3>
                                        <p> <span>Capital:</span>  {country.capital} </p>
                                        <p> <span>Population:</span>  {country.population} </p>
                                        <p> <span>Region:</span>  {country.region}</p>      
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </List>
        </>
    )
}

export default Home


