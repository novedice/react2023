import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import FormPage from './FormPage';
import { renderWithProviders } from '../../test/test-utils';

describe('FormPage', () => {
  beforeEach(() => {
    renderWithProviders(<FormPage />);
  });
  it('Renders FormPage', async () => {
    expect(await screen.getByText(/area/i)).toBeInTheDocument();
    expect(screen.getByText(/district/i)).toBeInTheDocument();
  });
});
