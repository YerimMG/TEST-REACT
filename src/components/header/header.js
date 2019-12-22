import React, { useState } from 'react';
import './header.scss';
import SeachForm from './searchForm/form';
import SearchByFly from './searchByFly/form';
function Header() {
  const [kindSearch, setKindSearch] = useState(true);
  return (
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
  );
}

export default Header;
