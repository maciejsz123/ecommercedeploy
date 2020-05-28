import {FETCH_FAVORITE, FETCH_COLORS, FETCH_ITEMS, FETCH_CART, FETCH_DETAIL, SORT} from '../types';

const initialState = {
  items: [],
  itemColors: [],
  favoriteItems: [],
  cartItems: [],
  itemDetail: {},
  sortItemsBy: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_COLORS:
      return {
        ...state,
        itemColors: action.payload
      }
    case FETCH_FAVORITE:
      return {
        ...state,
        favoriteItems: action.payload
      }
    case FETCH_CART:
      return {
        ...state,
        cartItems: action.payload
      }
    case FETCH_DETAIL:
      return {
        ...state,
        itemDetail: action.payload
      }
    case SORT:
      return {
        ...state,
        sortItemsBy: action.payload
      }
    default:
      return state;
  }
}
