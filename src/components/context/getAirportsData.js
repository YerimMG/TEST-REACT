import createDataContext from './createDataContext';
import axios from 'axios';

const codeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'get_airports':
      return { ...state, allAirport: payload };
    case 'get_infoAirports':
      return { ...state, infoAirports: payload };
    case 'get_Flights':
      return { ...state, flights: payload };
    case 'add_error':
      return { ...state, data: payload };
    default:
      return state;
  }
};

const getAirports = dispatch => async e => {
  try {
    let url = ` https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1`;
    const res = await axios.get(url);
    dispatch({ type: 'get_airports', payload: res.data.airports });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err
    });
  }
};
const getinfoAirport = dispatch => async e => {
  try {
    let url = `https://www.aeromexico.com/api/v1/airports?store=mx&pos=WEB`;
    const res = await axios.get(url);
    dispatch({ type: 'get_infoAirports', payload: res.data._collection });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err
    });
  }
};

const getFlights = dispatch => async doc => {
  try {
    let url = `https://mad.amlab7.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=${doc.number}&date=${doc.date}origin=${doc.origin}&destination=${doc.destination}`;
    const res = await axios.get(url);
    dispatch({ type: 'get_Flights', payload: res.data._collection });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err
    });
  }
};

export const { Provider, Context } = createDataContext(
  codeReducer,
  { getAirports, getinfoAirport, getFlights },
  { allAirport: null, infoAirports: null, data: null, flights: null }
);
