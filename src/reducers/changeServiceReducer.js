import { CHANGE_SERVICE } from "../actions/actionType";

const initialState = {
  id: '',
  name: '',
  price: ''
}

export default function changeServiceReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE:
      const [id, name, price] = action.payload;
      console.log(services)
      return state.map(item => {
        if (item?.id == id) {
          item.name = name;
          item.price = price;
        }
      })
    default:
      return state
  }
}