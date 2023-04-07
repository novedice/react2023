import { Sizes } from '../../enums';
import { IPhoto } from '../../types';
import { PHOTOURL } from './const';

const createUrl = (photo: IPhoto, size: Sizes) => {
  return `${PHOTOURL}/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};

export default createUrl;
