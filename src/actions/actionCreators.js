import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE, CHANGE_SERVICE_ID } from "./actionType";

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: [name, price]}
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}}
}

export function changeService(id, name, price) {
  return {type: CHANGE_SERVICE, payload: [id, name, price]}
}

export function changeServiceId(id = '') {
  return {type: CHANGE_SERVICE_ID, payload: id}
}