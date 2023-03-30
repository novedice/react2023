import { SelectFieldProps } from '../../../types';

const FileInput = ({ register }: SelectFieldProps) => {
  return (
    <>
      <label className="form-label">
        Add photo of the city
        <input
          className="form-input-text"
          type="file"
          {...register('fileImg', { required: true })}
        ></input>
      </label>
    </>
  );
};

export default FileInput;
