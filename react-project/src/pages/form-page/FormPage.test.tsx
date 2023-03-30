import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('Renders FormPage', () => {
    render(<FormPage />);
    expect(screen.getByText(/area/i)).toBeInTheDocument();
    expect(screen.getByText(/district/i)).toBeInTheDocument();
  });
});
