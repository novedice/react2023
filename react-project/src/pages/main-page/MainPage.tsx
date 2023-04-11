import React, { useContext, useEffect, useState } from 'react';
import SearchLogo from './searchLogo';
import './assets/search-img.png';
import './main-page.css';
import { ICardShort } from 'types';
import { Sizes } from '../../enums';
import createUrl from './createUrlFunc';
import { ModalWindowContext } from '../../context/ModalWindowContext';
import ModalWindow from '../../components/modal-window/ModalWindow';
import PhotoCard from '../../components/photo-card/photoCard';
import { usePhotos } from '../../hooks/usePhotos';

const Main = () => {
  const { window, openWindow, closeWindow } = useContext(ModalWindowContext);
  const [searchValue, setSearchValue] = useState('');
  const [respCards, setRespCards] = useState<ICardShort[]>([]);
  const [idCurrent, setIdCurrent] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const { response, loading, error } = usePhotos(searchParam);

  const photoHandle = async (id: string) => {
    openWindow();
    setIdCurrent(id);
  };

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setSearchValue(localStorage.getItem('search') as string);
      setSearchParam(localStorage.getItem('search') as string);
    }
    if (response) {
      setRespCards(
        response?.photos.photo.map((onePhoto) => {
          return {
            img: createUrl(onePhoto.server, onePhoto.id, onePhoto.secret, Sizes.SMALL),
            title: onePhoto.title,
            id: onePhoto.id,
          };
        })
      );
    }
  }, [response, searchParam]);

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const submitHandle = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSearchParam(searchValue);
    localStorage.setItem('search', searchValue);
  };

  return (
    <>
      {window && (
        <ModalWindow closeWindow={closeWindow}>
          <PhotoCard id={idCurrent} />
        </ModalWindow>
      )}
      <div>
        <div className="search-bar-wrap">
          <SearchLogo />
          <form className="search-form" onSubmit={submitHandle}>
            <input
              className="search-bar"
              type="text"
              onChange={searchHandle}
              defaultValue={searchValue}
            ></input>
          </form>
        </div>
        <div className="cards-wrap">
          {loading && <p>LOADING...</p>}

          {!loading && (
            <>
              {respCards.map((oneUrl, index) => (
                <div
                  className="single-card-wrap-main"
                  key={index}
                  onClick={() => {
                    photoHandle(oneUrl.id);
                    openWindow();
                  }}
                >
                  <p>{oneUrl.title}</p>
                  <img className="img-main" src={oneUrl.img}></img>
                </div>
              ))}
            </>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Main;
