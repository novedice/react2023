import React, { useEffect, useState } from 'react';
import { PhotoCardProps } from './interface';
import { getPhotoInfo } from '../../api-requests/photo-requests';
import { IPhotoInfo } from '../../types';

const PhotoCard = ({ id }: PhotoCardProps) => {
  const [card, setCard] = useState<IPhotoInfo>();
  const getPhoto = async () => {
    const resp = await getPhotoInfo(id);
    if (resp) {
      console.log(resp.photo.description._content);
      setCard(resp);
    }
  };

  useEffect(() => {
    getPhoto();
  });
  return (
    <>
      <div>Photo</div>
      <p>{card?.photo.description._content}</p>
    </>
  );
};

export default PhotoCard;
