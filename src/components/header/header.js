import React, { useState, Fragment, useContext } from 'react';
import './header.scss';
import SeachForm from './searchForm/form';
import SearchByFly from './searchByFly/form';
import Flights from '../flightsContainer/flights/flights';
import { Context as AirpostContext } from '../context/getAirportsData';

const Header = () => {
  const [kindSearch, setKindSearch] = useState(true);

  const {
    state: { flights },
    getAirports
  } = useContext(AirpostContext);
  return (
    <Fragment>
      <header className="header">
        <div className="header-container">
          <form className="list-inputs">
            <div className="input">
              <input
                type="radio"
                name="kindOfSearch"
                onClick={e => {
                  setKindSearch(true);
                }}
              />
              <label name="kindOfSearch"> Destino</label>
            </div>
            <div className="input">
              <input
                type="radio"
                name="kindOfSearch"
                onClick={e => {
                  setKindSearch(false);
                }}
              />
              <label name="kindOfSearch"> Numero de Vuelo</label>
            </div>
          </form>
          {kindSearch ? <SeachForm /> : <SearchByFly />}
        </div>
      </header>
      {flights ? <Flights /> : <div></div>}
    </Fragment>
  );
};

export default Header;
