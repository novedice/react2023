import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { RootState, rootReducer } from './reducers';
import { apiSlice } from '../api-requests/apiSlice';

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    preloadedState,
  });
};

export const store = setupStore({});
export default setupStore;
