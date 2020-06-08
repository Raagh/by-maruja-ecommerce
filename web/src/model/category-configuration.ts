import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type CategoryConfiguration = {
  name: string;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
};
