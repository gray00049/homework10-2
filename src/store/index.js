import { legacy_createStore, combineReducers, compose } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import changeServiceIdReducer from '../reducers/changeServiceIdReducer';
import filterReducer from '../reducers/filterReducer';

const reduser = combineReducers({
  serviceList: serviceListReducer,
  changeServiceId: changeServiceIdReducer,
  filter: filterReducer
})

const store = legacy_createStore(
  reduser,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;