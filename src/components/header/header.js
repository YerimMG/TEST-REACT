import React, { useState } from 'react';
import './header.css';
import SeachByDestiny from './searchByDestiny';
import SearchByFly from './searchByFly';

function Header() {
  const [kindSearch, serKindSearch] = useState(true);
  return (
    <div className="header">
      <div className="list-checkbox">
        <ul>
          <li>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              value={true}
              onClick={e => {
                serKindSearch(true);
              }}
            />
            <label> Destino</label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              onClick={e => {
                serKindSearch(false);
              }}
              value={false}
            />

            <label> Numero de Vuelo</label>
          </li>
        </ul>
      </div>
      {kindSearch ? <SeachByDestiny /> : <SearchByFly />}
    </div>
  );
}

export default Header;
