import React from 'react';
import { IPhotoInfo } from '../../types';
import './singleCard.css';

interface SingleCardProps {
  card: IPhotoInfo;
}

export const SingleCard = ({ card }: SingleCardProps) => {
  return (
    <>
      <div className="single-card-wrap">
        <div className="card-image-wrap">
          <img className="card-image" src={card.photo.urls.url[0]._content}></img>
        </div>
        <div className="card-name capitalize">{`${card.photo.title._content}`}</div>
        <div className="card-population">{`By ${card.photo.owner?.username}`}</div>
        <div className="card-area">{`${card.photo.description._content} sq.km`}</div>
        {/* <div className="card-district capitalize">{`Location: ${card.photo.location.region._content}`}</div> */}
        <div className="card-description">{card.photo.dateuploaded}</div>
      </div>
    </>
  );
};
