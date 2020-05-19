import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Product = {
  name: string;
  price: number;
  stock: number;
  description: string;
  image: SanityImageSource;
};
