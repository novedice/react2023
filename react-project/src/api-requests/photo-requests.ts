import axios from 'axios';
import {
  API_KEY,
  BASEURL,
  FORMAT,
  METHODGETINFO,
  METHODSEARCH,
  NO_JSON_CB,
  PER_PAGE,
  REST,
  SERVICES,
} from './const';
import { IData, IPhotoInfo } from '../types';

const getPhotos = async (searchVal: string) => {
  try {
    const response = await axios.get<IData>(
      `${BASEURL}/${SERVICES}/${REST}/?${METHODSEARCH}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&tags=${searchVal}&${PER_PAGE}10`
    );
    console.log('in request', response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getPhotoInfo = async (id: string) => {
  try {
    const response = await axios.get<IPhotoInfo>(
      `${BASEURL}/${SERVICES}/${REST}/?${METHODGETINFO}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&photo_id=${id}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getPhotos, getPhotoInfo };
