import React from 'react';
import { SingleCard } from '../../components/single-card/SingleCard';
import cards from '../../components/single-card/constants';
import SearchLogo from './searchLogo';
import './assets/search-img.png';
import './main-page.css';

class Main extends React.Component {
  searchValue: string;

  constructor(props: object | Readonly<object>) {
    super(props);
    this.searchHandle = this.searchHandle.bind(this);
    this.searchValue = '' || (localStorage.getItem('search') as string);
  }

  componentDidMount(): void {
    if (localStorage.getItem('search')) {
      this.searchValue = localStorage.getItem('search') as string;
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.searchValue);
  }

  searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.searchValue = event.target.value;
  };

  render() {
    return (
      <>
        <div className="search-bar-wrap">
          <SearchLogo />
          <input
            className="search-bar"
            type="text"
            onChange={this.searchHandle}
            defaultValue={this.searchValue}
          ></input>
        </div>
        <div className="cards-wrap">
          {cards.map((oneCard, id) => (
            // <div className="single-card-wrap" key={id}>
            <SingleCard
              key={id}
              name={oneCard.name}
              img={oneCard.img}
              description={oneCard.description}
              population={oneCard.population}
              district={oneCard.district}
              area={oneCard.area}
            />
            // </div>
          ))}
        </div>
      </>
    );
  }
}

export default Main;
