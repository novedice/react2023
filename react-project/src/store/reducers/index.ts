import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  searchValue: searchReducer,
  formValues: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
