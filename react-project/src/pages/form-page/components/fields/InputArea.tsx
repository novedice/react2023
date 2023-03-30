import isValidNumber from '../../functions/isValidNumber';
import InputTextProps from '../../../../types';

const InputArea = ({ register }: InputTextProps) => {
  return (
    <>
      <label className="form-label">
        Area of the city
        <input
          className="form-input-text"
          type="text"
          name="area"
          {...register('area', {
            required: 'This field is requered. ',
            validate: {
              number: (n) => isValidNumber(n) || 'It should be a number',
            },
          })}
        ></input>
      </label>
    </>
  );
};

export default InputArea;
