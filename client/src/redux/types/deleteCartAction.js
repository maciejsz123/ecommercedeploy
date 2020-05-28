const axios = require('axios');

export function deleteCart(id) {
  return function(dispatch) {
    let fetchPromise = axios('/api/deleteproduct/cart', {
      method: 'delete',
      data: {
        id: id
      }
    }).then(res => res)
    return fetchPromise;
    /*let fetchPromise = axios('/api/deleteproduct/cart', {
      method: 'delete',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res)
    return fetchPromise;*/
  }
}
