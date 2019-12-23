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
        </ul>{' '}
        {flights.map(flight => (
          <Flight
            number={flight._collection[0].segment.marketingFlightCode}
            status={flight._collection[0].status}
            originCode={flight._collection[0].segment.departureAirport}
            originTermial={flight._collection[0].boardingTerminal}
            originGate={flight._collection[0].boardingGate}
            departure={flight._collection[0].boardingTime}
            arrival={flight._collection[0].boardingTime}
            destinyCode={flight._collection[0].segment.arrivalAirport}
            destGate={flight._collection[0].arrivalGate}
            destTermial={flight._collection[0].arrivalTerminal}
          />
        ))}
      </div>
    </div>
  );
}

export default useFlights;
