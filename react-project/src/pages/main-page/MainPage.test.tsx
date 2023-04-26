import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import MainPage from './MainPage';
import { renderWithProviders } from '../../test/test-utils';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('MainPage', () => {
  it('display cards on the main page', async () => {
    renderWithProviders(<MainPage />);

    screen.getByText('LOADING...');
  });

  it('handles error response', async () => {
    server.use(
      rest.get(
        'https://www.flickr.com/?method=flickr.photos.getRecent&api_key=daee1b9d&format=json&nojsoncallback=1&per_page=12',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    renderWithProviders(<MainPage />);

    screen.getByText('LOADING...');

    await screen.findByText('something went wrong...');
  });
});
