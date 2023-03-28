import { describe, it } from 'vitest';
import isValidCity from './isValidCity';

describe('function isValid test', () => {
  it('If enter string with small first letter or length of the string less then 2 symbols should return error', () => {
    const result1 = isValidCity('', 0);
    const result2 = isValidCity('dfghj', 0);
    const result3 = isValidCity('Dfghj', 0);

    expect(
      result1.message === 'the length of the city name should be at least 2 symbols' &&
        result1.error === 1
    );
    expect(result2.message === 'The city should start from upper case' && result2.error === 1);
    expect(result3.message === '' && result3.error === 0);
  });
});
