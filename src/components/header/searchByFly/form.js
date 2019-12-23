import React, { useState, useContext } from 'react';
import './form.scss';
import Input from '../../helpers/TextInput/textInput';
import { Context as AirpostContext } from '../../context/getAirportsData';

function Form() {
  let [info, setInfo] = useState({
    origin: '',
    destination: '',
    date: '',
    number: ''
  });

  const { state, getFlights } = useContext(AirpostContext);

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

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

  const dataSearch = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const getData = e => {
    e.preventDefault();
    getFlights(info);
  };

  return (
    <div className="form-container">
      <form className="group-form" onSubmit={getData}>
        <div>
          <label htmlFor="">Número de vuelo</label>
          <Input
            placeholder="Origen"
            type="text"
            name="number"
            onChange={dataSearch}
          />
        </div>

        <div>
          <label>Fecha de salida</label>
          <select
            name="date"
            defaultValue={{ label: day, value: `${year}-12-${day}` }}
            onChange={dataSearch}
          >
            <option value=""></option>
            <option value={`${year}-12-${day - 1}`}>{`${day - 1} de ${
              monthNames[month]
            }`}</option>
            <option
              value={`${year}-12-${day}`}
            >{`${day} de ${monthNames[month]}`}</option>
            <option value={`${year}-12-${day + 1}`}>{`${day + 1}  de ${
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
