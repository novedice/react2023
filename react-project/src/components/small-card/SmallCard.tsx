import React from 'react';
import { ICardShort } from '../../types';

interface SmallCardProps {
  oneUrl: ICardShort;
  photoHandle: (id: string) => void;
}

const SmallCard = ({ oneUrl, photoHandle }: SmallCardProps) => {
  return (
    <>
      <div
        className="single-card-wrap-main"
        onClick={() => {
          photoHandle(oneUrl.id);
        }}
      >
        <p>{oneUrl.title}</p>
        <img className="img-main" src={oneUrl.img}></img>
      </div>
    </>
  );
};

export default SmallCard;
