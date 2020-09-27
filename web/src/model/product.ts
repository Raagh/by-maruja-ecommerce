import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
  tag: string;
};
