import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'redux-react-firebase';
import inputs from './inputs';

export default combineReducers({
  router,
  firebase,
  inputs,
});
