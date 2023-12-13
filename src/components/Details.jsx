import { useParams } from "react-router-dom"
import { Container } from "../style/details";

const Details = ({countries}) => {
    const {id} = useParams()
    const stringId = String(id)

    if (!countries) {
        return <div></div>;
    }

    const rankPopulation = [...countries].sort(function(a, b){return b.population - a.population})
    const selectedCountry = countries.find((country) => country.population == stringId)
    const rankIndex =  rankPopulation.indexOf(selectedCountry)
    const currencies = selectedCountry.currencies;
    const languages = selectedCountry.languages;
    const wikiLink = selectedCountry.name.common.replace(/ /g, '_');
    const isIndependent = selectedCountry.independent
    
    const languagesArray = []
    for ( let language in languages) {
        languagesArray.push(languages[language])
    }

    const currenciesArray = []
    for (let currency in currencies) {
        currenciesArray.push(currencies[currency].name)
    }

    return (
        <Container>
            <div className="details">
                <div className="flag"> 
                    <img src={selectedCountry.flags.png} alt="" />
                    <div className="name">
                        <div>
                            <h3> {selectedCountry.name.common}</h3>
                            <p> {selectedCountry.capital}</p>
                        </div>
                        <div className="wiki">
                            <p>much more</p>
                            <a target="_blank" href={`https://en.wikipedia.org/wiki/${wikiLink}`}><i class="fa-brands fa-wikipedia-w"></i>  </a>
                        </div>
                    </div>
                </div>
                
                <div className="info">
                    <div className="languages">
                        <h3>Languages</h3>
                        <div>
                            {languagesArray.map((lang,i) => {
                                return <p>{i+1}- {lang}</p>
                            })}
                        </div>
                        <i class="fa-solid fa-comments"></i>
                    </div>
                    <div className="population">
                        <div className="population_value">
                            <h3>Population</h3>
                            <p>{selectedCountry.population.toLocaleString()}</p>
                            <i class="fa-solid fa-person"></i>
                        </div>
                        <div className="population_rank">
                            <h3>Population Rank</h3>
                            <p>{rankIndex + 1}</p>
                            <i class="fa-solid fa-crown"></i>
                        </div>
                    </div>
                    <div className="regions">
                        <div className="region">
                            <h3>Region</h3>
                            <p>{selectedCountry.region}</p>
                            <i class="fa-solid fa-earth-europe"></i>
                        </div>
                        <div className="subregion"> 
                            <h3>Subregion</h3>
                            <p>{selectedCountry.subregion}</p>
                            <i class="fa-solid fa-globe"></i>
                        </div>
                    </div>
                    <div className="independent-week">
                        <div className="independent">
                            <h3>Independent</h3>
                            <p>{isIndependent ? (<i class="fa-solid fa-thumbs-up"></i>) : (<i class="fa-solid fa-thumbs-down"></i>)}</p>
                            <i class="fa-solid fa-pencil"></i>
                        </div>
                        <div className="start-of-week">
                            <h3>Start of Week</h3>
                            <p>{selectedCountry.startOfWeek}</p>
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                    </div>
                    <div className="currencies">
                        <h3>Currencies</h3>
                        <div>
                            {currenciesArray.map((cur,i) => {
                                return <p>{i+1}- {cur}</p>
                            })} 
                        </div>
                        <i class="fa-solid fa-coins"></i>
                    </div>
                </div>
            </div>
            
        </Container>
        
    )
}

export default Details