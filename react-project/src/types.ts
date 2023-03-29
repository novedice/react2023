type CardType = {
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

export type { CardType, MainProps, ActiveState, LayoutProps, FormErrors };
