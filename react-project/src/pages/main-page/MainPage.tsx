import React, { useContext, useEffect, useState } from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import createUrl from './createUrlFunc';
import { ModalWindowContext } from '../../context/ModalWindowContext';
import ModalWindow from '../../components/modal-window/ModalWindow';
import PhotoCard from '../../components/photo-card/photoCard';
import SmallCard from '../../components/small-card/SmallCard';
import { ICardShort } from 'types';
import { Sizes } from '../../enums';
import './main-page.css';
import './assets/search-img.png';
import SearchLogo from './searchLogo';

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

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

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
          <SearchLogo handleClick={submitHandle} />
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

          {!loading && respCards.length !== 0 && (
            <>
              {respCards.map((oneUrl, index) => (
                <SmallCard key={index} oneUrl={oneUrl} photoHandle={photoHandle} />
              ))}
            </>
          )}
          {!loading && respCards.length === 0 && (
            <div>{`Nothing found with ${searchParam}...`}</div>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Main;
