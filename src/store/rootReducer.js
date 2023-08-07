import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import todoReducer from './todo/reducer';
import productReducer from './product/reducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  productReducer,
});

export default rootReducer;
