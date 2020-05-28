import { FETCH_FAVORITE } from './index';
const axios = require('axios');

export function fetchFavorite() {
  return function(dispatch) {
    return axios('/api/getproducts/favorite')
    .then( (response) => {
      dispatch({
        type: FETCH_FAVORITE,
        payload: response.data
      })
    })
  }
}
