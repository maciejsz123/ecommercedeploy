import { FETCH_CART } from './index';
const axios = require('axios');

export function fetchCart() {
  return function(dispatch) {
    let fetchCart =  axios('/api/getproducts/cart')
    .then( (response) => {
      dispatch({
        type: FETCH_CART,
        payload: response.data
      })
    })
    return fetchCart;
  }
}
