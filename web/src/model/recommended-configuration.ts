import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type RecommendedConfiguration = {
  _id: string;
  name: string;
  price: number;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
  stock: number;
};
