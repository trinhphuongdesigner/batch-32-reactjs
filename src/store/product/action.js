import * as ActionTypes from './actionTypes';

export const getProductsAction = () => ({
  type: ActionTypes.GET_PRODUCTS,
});

export const getProductsSuccessAction = (payload) => ({
  type: ActionTypes.GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailedAction = (number) => ({
  type: ActionTypes.GET_PRODUCTS_FAILED,
});