import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
// import logger from 'redux-logger';
import rootReducer from '../reducers';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
