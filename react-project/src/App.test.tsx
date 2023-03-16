import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('testname', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('main');
  });
});
