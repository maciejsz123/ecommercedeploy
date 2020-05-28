const axios = require('axios');

export function postFavorite(id) {
  return function(dispatch) {
      let fetchFav = axios('/api/postproducts/favorite', {
      method: 'post',
      data: {
        id: id
      }
    })
    return fetchFav;
  }
}
