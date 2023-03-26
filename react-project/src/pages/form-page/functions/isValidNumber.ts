import { numbers } from './consts';

const isNumber = (str: string, err: number) => {
  for (const char of str) {
    if (!numbers.includes(char) || char !== ' ') {
      return { error: err, message: 'please enter the number' };
    }
  }
  return { error: err, message: '' };
};

export default isNumber;
