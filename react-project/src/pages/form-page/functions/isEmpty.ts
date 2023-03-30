const isEmpty = (str: string, err: number) => {
  if (str.length === 0) {
    err += 1;
    return { error: err, message: 'This field is required ' };
  }
  return { error: err, message: '' };
};

export default isEmpty;
