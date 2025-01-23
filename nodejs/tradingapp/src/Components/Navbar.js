import React from "react";
import PropTypes from "prop-types";
import { Link ,useLocation} from "react-router-dom";

export default function Navbar(props) {
  const countries = ["All","Mexico", "sweden", "New Zealand", "Thailand", "India","Angola","Canada","Russia","Israel","United States","Italy","France","Ghana","Guinea","Macedonia","China","Kuwait","Euro Area","Germany","Croatia","Mongolia","Greece","Spain","South Africa","Korea"]; // Add your country list here

   
  const location = useLocation(); 
  
  

  const handleCountryChange = (e) => {
    props.setSelectedCountry(e.target.value); // Update the parent state with the selected country
  };
  
 
  
  
  return (
    <div>
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gdp">
                Gdp
              </Link>
            </li>
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Indicators
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/peers">Peers</Link>
                
                </li>
                <li>
                <Link className="dropdown-item" to="/creditratings">Credit Ratings</Link>
                
                </li>
                <li>
                <Link className="dropdown-item" to="/latestupdates">Latest Updates</Link>
                
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Financials
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ipo">Ipo</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stocksplit">Stock Split</Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/earningrevenues">Earning Revenues</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Economic Calenders
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    iCalender
                  </a>
                </li>
                <li>
                <Link className="dropdown-item" to="/pointintime">Point In Time</Link>
                </li>
              </ul>
            </li>

          </ul>
          <div className="d-flex">
            <select
              className="form-select me-2"
              aria-label="Select Country"
              onChange={handleCountryChange}
              defaultValue="Mexico"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          
        </div>
      </div>
    </nav>
    {location.pathname === "/" && (
        <div className="navbar-image-container">
          <img src={require('../Images/tradingimage.png')}
                                width='1440'
                                height='756'
                                alt='Book'
                            />
        </div>
      )}
    </div>
    
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  setSelectedCountry: PropTypes.func.isRequired,
  setIndicatorType: PropTypes.func.isRequired,
};





