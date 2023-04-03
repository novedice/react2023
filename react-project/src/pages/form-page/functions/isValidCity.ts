import { alphabetUpper } from './consts';

const isValidCity = (str: string) => {
  if (!alphabetUpper.includes(str.trim()[0])) {
    return false;
  }

  return true;
};

export default isValidCity;
