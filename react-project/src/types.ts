type CardType = {
  name: string;
  img: string;
  district: string;
  area: number;
  population: number;
  description: string;
};

type MainProps = {
  searchValue: string;
};

export type { CardType, MainProps };
