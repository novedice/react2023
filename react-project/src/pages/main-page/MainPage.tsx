import React from 'react';
import { SingleCard } from '../../components/single-card/SingleCard';
import './main-page.css';
import './assets/search-img.png';
import cards from '../../components/single-card/constants';

class Main extends React.Component {
  searchValue: string;

  constructor(props: object | Readonly<object>) {
    super(props);
    this.searchHandle = this.searchHandle.bind(this);
    this.searchValue = '' || (localStorage.getItem('search') as string);
  }

  componentDidMount(): void {
    if (localStorage.getItem('search')) {
      console.log(localStorage.getItem('search'));
      this.searchValue = localStorage.getItem('search') as string;
    }
  }

  searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.searchValue = event.target.value;
    localStorage.setItem('search', this.searchValue);
  };

  render() {
    return (
      <>
        <div className="search-bar-wrap">
          <img className="img-search" src="search-img.png" />
          <input
            className="search-bar"
            type="text"
            onChange={this.searchHandle}
            defaultValue={this.searchValue}
          ></input>
        </div>
        <div className="cards-wrap">
          {cards.map((oneCard, id) => (
            <div className="single-card-wrap" key={id}>
              <SingleCard
                name={oneCard.name}
                img={oneCard.img}
                description={oneCard.description}
                population={oneCard.population}
                district={oneCard.district}
                area={oneCard.area}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Main;
