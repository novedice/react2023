const isLength = (str: string, length: number) => {
  if (str.trim().length < length) {
    return false;
  }
  return true;
};

export default isLength;
