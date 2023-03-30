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
  register: UseFormRegister<IFormValues>;
  label: string;
  validationFunc: (n: string) => boolean;
  errorMessage?: string;
  minLength?: number;
};

type SelectFieldProps = {
  register: UseFormRegister<IFormValues>;
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

export type {
  CardType,
  MainProps,
  ActiveState,
  LayoutProps,
  FormErrors,
  InputTextProps,
  SelectFieldProps,
  FormValues,
};
