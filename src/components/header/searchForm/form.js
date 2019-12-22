import React from 'react';
import './form.scss';
import Input from '../../helpers/TextInput/textInput';
function Form() {
  let date = new Date();
  let month = date.getMonth();
  const monthNames = [
    'Enero',
    'Febereo',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octobre',
    'Noviembre',
    'Diciembre'
  ];

  return (
    <div className="form-container">
      <form className="group-form">
        <div>
          <label htmlFor="">Origen | Ver todos</label>
          <Input placeholder="Origen" type="text" />
        </div>
        <div>
          <button>
            <i className="fas fa-arrows-alt-h fa-x3"> </i>
          </button>
        </div>
        <div>
          <label htmlFor="">Destino | Ver todos</label>
          <Input placeholder="Destino" type="text" />
        </div>

        <div>
          <label htmlFor="">Fecha de salida</label>
          <select name="date">
            <option value="volvo">{`${date.getDate() - 1} de ${
              monthNames[month]
            }`}</option>
            <option value="volvo" selected="selected">{`${date.getDate()} de ${
              monthNames[month]
            }`}</option>
            <option value="saab">{`${date.getDate() + 1} de ${
              monthNames[month]
            }`}</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Buscar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
