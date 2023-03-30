import { SelectFieldProps } from '../../../types';

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
          {...register('beenThere', { required: true })}
        ></input>
      </label>
      <label className="form-label radio">
        No
        <input
          type="radio"
          name="beenThere"
          value="no"
          {...register('beenThere', { required: true })}
        ></input>
      </label>
    </>
  );
};

export default RadioInput;
