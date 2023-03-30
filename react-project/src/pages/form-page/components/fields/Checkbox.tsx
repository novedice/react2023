import { SelectFieldProps } from '../../../types';

const Checkbox = ({ register }: SelectFieldProps) => {
  return (
    <>
      <label className="form-label check">
        <input
          className="form-input-text checkbox"
          type="checkbox"
          {...register('wantAName')}
        ></input>
        I want to add my name to the card
      </label>
    </>
  );
};

export default Checkbox;
