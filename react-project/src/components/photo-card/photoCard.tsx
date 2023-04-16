import React, { useEffect, useState } from 'react';
import { PhotoCardProps } from './interface';
import { IPhotoInfo } from '../../types';
import { SingleCard } from '../../components/single-card/SingleCard';
import './photo-card.css';
import { usePhoto } from '../../hooks/usePhotos';

const PhotoCard = ({ id }: PhotoCardProps) => {
  const [card, setCard] = useState<IPhotoInfo>();
  const { photoResponse, photoLoading, photoError } = usePhoto(id);

  useEffect(() => {
    if (photoResponse) {
      setCard(photoResponse);
    }
  }, [photoResponse, id, photoLoading]);

  return (
    <>
      {photoLoading && <p>Loading...</p>}
      <div className="modal-window-wrap">{card && <SingleCard card={card} />}</div>
      {photoError && <p>{photoError}</p>}
    </>
  );
};

export default PhotoCard;
