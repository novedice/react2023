import React from 'react';
import { SelectFieldProps } from '../../../../types';

const SelectField = ({ register }: SelectFieldProps) => {
  return (
    <label className="form-label">
      Choose the district
      <select className="form-input-text select" {...register('district')}>
        <option value="lisbon">lisbon</option>
        <option value="azores">azores</option>
        <option value="aveiro">aveiro</option>
        <option value="beja">beja</option>
        <option value="braganca">braganca</option>
        <option value="coimbra">coimbra</option>
        <option value="evora">evora</option>
        <option value="faro">faro</option>
        <option value="leiria">leiria</option>
        <option value="madeira">madeira</option>
        <option value="porto">porto</option>
        <option value="setubal">setubal</option>
        <option value="viana do castelo">viana do castelo</option>
        <option value="vila real">vila real</option>
        <option value="viseu">viseu</option>
        <option value="portalegre">portalegre</option>
        <option value="castelo branco">braga</option>
      </select>
    </label>
  );
};

export default SelectField;
