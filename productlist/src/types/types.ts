export interface Dessert {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export type DessertData = {
  desserts: Dessert[];
  loading: boolean;
  error: string | null;
};
