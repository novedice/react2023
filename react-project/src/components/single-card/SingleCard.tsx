import React from 'react';
import { CardType } from '../../types';
import './singleCard.css';

export class SingleCard extends React.Component<CardType> {
  name: string;
  img: string;
  description: string;
  population: string;
  area: string;
  district: string;

  constructor(props: CardType) {
    super(props);
    this.name = props.name;
    this.img = props.img;
    this.description = props.description;
    this.population = props.population;
    this.area = props.area;
    this.district = props.district;
  }
  render() {
    return (
      <>
        <div className="card-image-wrap">
          <img className="card-image" src={this.img}></img>
        </div>
        <div className="card-name capitalize">{`City: ${this.name}`}</div>
        <div className="card-population">{`Population: ${this.population}`}</div>
        <div className="card-area">{`Area: ${this.area} sq.km`}</div>
        <div className="card-district capitalize">{`District: ${this.district}`}</div>
        <div className="card-description">{this.description}</div>
      </>
    );
  }
}
