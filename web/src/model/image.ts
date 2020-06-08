import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Image {
  alt: string;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
}
