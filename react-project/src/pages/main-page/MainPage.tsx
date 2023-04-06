import React, { useEffect, useState } from 'react';
import { SingleCard } from '../../components/single-card/SingleCard';
import cards from '../../components/single-card/constants';
import SearchLogo from './searchLogo';
import './assets/search-img.png';
import './main-page.css';
import { getPhotos } from '../../api-requests/photo-requests';
// import { IPhoto } from '../../types';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  // const [setRespCards] = useState<IPhoto[]>();
  const [urlPhotos, setUrlPhotos] = useState<string[]>([]);

  const recieveResp = async () => {
    const resp = await getPhotos('portugal');
    if (resp) {
      console.log(resp.photos.photo);
      // setRespCards(resp.photos.photo);
      setUrlPhotos(
        resp.photos.photo.map(
          (onephoto) =>
            `https://live.staticflickr.com/${onephoto.server}/${onephoto.id}_${onephoto.secret}_w.jpg`
        )
      );
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
        {urlPhotos.map((oneUrl, index) => (
          <img src={oneUrl} key={index}></img>
        ))}
      </div>
    </>
  );
};

export default Main;
