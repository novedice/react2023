import { useEffect, useState } from 'react';
import { IData, IPhotoInfo } from '../types';
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
} from '../api-requests/const';
import axios, { AxiosError } from 'axios';

type Info = {
  photo: IPhotoInfo;
};

const usePhotos = (searchVal: string) => {
  const [response, setResponse] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getPhotos = async (searchVal: string) => {
    try {
      setLoading(true);
      const response = await axios.get<IData>(
        `${BASEURL}/${SERVICES}/${REST}/?${METHODSEARCH}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&text=${searchVal}&${PER_PAGE}10`
      );
      setResponse(response.data);
      setLoading(false);
    } catch (e) {
      setError((e as AxiosError).message);
    }
  };

  useEffect(() => {
    getPhotos(searchVal);
  }, [searchVal]);

  return { response, loading, error };
};

const usePhoto = (id: string) => {
  const [photoResponse, setPhotoResponse] = useState<IPhotoInfo>();
  const [photoLoading, setPhotoLoading] = useState(false);
  const [photoError, setPhotoError] = useState('');
  const getPhotoInfo = async (id: string) => {
    try {
      setPhotoLoading(true);
      const response = await axios.get<Info>(
        `${BASEURL}/${SERVICES}/${REST}/?${METHODGETINFO}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&photo_id=${id}`
      );
      setPhotoLoading(false);
      setPhotoResponse(response.data.photo);
    } catch (e) {
      setPhotoError((e as AxiosError).message);
    }
  };
  useEffect(() => {
    getPhotoInfo(id);
  });
  return { photoResponse, photoLoading, photoError };
};

export { usePhotos, usePhoto };
