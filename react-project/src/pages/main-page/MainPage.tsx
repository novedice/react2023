import React, { useEffect, useState } from 'react';
import { SingleCard } from '../../components/single-card/SingleCard';
import cards from '../../components/single-card/constants';
import SearchLogo from './searchLogo';
import './assets/search-img.png';
import './main-page.css';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setSearchValue(localStorage.getItem('search') as string);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="search-bar-wrap">
        <SearchLogo />
        <input
          className="search-bar"
          type="text"
          onChange={searchHandle}
          defaultValue={searchValue}
        ></input>
      </div>
      <div className="cards-wrap">
        {cards.map((oneCard, id) => (
          <SingleCard
            key={id}
            name={oneCard.name}
            img={oneCard.img}
            description={oneCard.description}
            population={oneCard.population}
            district={oneCard.district}
            area={oneCard.area}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
