import React from 'react';
import { SelectFieldProps } from '../../../../types';
import { fieldRequired } from '../../const';

const FileInput = ({ register }: SelectFieldProps) => {
  return (
    <>
      <label className="form-label">
        Add photo of the city
        <input
          className="form-input-text"
          type="file"
          {...register('fileImg', { required: fieldRequired })}
        ></input>
      </label>
    </>
  );
};

export default FileInput;
