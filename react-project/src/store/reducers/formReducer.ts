import { PayloadAction } from '@reduxjs/toolkit';
import { ADD_FORM_VALUES, CLEAR_FORM_RESULTS } from '../../store/consts';
import { CardType } from '../../types';

const formReducer = (state = [], action: PayloadAction<CardType[]>) => {
  switch (action.type) {
    case ADD_FORM_VALUES: {
      if (state.length === 0) {
        return [action.payload];
      } else {
        return [...state, action.payload];
        // {
        //   ...action.payload,
        //   fileImg: `${URL.createObjectURL(
        //     action.payload.fileImg ? action.payload.fileImg[0] : ''
        //   )}`,
        // },
      }
    }
    case CLEAR_FORM_RESULTS: {
      return [];
    }
    default:
      return state;
  }
};

export default formReducer;
