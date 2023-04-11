import { render } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import { SingleCard } from './SingleCard';

describe('Single card', () => {
  it('Renders singleCard', async () => {
    const { findByText } = render(
      <SingleCard
        card={{
          isfamily: 0,
          isfriend: 0,
          ispublic: 1,
          id: '52802634579',
          secret: 'cc27994385',
          server: '65535',
          farm: 66,
          dateuploaded: '1681207478',
          owner: {
            nsid: '42534216@N03',
            username: 'henriksundholm.com',
            realname: 'Henrik Sundholm',
          },
          title: { _content: 'Late Evening Lisbon' },
          description: {
            _content:
              'One of the last shots I took of the Lisbon cityscape this evening. I got it from a vantage point called Miradouro da Senhora do Monte.',
          },
          dates: {
            posted: '1681207478',
            taken: '2019-11-30 19:56:18',
            takengranularity: 0,
            takenunknown: '0',
            lastupdate: '1681212202',
          },

          location: {
            latitude: '38.719453',
            longitude: '-9.132535',
            accuracy: '16',
            context: '0',
            locality: { _content: 'Socorro' },
            county: { _content: 'Lisbon' },
            region: { _content: 'Lisbon' },
            country: { _content: 'Portugal' },
            neighbourhood: { _content: '' },
          },
          urls: {
            url: [
              {
                type: 'photopage',
                _content: 'https://www.flickr.com/photos/visualideas/52802634579/',
              },
            ],
          },
        }}
      />
    );
    expect(await findByText('Title: Late Evening Lisbon')).toBeInTheDocument();
  });
});
