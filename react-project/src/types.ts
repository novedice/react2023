import { UseFormRegister } from 'react-hook-form';
import React from 'react';

type CardType = {
  name: string;
  img: string;
  district: string;
  area: string;
  population: string;
  description: string;
  date?: Date;
  fileImg?: HTMLInputElement;
  beenThere?: string;
  wantAName?: boolean;
  namePerson?: string;
};

type MainProps = {
  searchValue: string;
};

type ActiveState = {
  main: string;
  about: string;
  form: string;
};

type LayoutProps = {
  state: ActiveState;
  setState: React.Dispatch<React.SetStateAction<ActiveState>>;
};

type FormErrors = {
  cityError: string;
  imgError: string;
  districtError: string;
  areaError: string;
  populationError: string;
  descriptionError: string;
  dateError: string;
  fileImgError: string;
  beenThereError: string;
};

type InputTextProps = {
  register: UseFormRegister<FormValues>;
  label: string;
  validationFunc: (n: string) => boolean;
  errorMessage?: string;
  minLength?: number;
};

type SelectFieldProps = {
  register: UseFormRegister<FormValues>;
};

type FormValues = {
  name: string;
  img: string;
  district: string;
  area: string;
  population: string;
  description: string;
  date?: Date;
  fileImg?: HTMLInputElement;
  beenThere?: boolean;
  wantAName?: boolean;
  namePerson?: string;
};

interface IData {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: IPhoto[];
    total: number;
  };
}

type Owner = {
  nsid: string;
  username: string;
  realname: string;
};

interface PhotoFields {
  farm: number;
  id: string;
  isfamily: 0 | 1;
  isfriend: 0 | 1;
  ispublic: 1 | 0;
  secret: string;
  server: string;
}

interface IPhoto extends PhotoFields {
  owner: string;
  title: string;
}

interface IPhotoInfo extends PhotoFields {
  dateuploaded: string;
  owner: Owner;
  title: {
    _content: string;
  };
  description: {
    _content: string;
  };
  location: {
    latitude: string;
    longitude: string;
    accuracy: string;
    context: string;
    locality: { _content: string };
    county: { _content: string };
    region: { _content: string };
    country: { _content: string };
    neighbourhood: { _content: string };
  };
  urls: {
    url: [{ type: string; _content: string }];
  };
  dates: {
    posted: string;
    taken: string;
    takengranularity: number;
    takenunknown: string;
    lastupdate: string;
  };
}

export type {
  CardType,
  MainProps,
  ActiveState,
  LayoutProps,
  FormErrors,
  InputTextProps,
  SelectFieldProps,
  FormValues,
  IData,
  IPhoto,
  IPhotoInfo,
};
