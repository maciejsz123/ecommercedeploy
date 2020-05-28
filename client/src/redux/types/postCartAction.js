const axios = require('axios');

export function postCart(item, size, color) {
  return function(dispatch) {
      let fetchCart = axios('/api/postproducts/cart', {
      method: 'post',
      data: {
        item: item,
        size: size,
        color: color
      }
    })
    return fetchCart;
  }
}
