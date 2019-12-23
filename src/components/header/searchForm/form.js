import React, { useState, useContext, useEffect } from 'react';
import './form.scss';
import Input from '../../helpers/TextInput/textInput';
import { Context as AirpostContext } from '../../context/getAirportsData';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import color from '@material-ui/core/colors/amber';
// import Autocomplete from '../../helpers/TextInput/autoComplete/autocomplete';
function Form() {
  let [info, setInfo] = useState({
    origin: '',
    destination: '',
    date: '',
    number: ''
  });

  const {
    state: { allAirport, infoAirports, data },
    getAirports,
    getinfoAirport,
    getFlights
  } = useContext(AirpostContext);

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

  useEffect(() => {
    getAirports();
    getinfoAirport();
  }, []);

  const dataSearch = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const getInfo = e => {
    e.preventDefault();
    getFlights(info);
  };

  return (
    <div className="form-container">
      <form className="group-form" onSubmit={getInfo} autoComplete="off">
        <div>
          <label>Origen | Ver todos</label>
          <Input
            placeholder="Origen"
            type="text"
            name="origin"
            onChange={dataSearch}
          />
        </div>
        <div>
          <button>
            <i className="fas fa-arrows-alt-h fa-x3"> </i>
          </button>
        </div>
        <div>
          <label htmlFor="">Destino | Ver todos</label>
          <Input
            placeholder="Destino"
            type="text"
            name="destination"
            onChange={dataSearch}
          />
        </div>
        <div>
          <label htmlFor="">Fecha de salida</label>
          <select name="date" name="date" onChange={dataSearch}>
            <option value="yesterday">{`${date.getDate() - 1} de ${
              monthNames[month]
            }`}</option>
            <option value="today">{`${date.getDate()} de ${
              monthNames[month]
            }`}</option>
            <option value="tomorrow">{`${date.getDate() + 1} de ${
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
