import React, { useContext, useEffect, useState } from 'react';
import { PhotoCardProps } from './interface';
import { getPhotoInfo } from '../../api-requests/photo-requests';
import { IPhotoInfo } from '../../types';
import { SingleCard } from '../../components/single-card/SingleCard';
import { ModalWindowContext } from '../../context/ModalWindowContext';

const PhotoCard = ({ id }: PhotoCardProps) => {
  const { window } = useContext(ModalWindowContext);
  const [card, setCard] = useState<IPhotoInfo>();
  const getPhoto = async () => {
    const resp = await getPhotoInfo(id);
    if (resp) {
      console.log('resp 1 card', resp);
      console.log(resp.photo.description._content);
      setCard(resp);
    }
  };

  useEffect(() => {
    getPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window]);
  return (
    <>
      <div>Photo</div>
      {card && (
        <SingleCard
          card={card}
          // owner={card?.photo.owner}
          // description={card.photo.description._content}
          // location={card.photo.location.region._content}
          // datePublished={card.photo.dateuploaded}
          // img={card.photo.urls.url[0]._content}
          // title={card.photo.title._content}
          // id={card.id}
        />
      )}
    </>
  );
};

export default PhotoCard;
