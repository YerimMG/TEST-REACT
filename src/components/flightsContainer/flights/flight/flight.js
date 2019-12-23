import React from 'react';
import './flight.scss';

function flight({
  number,
  status,
  originCode,
  originTermial,
  originGate,
  departure,
  arrival,
  destinyCode,
  destTermial,
  destGate
}) {
  return (
    <div className="container1">
      <div className="flight">
        <ul className="headers">
          <div className="left">
            <li className="element">
              <p>{number}</p>
            </li>
            <li className="element">
              <p>{status}</p>
            </li>
          </div>
          <div className="center">
            <li className="element-destiny">
              <h3>{originCode}</h3>
              <p>{originTermial}</p>
              <p>{originGate}</p>
            </li>
            <li className="element">
              <p>{departure}</p>
            </li>
          </div>
          <div className="right">
            <li className="element">
              <p>{arrival}</p>
            </li>
            <li className="element-destiny">
              <h3>{destinyCode}</h3>
              <p>{destTermial}</p>
              <p>{destGate}</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default flight;
