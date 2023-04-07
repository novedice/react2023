import React from 'react';
import { SelectFieldProps } from '../../../../types';

const InputName = ({ register }: SelectFieldProps) => {
  return (
    <>
      <label className="form-label">
        Enter your name
        <input className="form-input-text" type="text" {...register('namePerson')}></input>
      </label>
    </>
  );
};

export default InputName;
