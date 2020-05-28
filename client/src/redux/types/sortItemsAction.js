import { SORT } from './index';

export function sortItems(sortBy) {
  return function(dispatch) {
    dispatch({
      type: SORT,
      payload: sortBy
    })
  }
}
