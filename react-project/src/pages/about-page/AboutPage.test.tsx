import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('Renders about', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About');
  });
});
