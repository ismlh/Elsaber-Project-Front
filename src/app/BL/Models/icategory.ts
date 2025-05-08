import { IproductToRead } from './iproduct';

export interface ICategoryToRead {
  id: number;
  categoryName: string;
  products: IproductToRead[];
}

export interface ICategoryToWrite {
  name: string;
}
