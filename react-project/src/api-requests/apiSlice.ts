import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BASEURL,
  SERVICES,
  REST,
  PER_PAGE,
  NO_JSON_CB,
  FORMAT,
  API_KEY,
  METHODSEARCH,
  METHODGETINFO,
} from './const';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}/${SERVICES}/${REST}/` }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (str: string) => {
        if (str) {
          return `?${METHODSEARCH}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&text=${str}&${PER_PAGE}10`;
        } else {
          return '?method=flickr.photos.getRecent&api_key=bb24ad19019ac67730653523daee1b9d&format=json&nojsoncallback=1&per_page=12';
        }
      },
    }),
    getPhoto: builder.query({
      query: (id: string) => {
        return `?${METHODGETINFO}&${API_KEY}&${FORMAT}&${NO_JSON_CB}&photo_id=${id}`;
      },
    }),
  }),
});
export { apiSlice };

export const { useGetPhotosQuery, useGetPhotoQuery } = apiSlice;
