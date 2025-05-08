interface Iproduct {
  id: number;
  name: string;
  description: string;
  detalis: string;
  minQty: number;
  size: string;
}

export interface IproductToWrite extends Iproduct {
  categoryId: number;
}

export interface IproductToRead extends Iproduct {
  categoryName: string;
  categoryId: number;
  images: Image[];
}

interface Image {
  name: string;
  image: string;
  id: number;
}
