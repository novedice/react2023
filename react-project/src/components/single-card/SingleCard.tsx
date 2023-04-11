import React from 'react';
import { IPhotoInfo } from '../../types';
import './singleCard.css';
import createUrl from '../../pages/main-page/createUrlFunc';
import { Sizes } from '../../enums';

interface SingleCardProps {
  card: IPhotoInfo;
}

export const SingleCard = ({ card }: SingleCardProps) => {
  console.log(card);
  return (
    <>
      <div className="single-card-wrap">
        <div className="card-image-wrap">
          <img
            className="card-image"
            src={createUrl(card.server, card.id, card.secret, Sizes.MEDIUM)}
          ></img>
        </div>
        <div className="card-name capitalize">{`Title: ${card.title._content}`}</div>
        <div className="card-population">{`Author: ${card.owner?.username}`}</div>
        <div className="card-area">{`Description: ${card.description._content}`}</div>
        <div className="card-description">{`Date: ${card.dates.taken}`}</div>
      </div>
    </>
  );
};
