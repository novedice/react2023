import InputTextProps from '../../../types';

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
          className="form-input-text"
          type="text"
          name={label}
          {...register(label, {
            required: 'This field is requered. ',
            validate: {
              number: (n) => validationFunc(n) || errorMessage,
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
