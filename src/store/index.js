import { legacy_createStore, combineReducers, compose } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import changeServiceReducer from '../reducers/changeServiceReducer';
import changeServiceIdReducer from '../reducers/changeServiceIdReducer';

const reduser = combineReducers({
  serviceList: serviceListReducer,
  changeServiceId: changeServiceIdReducer
})

const store = legacy_createStore(
  reduser,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;