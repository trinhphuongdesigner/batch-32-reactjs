import { all, fork } from 'redux-saga/effects';
import productSaga from 'store/product/saga';

export default function* rootSaga() {
  yield all([
    fork(productSaga),
  ]);
}