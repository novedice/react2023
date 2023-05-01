import React from 'react';
import { InputTextProps } from '../../../../types';
import { fieldRequired } from '../../const';

const InputText = ({
  register,
  label,
  validationFunc,
  errorMessage,
  minLength = 0,
}: InputTextProps) => {
  return (
    <>
      <label className="form-label">
        {`${label} of the city`}
        <input
          className={`form-input-text ${label}-city`}
          type="text"
          {...register(label, {
            required: fieldRequired,
            validate: {
              number: (n: string) => validationFunc(n) || errorMessage,
            },
            minLength: {
              value: minLength,
              message: `The length of this field should be not less than ${minLength} symbols. `,
            },
          })}
        ></input>
      </label>
    </>
  );
};

export default InputText;
