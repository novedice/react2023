import React, { useContext, useEffect, useState } from 'react';
import { SingleCard } from '../../components/single-card/SingleCard';
import cards from '../../components/single-card/constants';
import SearchLogo from './searchLogo';
import './assets/search-img.png';
import './main-page.css';
import { getPhotos, getPhotoInfo } from '../../api-requests/photo-requests';
import { ICardShort } from 'types';
import { Sizes } from '../../enums';
import createUrl from './createUrlFunc';
import { ModalWindowContext } from '../../context/ModalWindowContext';
import ModalWindow from '../../components/modal-window/ModalWindow';
import PhotoCard from '../../components/photo-card/photoCard';
// import { IPhoto } from '../../types';

const Main = () => {
  const { window, openWindow, closeWindow } = useContext(ModalWindowContext);
  const [searchValue, setSearchValue] = useState('');
  const [respCards, setRespCards] = useState<ICardShort[]>([]);
  const [id, setId] = useState('');

  const recieveResp = async () => {
    const resp = await getPhotos('portugal');
    if (resp) {
      console.log(resp.photos.photo);
      setRespCards(
        resp.photos.photo.map((onePhoto) => {
          return { img: createUrl(onePhoto, Sizes.SMALL), title: onePhoto.title, id: onePhoto.id };
        })
      );
    }
  };

  const photoHandle = async (id: string) => {
    openWindow();
    setId(id);
    const resp = await getPhotoInfo(id);
    if (resp) {
      console.log(resp.photo.description._content);
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
      {window && (
        <ModalWindow closeWindow={closeWindow}>
          <PhotoCard id={id} />
        </ModalWindow>
      )}
      <div>
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
                  openWindow();
                }}
              ></img>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
