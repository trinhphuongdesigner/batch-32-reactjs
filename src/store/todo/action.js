import * as ActionTypes from './actionTypes';

export const addMissionAction = (mission) => ({
  type: ActionTypes.ADD_MISSION, // ACTION TYPE
  payload: mission, // PARAMETER
});
