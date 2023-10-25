export type Broadcast = {
  id: number;
  league: string;
  label: string;
  price: string;
  desc: string;
};

export type Product = {
  uuid: string;
  name: string;
  images: string[];
  lastUpdated: number;
  description: string;
  instructions: string;
  difficulty: number;
};
