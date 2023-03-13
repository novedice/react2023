import React from 'react';
import { CardType } from '../../types';
import './singleCard.css';

export class SingleCard extends React.Component<CardType> {
  name: string;
  img: string;
  description: string;
  population: number;
  area: number;
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
        <img className="card-image" src={this.img}></img>
        <div className="card-name">{this.name}</div>
        <div className="card-population">{this.population}</div>
        <div className="card-area">{this.area}</div>
        <div className="card-district">{this.district}</div>
        <div className="card-description">{this.description}</div>
      </>
    );
  }
}
