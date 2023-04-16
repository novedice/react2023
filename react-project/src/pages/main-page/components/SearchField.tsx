import React from 'react';
// import { fieldRequired } from '../../const';

interface SearchProps {
  register: UseFormRegister<string>;
  label: string;
  defaultValue: string;
}

const SearchField = ({ register, label, defaultValue }: SearchProps) => {
  return (
    <>
      <label className="form-label">
        <input
          className="search-bar"
          type="text"
          defaultValue={defaultValue}
          {...register(label)}
        ></input>
      </label>
    </>
  );
};

export default SearchField;
