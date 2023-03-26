import { describe, it } from 'vitest';
import isEmpty from './isEmpty';

describe('function isEmpty test', () => {
  it('If enter empty string should return error', () => {
    const resultEmpty = isEmpty('', 0);
    const resultNotEmpty = isEmpty('dfghj', 0);
    expect(resultEmpty.message === 'This field is required ' && resultEmpty.error === 1);
    expect(resultNotEmpty.message === '' && resultNotEmpty.error === 0);
  });
});
