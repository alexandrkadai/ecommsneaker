export type TCart = {
  userId: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageString: string;
  }>;
};
