import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import rootReducer from 'reducers';

const reducer = storage.reducer(rootReducer);

import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('my-sav');

const storageMiddleware = storage.createMiddleware(engine);

const load = storage.createLoader(engine);

export default function configureStore(initialState = {}, routerMiddleware) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware, storageMiddleware);
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument()
    ;

    middleware = compose(middleware, devTools);
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(reducer, initialState);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  load(store);

  return store;
}
