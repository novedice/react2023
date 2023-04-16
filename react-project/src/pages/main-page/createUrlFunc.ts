import { Sizes } from '../../enums';
import { PHOTOURL } from './const';

const createUrl = (server: string, id: string, secret: string, size: Sizes) => {
  return `${PHOTOURL}/${server}/${id}_${secret}_${size}.jpg`;
};

export default createUrl;
