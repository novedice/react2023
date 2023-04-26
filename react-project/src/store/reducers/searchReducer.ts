import { PayloadAction } from '@reduxjs/toolkit';
import { ADD_SEARCH_VAL, CLEAR_SEARCH } from '../../store/consts';

const searchReducer = (state = '', action: PayloadAction<string>) => {
  switch (action.type) {
    case ADD_SEARCH_VAL: {
      return action.payload;
    }
    case CLEAR_SEARCH: {
      return '';
    }
    default:
      return state;
  }
};

export default searchReducer;
