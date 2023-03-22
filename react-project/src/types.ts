type CardType = {
  name: string;
  img: string;
  district: string;
  area: string;
  population: string;
  description: string;
  date?: Date;
  fileImg?: HTMLInputElement;
};

type MainProps = {
  searchValue: string;
};

type ActiveState = {
  activeMain: string;
  activeAbout: string;
  activeForm: string;
};

type LayoutProps = {
  state: ActiveState;
  setState: React.Dispatch<React.SetStateAction<ActiveState>>;
};

export type { CardType, MainProps, ActiveState, LayoutProps };
