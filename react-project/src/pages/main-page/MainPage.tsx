import React, { useContext, useEffect, useState } from 'react';
import { usePhotos } from '../../hooks/usePhotos';
import { useForm, SubmitHandler } from 'react-hook-form';
import createUrl from './createUrlFunc';
import { ModalWindowContext } from '../../context/ModalWindowContext';
import ModalWindow from '../../components/modal-window/ModalWindow';
import PhotoCard from '../../components/photo-card/photoCard';
import SmallCard from '../../components/small-card/SmallCard';
import InputText from '../form-page/components/fields/InputText.tsx';
import { ICardShort } from 'types';
import { Sizes } from '../../enums';
import './main-page.css';
import './assets/search-img.png';
import SearchLogo from './searchLogo';
import { useAppDispatch, useTypeSelector } from '../../hooks/useAppDispatch';
import { ADD_SEARCH_VAL } from '../../store/consts';

const Main = () => {
  const { window, openWindow, closeWindow } = useContext(ModalWindowContext);
  const searchValue = useTypeSelector((state) => state.searchValue);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue } = useForm<string>();
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
      // dispatch({ payload: localStorage.getItem('search') as string, type: ADD_SEARCH_VAL });
      // setSearchValue(localStorage.getItem('search') as string);
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
  }, [response, searchParam]);

  // useEffect(() => {
  //   localStorage.setItem('search', searchValue);
  // }, [searchValue]);

  // const searchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setSearchValue(event.target.value);
  // };
  const onSubmit: SubmitHandler<string> = (data) => {
    dispatch({ payload: data, type: ADD_SEARCH_VAL });
  };
  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   setSearchParam(searchValue);
  //   localStorage.setItem('search', searchValue);
  // };

  return (
    <>
      {window && (
        <ModalWindow closeWindow={closeWindow}>
          <PhotoCard id={idCurrent} />
        </ModalWindow>
      )}
      <div>
        <div className="search-bar-wrap">
          <SearchLogo handleClick={handleSubmit(onSubmit)} />
          <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
            {/* <p className="form-name">Please enter below data of the city:</p> */}
            <InputText register={register} label={'search'} validationFunc={() => {}} />
          </form>
          {/* <form className="search-form" onSubmit={submitHandle}>
            <input
              className="search-bar"
              type="text"
              onChange={searchHandle}
              defaultValue={searchValue}
            ></input>
          </form> */}
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
