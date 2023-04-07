import React, { useEffect, useState } from 'react';
import { SingleCard } from '../../components/single-card/SingleCard';
import cards from '../../components/single-card/constants';
import SearchLogo from './searchLogo';
import './assets/search-img.png';
import './main-page.css';
import { getPhotos } from '../../api-requests/photo-requests';
import { ICardShort } from 'types';
import { Sizes } from '../../enums';
import createUrl from './createUrlFunc';
// import { IPhoto } from '../../types';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [respCards, setRespCards] = useState<ICardShort[]>([]);

  const recieveResp = async () => {
    const resp = await getPhotos('portugal');
    if (resp) {
      console.log(resp.photos.photo);
      setRespCards(
        resp.photos.photo.map((onePhoto) => {
          return { img: createUrl(onePhoto, Sizes.SMALL), title: onePhoto.title };
        })
      );
    }
  };

  const photoHandle = async () => {
    const resp = await getPhotoInfo();
    if (resp) {
      console.log(resp.photos.photo);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setSearchValue(localStorage.getItem('search') as string);
    }
    recieveResp();
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
      <div>
        {respCards.map((oneUrl, index) => (
          <React.Fragment key={index}>
            <p>{oneUrl.title}</p>
            <img
              src={oneUrl.img}
              onClick={() => {
                photoHandle(oneUrl.id);
              }}
            ></img>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Main;
