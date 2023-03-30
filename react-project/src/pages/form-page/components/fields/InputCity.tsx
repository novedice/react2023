import isValidCity from '../../functions/isValidCity';
import InputTextProps from '../../../../types';

const InputCity = ({ register }: InputTextProps) => {
  return (
    <>
      <label className="form-label">
        City Name
        <input
          className="form-input-text"
          type="text"
          {...register('name', {
            required: 'This field is requered. ',
            minLength: {
              value: 2,
              message: 'The city length should be not less than 2 symbols. ',
            },
            validate: {
              city: (name) => !isValidCity(name) || 'City should start from Upper letter. ',
            },
          })}
        ></input>
      </label>
    </>
  );
};

export default InputCity;
