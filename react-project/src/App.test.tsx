import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';
import { renderWithProviders } from './test/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders app', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const input = screen.getByRole('textbox');
    expect(screen.getByText(/main/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { value: 'lisbon' },
    });
  });
});
