import React from 'react';
import './form.css';
function Form() {
  return (
    <div className="form-container">
      <div className="form-grup">
        <label htmlFor="">Número de vuelo</label>
        <input type="text" />
      </div>

      <div className="form-grup">
        <label htmlFor="">Fecha de salida</label>
        <input type="date" />
      </div>

      <a href="#">BUSCAR</a>
    </div>
  );
}

export default Form;
