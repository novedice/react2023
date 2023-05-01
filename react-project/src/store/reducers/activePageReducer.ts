import { PayloadAction } from '@reduxjs/toolkit';
import { ACTIVE_MAIN, ACTIVE_ABOUT, ACTIVE_FORM } from '../../store/consts';

const activePageReducer = (state = { main: '', about: '', form: '' }, action: PayloadAction) => {
  switch (action.type) {
    case ACTIVE_MAIN: {
      return { main: 'active', about: '', form: '' };
    }
    case ACTIVE_ABOUT: {
      return { main: '', about: 'active', form: '' };
    }
    case ACTIVE_FORM: {
      return { main: '', about: '', form: 'active' };
    }
    default:
      return state;
  }
};

export default activePageReducer;
