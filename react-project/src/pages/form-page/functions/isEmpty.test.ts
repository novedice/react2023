import { describe, it } from 'vitest';
import isEmpty from './isEmpty';

describe('function isEmpty test', () => {
  it('If enter empty string should return error', () => {
    const resultEmpty = isEmpty('');
    const resultNotEmpty = isEmpty('dfghj');
    expect(resultEmpty === true);
    expect(resultNotEmpty === false);
  });
});
