import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  searchValue: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
