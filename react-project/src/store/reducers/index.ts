import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';
import formReducer from './formReducer';
import { apiSlice } from '../../api-requests/apiSlice';

const rootReducer = combineReducers({
  searchValue: searchReducer,
  formValues: formReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
