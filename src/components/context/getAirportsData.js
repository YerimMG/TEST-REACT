import createDataContext from './createDataContext';
import axios from 'axios';

const codeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'get_posts':
      return { ...state, data: payload };
    case 'add_error':
      return { ...state, data: payload };
    default:
      return state;
  }
};

const getData = dispatch => async e => {
  try {
    let url = ` https://www.aeromexico.com/cms/api/v1/airports?language=es&status=1`;
    const res = await axios.get(url);
    dispatch({ type: 'get_posts', payload: res.data.airports });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.response.data.message
    });
  }
};

export const { Provider, Context } = createDataContext(
  codeReducer,
  { getData },
  { data: null }
);
