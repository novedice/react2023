import { alphabetUpper } from './consts';

const isValidCity = (str: string, err: number) => {
  if (str.length < 2) {
    err += 1;
    return { error: err, message: 'the length of the city name should be at least 2 symbols' };
  }
  if (!alphabetUpper.includes(str.trim()[0])) {
    err += 1;
    return { error: err, message: 'The city should start from upper case' };
  }
  return { error: err, message: '' };
};

export default isValidCity;
