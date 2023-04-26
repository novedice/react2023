import { PayloadAction } from '@reduxjs/toolkit';
import { OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW } from '../../store/consts';

const modalWindowReducer = (state = { modalWindow: false }, action: PayloadAction) => {
  switch (action.type) {
    case OPEN_MODAL_WINDOW: {
      return { modalWindow: true };
    }
    case CLOSE_MODAL_WINDOW: {
      return { modalWindow: false };
    }
    default:
      return state;
  }
};

export default modalWindowReducer;
