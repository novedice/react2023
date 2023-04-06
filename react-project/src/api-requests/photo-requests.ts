import axios from 'axios';
import { API_KEY, BASEURL, FORMAT, METHOD, NO_JSON_CB, PER_PAGE, REST, SERVICES } from './const';
import { IData } from '../types';
// import { IResponse } from 'types';

const getPhotos = async (searchVal: string) => {
  try {
    const response = await axios.get<IData>(
      `${BASEURL}/${SERVICES}/${REST}/?${METHOD}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&tags=${searchVal}&${PER_PAGE}10`
    );
    console.log('in request', response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getPhotos };
