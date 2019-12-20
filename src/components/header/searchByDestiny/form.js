import React from 'react';
import './form.css';
function Form() {
  return (
    <div className="form-container">
      <div className="form-grup">
        <label htmlFor="">Origen | Ver todos</label>
        <input type="text" />
      </div>

      <button>
        <i class="fas fa-arrows-alt-h fa-x3"></i>
      </button>

      <div className="form-grup">
        <label htmlFor="">Destino | Ver todos</label>
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
