import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import cards from './constants';

import { SingleCard } from './SingleCard';

describe('Single card', () => {
  it('Renders singleCard', () => {
    render(
      <SingleCard
        name={cards[0].name}
        img={cards[0].img}
        district={cards[0].district}
        area={cards[0].area}
        population={cards[0].population}
        description={cards[0].description}
      />
    );
    screen.debug();
    expect(screen.getByText(/district/i)).toBeInTheDocument();
  });
});
