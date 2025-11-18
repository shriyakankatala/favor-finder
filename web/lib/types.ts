export type Favor = {
  id: string;
  title: string;
  description: string;
  reward?: string;
  distance?: string;
  eta?: string;
};

export type FavorInput = {
  title: string;
  description: string;
  reward?: string;
};
