import React from 'react';
import { CardType } from '../../types';
import './singleCard.css';

export const SingleCard = (card: CardType) => {
  return (
    <>
      <div className="single-card-wrap">
        <div className="card-image-wrap">
          <img className="card-image" src={card.img}></img>
        </div>
        <div className="card-name capitalize">{`City: ${card.name}`}</div>
        <div className="card-population">{`Population: ${card.population}`}</div>
        <div className="card-area">{`Area: ${card.area} sq.km`}</div>
        <div className="card-district capitalize">{`District: ${card.district}`}</div>
        <div className="card-description">{card.description}</div>
      </div>
    </>
  );
};
