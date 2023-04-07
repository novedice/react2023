import React from 'react';
import { SelectFieldProps } from '../../../../types';
import { fieldRequired } from '../../const';

const RadioInput = ({ register }: SelectFieldProps) => {
  return (
    <>
      <p>Have you already visited this city?</p>
      <label className="form-label radio">
        Yes
        <input
          type="radio"
          name="beenThere"
          value="yes"
          {...register('beenThere', { required: fieldRequired })}
        ></input>
      </label>
      <label className="form-label radio">
        No
        <input
          type="radio"
          name="beenThere"
          value="no"
          {...register('beenThere', { required: fieldRequired })}
        ></input>
      </label>
    </>
  );
};

export default RadioInput;
