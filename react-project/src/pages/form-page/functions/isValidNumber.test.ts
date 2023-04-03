import { describe, it } from 'vitest';
import isValidNumber from './isValidNumber';

describe('function isNumber test', () => {
  it('If enter string with not a numbers should return error', () => {
    const result1 = isValidNumber('asdf');
    const result2 = isValidNumber('1234');

    expect(result1 === false);
    expect(result2 === true);
  });
});
