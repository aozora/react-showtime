/*
  Redux Store
  Code adapted from https://github.com/vercel/next.js/blob/canary/examples/with-redux-thunk/store.js
*/

import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import rootReducer from './rootReducer';

let store;

function initStore(initialState) {
  return configureStore({
    preloadedState: initialState,
    reducer: rootReducer
  });
}

// const store = configureStore({
//   reducer: rootReducer
// });

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export const initializeStore = preloadedState => {
  let internalStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    internalStore = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return internalStore;
  // Create the store once in the client
  if (!store) store = internalStore;

  return internalStore;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
// export default store;
