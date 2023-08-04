import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  missions: [],
  isLoadingAdd: false,
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MISSION: {
      return { ...state, isLoadingAdd: true };
    }

    case ActionTypes.ADD_MISSION_SUCCESS: {
      const newData = [
        ...state.missions,
        {
          id: Math.floor(Date.now()),
          name: action.payload,
        }
      ];

      return { ...state, missions: newData, isLoadingAdd: false };
    }

    case ActionTypes.ADD_MISSION_FAILED: {
      return { ...state, isLoadingAdd: false };
    }

    default:
      return state;
  }
};

export default todoReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
