import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import inputs from './inputs';

export default combineReducers({
  router,
  inputs,
});
