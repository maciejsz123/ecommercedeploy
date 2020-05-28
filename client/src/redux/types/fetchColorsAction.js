import { FETCH_COLORS } from './index';
const axios = require('axios');

export function fetchColors() {
  return function(dispatch) {
    axios('/api/getcolors')
    .then( (response) => {
      dispatch({
        type: FETCH_COLORS,
        payload: response.data
      })
    })

  }
}
