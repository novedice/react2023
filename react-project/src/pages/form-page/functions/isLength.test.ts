import { describe, it } from 'vitest';
import isLength from './isLength';

describe('function isLength test', () => {
  it('If enter string less then n symbols should return error', () => {
    const result1 = isLength('', 0, 2);
    const result2 = isLength('dfghj', 0, 2);
    expect(result1.message === `it should be not less then 2 symbols` && result1.error === 1);
    expect(result2.message === '' && result2.error === 0);
  });
});
