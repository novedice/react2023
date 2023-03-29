import { numbers } from './consts';

const isNumber = (str: string) => {
  for (const char of str) {
    if (!numbers.includes(char) || char !== ' ') {
      return true;
    }
  }
  return false;
};

export default isNumber;
