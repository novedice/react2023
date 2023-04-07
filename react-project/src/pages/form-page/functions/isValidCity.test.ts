import { describe, it } from 'vitest';
import isValidCity from './isValidCity';

describe('function isValid test', () => {
  it('If enter string with small first letter should return false', () => {
    const result1 = isValidCity('dfghj');
    const result2 = isValidCity('Dfghj');

    expect(result1 === false);
    expect(result2 === true);
  });
});
