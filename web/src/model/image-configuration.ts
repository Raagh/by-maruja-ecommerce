import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type ImageConfiguration = {
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
};
