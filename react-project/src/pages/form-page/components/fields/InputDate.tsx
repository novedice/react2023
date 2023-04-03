import React from 'react';
import { SelectFieldProps } from '../../../../types';
import { fieldRequired } from '../../const';

const InputDate = ({ register }: SelectFieldProps) => {
  return (
    <>
      <label className="form-label">
        date of foundation
        <input
          className="form-input-text"
          type="date"
          {...register('date', { required: fieldRequired })}
        ></input>
      </label>
    </>
  );
};

export default InputDate;
