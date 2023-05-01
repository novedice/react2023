import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';
import formReducer from './formReducer';
import modalWindowReducer from './modalWindowReducer';
import { apiSlice } from '../../api-requests/apiSlice';
import activePageReducer from './activePageReducer';

const rootReducer = combineReducers({
  searchValue: searchReducer,
  formValues: formReducer,
  modalWindow: modalWindowReducer,
  activePage: activePageReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
