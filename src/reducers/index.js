import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import inputs from './inputs';
import userCase from './userCase';
import instructions from './instructions';

export default combineReducers({
  router,
  inputs,
  userCase,
  instructions,
});
