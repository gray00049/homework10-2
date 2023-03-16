import { CHANGE_FILTER_QUERY } from "../actions/actionType";

const initialState = ''

export default function filterReducer(state = initialState, action) {
  return action.type == CHANGE_FILTER_QUERY ? action.payload : state
}