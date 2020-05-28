import { FETCH_ITEMS } from './index.js';
const axios = require('axios');

export function fetchItems(e) {
  return function(dispatch) {
    let location = window.location.pathname;
    if(e) location = e.target.attributes.href.nodeValue;
    return axios('/api/getproducts' + location)
    .then( (response) => {
      dispatch({
        type: FETCH_ITEMS,
        payload: response.data
      })
    })
  }
}
