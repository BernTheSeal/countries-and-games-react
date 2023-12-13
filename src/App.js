import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Details from "./components/Details"
import GamesPage from './components/GamesPage';
import FlagMatch from './components/games/FlagMatch';
import PopulationsShowdown from './components/games/PopulationShowdown';
import WorldZoneMaster from './components/games/WorldZoneMaster';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState(false)
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then( res => {
        if (res.ok && res.status === 200) {
          return res.json()
        }
      })
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home countries={countries} />} />
        <Route path="/Details/:id" element={<Details countries={countries} />} />
        <Route path="/GamesPage" element={<GamesPage countries={countries} />} />
        <Route path="/FlagMatch" element={<FlagMatch countries={countries} />} />
        <Route path="/PopulationShowdown" element={<PopulationsShowdown countries={countries}/>} />
        <Route path="/WorldZoneMaster" element={<WorldZoneMaster countries={countries}/>} />
      </Routes>
    </Router>
  );
}

export default App;
