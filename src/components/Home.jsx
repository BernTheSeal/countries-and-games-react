import { Header, Tittle, SearchBar, List, Profile, Filter} from "../style/home"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Home = ({countries}) => {
    const [q, setQ] = useState('')
    const navigate = useNavigate()
    const [selectedSorting, setSelectedSorting] = useState('Default Sorting')

    const sortingList = [
        {
            sortName:'Default Sorting',
            icon: 'fa-solid fa-sort',
        },
        {
            sortName:'A to Z Order',
            icon: 'fa-solid fa-arrow-down-a-z',   
        },
        {
            sortName:'Z to A Order',
            icon: 'fa-solid fa-arrow-down-z-a',
        },
        {
            sortName:'High to Low',
            icon: 'fa-solid fa-person',
        },
        {
            sortName:'Low to High',
            icon: 'fa-solid fa-person',
        },
    ]

    const search = (country) => {
        const searchQ = q.toLocaleLowerCase().replace(/\s+/g, '').trim()
        return (
            country.name.common.toLowerCase().replace(/\s+/g, '').includes(searchQ) ||
            (country.region && country.region.toLowerCase().replace(/\s+/g, '').includes(searchQ)) ||
            (country.capital && country.capital[0].toLowerCase().replace(/\s+/g, '').includes(searchQ))
        );
    }

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
                            onChange={(e) => (setQ(e.target.value))}
                    />
                    <div onClick={() => navigate('GamesPage')}>
                        <span style={{fontSize: 16}}>Games</span>
                    </div>
                </SearchBar>
                <Filter>
                    <div className="default">
                        <p> {selectedSorting} </p>
                        <i class={"fa-solid fa-sort"}></i>
                    </div>
                    <div className="options">
                        {sortingList.map((sort, i) => (
                            <div onClick={() => (setSelectedSorting(sort.sortName))} style={{cursor:'pointer'}}>
                                <i class={sort.icon}></i>
                                <p>{sort.sortName}</p>
                            </div>
                        ))}
                    </div>
                </Filter>
                <Profile>
                    <a href="https://github.com/BernTheSeal" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </Profile>
            </Header>
            <List>
                <ul>
                {(countries && selectedSorting == 'Default Sorting') && countries
                    .filter((country) => country.population > 0)
                    .filter(search)
                    .map((country, index) => (
                    <Card 
                        flag={country.flags.png} 
                        capital={country.capital} 
                        population={country.population} 
                        region={country.region} 
                        name={country.name.common}
                        navigate={navigate}
                    />
                ))}

                {(countries && selectedSorting === 'A to Z Order') && [...countries]
                    .sort((a,b) => a.name.common.localeCompare(b.name.common))
                    .filter((country) => country.population > 0)
                    .filter(search)
                    .map((country, index) => (
                    <Card 
                        flag={country.flags.png} 
                        capital={country.capital} 
                        population={country.population} 
                        region={country.region} 
                        name={country.name.common}
                        navigate={navigate}
                    />
                ))}

                {(countries && selectedSorting === 'Z to A Order') && [...countries]
                    .sort((a,b) => b.name.common.localeCompare(a.name.common))
                    .filter((country) => country.population > 0)
                    .filter(search)
                    .map((country, index) => (
                    <Card 
                        flag={country.flags.png} 
                        capital={country.capital} 
                        population={country.population} 
                        region={country.region} 
                        name={country.name.common}
                        navigate={navigate}
                    />
                ))}

                {(countries && selectedSorting === 'High to Low') && [...countries]
                    .sort((a,b) => b.population - a.population)
                    .filter((country) => country.population > 0)
                    .filter(search)
                    .map((country, index) => (
                    <Card 
                        flag={country.flags.png} 
                        capital={country.capital} 
                        population={country.population} 
                        region={country.region} 
                        name={country.name.common}
                        navigate={navigate}
                    />
                ))}

                {(countries && selectedSorting === 'Low to High') && [...countries]
                    .sort((a,b) => a.population - b.population)
                    .filter((country) => country.population > 0)
                    .filter(search)
                    .map((country, index) => (
                    <Card 
                        flag={country.flags.png} 
                        capital={country.capital} 
                        population={country.population} 
                        region={country.region} 
                        name={country.name.common}
                        navigate={navigate}
                    />
                ))}
                </ul>
            </List>
        </>
    )
}

const Card = ({flag, capital, population, region, name, navigate}) => {
    return (
        <li onClick={() => navigate(`Details/${parseInt(population)}`)} >
            <img className="flag" src={flag} alt="flag" />
            <div>
                <h3 style={{ fontWeight: 600, marginBottom: 15}}>{name}</h3>
                <p> <span>Capital:</span> {capital} </p>
                <p> <span>Population: </span>{population.toLocaleString()}</p>
                <p> <span>Region:</span> {region} </p>
            </div>
        </li>
    )
}
export default Home


