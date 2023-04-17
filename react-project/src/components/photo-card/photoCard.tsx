import React from 'react';
import { PhotoCardProps } from './interface';
import { SingleCard } from '../../components/single-card/SingleCard';
import './photo-card.css';
import { useGetPhotoQuery } from '../../api-requests/apiSlice';

const PhotoCard = ({ id }: PhotoCardProps) => {
  const { data = {}, isLoading, isError } = useGetPhotoQuery(id);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="modal-window-wrap">{data?.photo && <SingleCard card={data?.photo} />}</div>
      {isError && <p>something went wrong...</p>}
    </>
  );
};

export default PhotoCard;
