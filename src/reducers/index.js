import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import inputs from './inputs';
import userCase from './userCase';

export default combineReducers({
  router,
  inputs,
  userCase,
});
