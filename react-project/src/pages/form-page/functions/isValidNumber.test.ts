import { describe, it } from 'vitest';
import isValidNumber from './isValidNumber';

describe('function isNumber test', () => {
  it('If enter string with not a numbers should return error', () => {
    const result1 = isValidNumber('asdf', 0);
    const result2 = isValidNumber('1234', 0);

    expect(result1.message === 'please enter the number' && result1.error === 1);
    expect(result2.message === '' && result2.error === 0);
  });
});
