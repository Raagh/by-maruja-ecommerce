import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type CartProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
  size: string;
  quantity: number;
};
