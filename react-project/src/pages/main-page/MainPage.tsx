import React, { useContext, useEffect, useState } from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import { useForm, SubmitHandler } from 'react-hook-form';
import createUrl from './createUrlFunc';
import { ModalWindowContext } from '../../context/ModalWindowContext';
import ModalWindow from '../../components/modal-window/ModalWindow';
import PhotoCard from '../../components/photo-card/photoCard';
import SmallCard from '../../components/small-card/SmallCard';
import { ICardShort } from 'types';
import SearchField from './components/SearchField';
import { Sizes } from '../../enums';
import './main-page.css';
import './assets/search-img.png';
import SearchLogo from './components/searchLogo';
import { useAppDispatch, useTypeSelector } from '../../hooks/useAppDispatch';
import { ADD_SEARCH_VAL } from '../../store/consts';

const Main = () => {
  const { window, openWindow, closeWindow } = useContext(ModalWindowContext);
  const searchValue = useTypeSelector((state) => state.searchValue);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<{ search: string }>();
  const [respCards, setRespCards] = useState<ICardShort[]>([]);
  const [idCurrent, setIdCurrent] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const { response, loading, error } = usePhotos(searchParam);

  const photoHandle = async (id: string) => {
    openWindow();
    setIdCurrent(id);
  };

  useEffect(() => {
    if (searchValue !== '') {
      setSearchParam(searchValue);
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
  }, [response, searchValue]);

  const onSubmit: SubmitHandler<{ search: string }> = (data) => {
    dispatch({ payload: data.search, type: ADD_SEARCH_VAL });
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
          <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            <button type="submit" className="search-logo">
              <SearchLogo />
            </button>
            <SearchField register={register} defaultValue={searchValue} />
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
