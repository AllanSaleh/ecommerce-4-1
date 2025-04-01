export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
  createdAt?: Date;
  updatedAt?: Date;
  quantity?: number;
}

export type Category = string;