import React from 'react';
import { UseFormRegister } from 'react-hook-form';
// import { fieldRequired } from '../../const';

interface SearchProps {
  register: UseFormRegister<{ search: string }>;
  defaultValue: string;
}

const SearchField = ({ register, defaultValue }: SearchProps) => {
  return (
    <>
      <label className="form-label">
        <input
          className="search-bar"
          type="text"
          defaultValue={defaultValue}
          {...register('search')}
        ></input>
      </label>
    </>
  );
};

export default SearchField;
