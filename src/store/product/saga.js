import { put, takeLeading } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { getProductsFailedAction, getProductsSuccessAction } from './action';
import { axiosClient } from "helper/axiosClient";

  const getProductList = async () =>{
    const response = await axiosClient.get('/user/products');

    return {
      ...response.data,
    };
  };

function* getProducts() {
  try {
    const response = yield getProductList();

    const { payload: products, total } = response;

    yield put(getProductsSuccessAction({ products, total }));
  } catch (error) {
    yield put(getProductsFailedAction());
  }
}

export default function* productSaga() {
  yield takeLeading(ActionTypes.GET_PRODUCTS, getProducts);
};