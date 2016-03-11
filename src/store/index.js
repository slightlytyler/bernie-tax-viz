import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import { reduxReactFirebase } from 'redux-react-firebase';
import rootReducer from 'reducers';

const reducer = storage.reducer(rootReducer);

import createEngine from 'redux-storage-engine-localstorage';
import filter from 'redux-storage-decorator-filter';
const engine = filter(
  createEngine('bernie-tax-viz'),
  ['inputs'],
  ['router'],
);

import { UPDATE_INPUTS } from 'reducers/inputs';
const storageMiddleware = storage.createMiddleware(engine, [
  UPDATE_INPUTS,
  '@@router/LOCATION_CHANGE',
]);

const load = storage.createLoader(engine);

import { customKey, cases, casesById } from 'constants/cases';
import { updateUserCase } from 'reducers/userCase';
const loadCase = store => next => action => {
  const nextState = next(action);

  if (action.type === storage.LOAD) {
    const {
      router: {
        locationBeforeTransitions: {
          pathname,
        },
      },
    } = store.getState();
    const param = pathname.substr(1);

    if (casesById.hasOwnProperty(param)) {
      if (param !== customKey) {
        store.dispatch(updateUserCase(param));
      } else {
        store.dispatch(updateUserCase(customKey));
      }
    } else if (pathname === '/') {
      store.dispatch(updateUserCase(cases[0]));
    }
  }

  return nextState;
};


export default function configureStore(initialState = {}, routerMiddleware) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(
    thunk,
    routerMiddleware,
    storageMiddleware,
    loadCase,
  );

  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument()
    ;

    middleware = compose(
      middleware,
      devTools,
    );
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = compose(
    middleware,
    reduxReactFirebase('bernies-tax-viz.firebaseIO.com'),
  )(createStore)(reducer, initialState);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  load(store);

  return store;
}
