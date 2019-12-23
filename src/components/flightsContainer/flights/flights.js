import React, { useContext } from 'react';
import './flights.scss';
import Flight from './flight/flight';
import { Context as AirpostContext } from '../../context/getAirportsData';

function useFlights() {
  const {
    state: { flights },
    getAirports
  } = useContext(AirpostContext);

  return (
    <div className="container1">
      <div className="list-flights">
        <ul className="headers">
          <div className="left">
            <li className="element">
              <p>Número de vuelo</p>
            </li>
            <li className="element">
              <p>Estado</p>
            </li>
          </div>
          <div className="center">
            <li className="element">
              <p>Origen</p>
            </li>
            <li className="element">
              <p>Hora de salida</p>
            </li>
          </div>
          <div className="right">
            <li className="element">
              <p>Hora de llegada</p>
            </li>
            <li className="element">
              <p>Destino</p>
            </li>
          </div>
        </ul>
        <Flight
          number={'995'}
          status={'A tiempo'}
          originCode={'CUN'}
          originTermial={'1TER'}
          originGate={'4AB'}
          departure={'09:10'}
          arrival={'13:30'}
          destinyCode={'USA'}
          destGate={'1TER'}
          destTermial={'1TER'}
        />
      </div>
    </div>
  );
}

export default useFlights;
