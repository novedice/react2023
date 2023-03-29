import React from 'react';
import { CardType } from '../../types';
import './singleCard.css';

export const SingleCard = (card: CardType) => {
  // name: string;
  // img: string;
  // description: string;
  // population: string;
  // area: string;
  // district: string;

  // constructor(props: CardType) {
  //   super(props);
  //   this.name = props.name;
  //   this.img = props.img;
  //   this.description = props.description;
  //   this.population = props.population;
  //   this.area = props.area;
  //   this.district = props.district;
  // }
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
