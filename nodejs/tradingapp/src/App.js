
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Indicator from './Components/Indicator';
import Peers from './Components/Peers';
import CreditRatings from './Components/CreditRatings';
import LatestUpdates from './Components/LatestUpdates';
import  Gdp  from './Components/Gdp';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Ipo from './Components/Ipo';
import StockSplit from './Components/StockSplit';
import EarningRevenues from './Components/EarningRevenues';
import PointInTime from './Components/PointInTime';

function App() {
  const [mode, setMode] = useState('light')
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [indicatorType, setIndicatorType] = useState("");
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      
    }
  }
  return (
   
    <>

      <Router>
        <Navbar title="Trading App" mode={mode} toggleMode={toggleMode} setSearchQuery={setSearchQuery} setSelectedCountry={setSelectedCountry}  setIndicatorType={setIndicatorType}/>
        
        <div className="container my-3">
          <Routes>
           
            <Route path="/indicators" element={<Indicator  searchQuery={searchQuery} selectedCountry={selectedCountry} indicatorType={indicatorType}/>} />
            <Route path="/peers" element={<Peers selectedCountry={selectedCountry} />}  />
            <Route path="/creditratings" element={<CreditRatings selectedCountry={selectedCountry}/>} />
            <Route path="/latestupdates" element={<LatestUpdates selectedCountry={selectedCountry}/>} />
            <Route path="/ipo" element={<Ipo selectedCountry={selectedCountry} />}  />
            <Route path="/stocksplit" element={<StockSplit selectedCountry={selectedCountry} />}  />
            <Route path="/earningrevenues" element={<EarningRevenues selectedCountry={selectedCountry} />}  />
            <Route path="/pointintime" element={<PointInTime selectedCountry={selectedCountry} />}  />
            <Route path="/gdp" element={<Gdp  searchQuery={searchQuery} selectedCountry={selectedCountry}/>} />
          </Routes>
        </div>
      </Router>

     
    </>
  );
}

export default App;
