import * as actions from "./actionType";

export function addService(name, price) {
  return {type: actions.ADD_SERVICE, payload: [name, price]}
}

export function removeService(id) {
  return {type: actions.REMOVE_SERVICE, payload: {id}}
}

export function changeService(id, name, price) {
  return {type: actions.CHANGE_SERVICE, payload: [id, name, price]}
}

export function changeServiceId(id = '') {
  return {type: actions.CHANGE_SERVICE_ID, payload: id}
}

export function changeFilterQuery(query = '') {
  return {type: actions.CHANGE_FILTER_QUERY, payload: query}
}