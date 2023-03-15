import { CHANGE_SERVICE_ID } from "../actions/actionType";

const initialState = '';

export default function changeServiceIdReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SERVICE_ID:
      return action.payload
    default:
      return state
  }
}