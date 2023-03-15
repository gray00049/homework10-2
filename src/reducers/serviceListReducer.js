import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE} from '../actions/actionType';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 2500},
  {id: nanoid(), name: 'Замена батареи', price: 3000}
];

export default function serviceListReducer(state = initialState, action) {
  if (action.type == ADD_SERVICE) {
    const [name, price] = action.payload;
    return [...state, {id: nanoid(), name: name, price: Number(price)}]
  } else if (action.type == REMOVE_SERVICE) {
    const {id} = action.payload;
    return state.filter(service => service.id !== id);
  } else if (action.type == CHANGE_SERVICE) {
    const [id, name, price] = action.payload;
    return state.map(item => {
      if (item?.id == id) {
        return {
          id: id,
          name: name,
          price: price
        }
      } else {
        return item
      }
    })
  } else {
    return state;
  }
}