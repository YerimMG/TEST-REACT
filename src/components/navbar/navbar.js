import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="container">
      <div className="left">
        <div className="logo"></div>
        <div>
          <ul>
            <li>
              <a href="#"> Reserva Tu Viaje</a>
            </li>
            <li>
              <a href="#">Check-In</a>
            </li>
            <li>
              <a href="#">Upgrade</a>
            </li>
            <li>
              <a href="#"> Club Premier</a>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className="right">
        <div className="buttons-secondary">
          <ul>
            <li>
              <a href="#"> Promociones</a>
            </li>
            <li>
              <a href="#">Rastrea Un vuelo</a>
            </li>
            <li>
              <a href="#">Destinos</a>
            </li>
            <li>
              <a href="#">
                Mas <i className="fas fa-caret-down"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="others">
          <div className="letter-icon">
            <i className="far fa-envelope fa-x3"></i>
          </div>
          <div className="flag-icon"></div>
          <div className="sesion">
            <a href="#">Iniciar sesión</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
