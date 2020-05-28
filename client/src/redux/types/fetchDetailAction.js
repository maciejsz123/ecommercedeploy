import { FETCH_DETAIL } from './index';
const axios = require('axios');

export function fetchDetail() {
  return function(dispatch) {
    return axios('/api/details/' + window.location.pathname.slice(9))
    .then( response => {
      dispatch({
        type: FETCH_DETAIL,
        payload: response.data
      })
    })
  }
}
