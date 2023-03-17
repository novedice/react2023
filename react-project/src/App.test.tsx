import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  const placeholder = localStorage.getItem('search') || '';
  it('renders app', () => {
    render(<App />);
    screen.debug();
    const input = screen.getByRole('textbox');
    expect(screen.getByText(/main/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(placeholder)).toBeNull();
    expect(input).toHaveDisplayValue(placeholder);
    fireEvent.change(input, {
      target: { value: 'lisbon' },
    });
    screen.debug();
  });
});
