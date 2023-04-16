import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import MainPage from './MainPage';

describe('MainPage', () => {
  it('display cards on the main page', async () => {
    const { findByText } = render(<MainPage />);
    expect(await findByText('sturgeon')).toBeInTheDocument();
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { value: 'portugal' },
    });
    fireEvent.submit(input, {
      target: { value: 'portugal' },
    });
    expect(await findByText("L'Azure Hotel - MICE")).toBeInTheDocument();
  });
});
