import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { apiSlice } from '../api-requests/apiSlice';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
