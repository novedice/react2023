import { numbers } from './consts';

const isNumber = (str: string) => {
  for (const char of str) {
    if (!numbers.includes(char)) {
      return false;
    }
  }
  return true;
};

export default isNumber;
