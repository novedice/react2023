import { describe, it } from 'vitest';
import isLength from './isLength';

describe('function isLength test', () => {
  it('If enter string less then n symbols should return error', () => {
    const result1 = isLength('', 2);
    const result2 = isLength('dfghj', 2);
    expect(result1 === false);
    expect(result2 === true);
  });
});
