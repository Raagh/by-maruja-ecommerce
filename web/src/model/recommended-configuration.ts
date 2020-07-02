import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type RecommendedConfiguration = {
  name: string;
  price: number;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
  stock: number;
};
