import { alphabetUpper } from './consts';

const isValidCity = (str: string) => {
  if (str.length < 2) {
    return true;
  }
  if (!alphabetUpper.includes(str.trim()[0])) {
    return true;
  }
  return false;
};

export default isValidCity;
