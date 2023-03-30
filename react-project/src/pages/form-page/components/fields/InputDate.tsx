import { SelectFieldProps } from '../../../types';

const InputDate = ({ register }: SelectFieldProps) => {
  return (
    <>
      <label className="form-label">
        date of foundation
        <input
          className="form-input-text"
          type="date"
          name="date"
          {...register('date', { required: true })}
        ></input>
      </label>
    </>
  );
};

export default InputDate;
