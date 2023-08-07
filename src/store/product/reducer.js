import * as ActionTypes from './actionTypes';

const defaultState = {
  isLoading: false,
  products: [],
  total: 0,
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, isLoading: true };

    case ActionTypes.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        total: action.payload.total,
      };
    }

    case ActionTypes.GET_PRODUCTS_FAILED:
      return { ...defaultState };

    default:
      return state;
  }
};

export default productReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
