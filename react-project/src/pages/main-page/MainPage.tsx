import React, { useContext, useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import createUrl from './createUrlFunc';
import { ModalWindowContext } from '../../context/ModalWindowContext';
import ModalWindow from '../../components/modal-window/ModalWindow';
import PhotoCard from '../../components/photo-card/photoCard';
import SmallCard from '../../components/small-card/SmallCard';
import { IPhoto } from 'types';
import SearchField from './components/SearchField';
import { Sizes } from '../../enums';
import './main-page.css';
import './assets/search-img.png';
import SearchLogo from './components/searchLogo';
import { useAppDispatch, useTypeSelector } from '../../hooks/useAppDispatch';
import { ADD_SEARCH_VAL } from '../../store/consts';
import { useGetPhotosQuery } from '../../api-requests/apiSlice';

const Main = () => {
  const { window, openWindow, closeWindow } = useContext(ModalWindowContext);
  const searchValue = useTypeSelector((state) => state.searchValue);
  const [searchParam, setSearchParam] = useState('');
  const { data = [], isLoading, isError } = useGetPhotosQuery(searchValue);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<{ search: string }>();
  const [idCurrent, setIdCurrent] = useState('');

  const photoHandle = async (id: string) => {
    openWindow();
    setIdCurrent(id);
  };

  useEffect(() => {
    if (searchValue !== '') {
      setSearchParam(searchValue);
    }
  }, [searchValue]);

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
          {isLoading && <p>LOADING...</p>}
          {!isLoading && data?.photos?.photo?.length !== 0 && (
            <>
              {data?.photos?.photo?.map((onePhoto: IPhoto, index: number) => (
                <SmallCard
                  key={index}
                  oneUrl={{
                    img: createUrl(onePhoto.server, onePhoto.id, onePhoto.secret, Sizes.SMALL),
                    title: onePhoto.title,
                    id: onePhoto.id,
                  }}
                  photoHandle={photoHandle}
                />
              ))}
            </>
          )}
          {!isLoading && data?.photos?.photo?.length === 0 && (
            <div>{`Nothing found with ${searchParam}...`}</div>
          )}
          {isError && <p>something went wrong...</p>}
        </div>
      </div>
    </>
  );
};

export default Main;
