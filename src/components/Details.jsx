import { useParams } from "react-router-dom"
import { Body, Background } from "../style/details";

const Details = ({countries}) => {
    const {id} = useParams()
    const stringId = String(id)

    //! Load fix: If countries data is not available, return an empty div to prevent errors during rendering.
    if (!countries) {
        return <div></div>;
    }

    //* Finding the selected country and its population rank.
    const rankPopulation = [...countries].sort(function(a, b){return b.population - a.population})
    const selectedCountry = countries.find((country) => country.population == stringId)
    const rankIndex =  rankPopulation.indexOf(selectedCountry)
    const currencies = selectedCountry.currencies;
    const languages = selectedCountry.languages;


    //*Filtering countries that have more than one language.
    const languagesArray = []
    for ( let language in languages) {
        languagesArray.push(languages[language])
    }

    //*Filtering countries that have more than one currency.
    const currenciesArray = []
    for (let currency in currencies) {
        currenciesArray.push(currencies[currency].name)
    }

    return (
        <Background>
        <Body>
            <div className="flag-div"> 
                <img src={selectedCountry.flags.png} alt="" />
                <div>
                    <h3> {selectedCountry.name.common}</h3>
                    <p> {selectedCountry.capital}</p>
                </div>
            </div>
            <div className="country-info">
                <div> 
                    <h4>  start of week </h4>
                    <p>{selectedCountry.startOfWeek}</p>
                </div>
                <div>
                    <h4>currencies</h4>
                    {
                        currenciesArray.map((currency, index) => {
                            return <p key={index} >{currency}</p>
                        })
                    }
                </div>
                <div>
                    <h4>region</h4>
                    <p>{selectedCountry.region}</p>
                </div>
                <div>
                    <h4>independent</h4>
                    <p> {selectedCountry.independent ? 'yes' : 'no'} </p>
                </div>
                <div>
                    <h4>languages</h4>
                    {
                        languagesArray.map((language, index) => {
                            return <p key={index} >{language}</p>
                        })
                    }
                </div>
                <div>
                    <h4>subregion</h4>
                    <p>{selectedCountry.subregion}</p>
                </div>
                <div >
                    <h4>population</h4>
                    <p>{selectedCountry.population}</p>
                    
                </div>
                <div >
                    <h4>population rank</h4>
                    <p> {rankIndex+ 1}th rank</p>
                </div>
            </div>
        </Body>
        </Background>
    )
}

export default Details