const isLength = (str: string, err: number, length: number) => {
  if (str.trim().length < length) {
    err += 1;
    return { error: err, message: `it should be not less then ${length} symbols` };
  }
  return { error: err, message: '' };
};

export default isLength;
