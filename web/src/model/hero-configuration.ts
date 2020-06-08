import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type HeroConfiguration = {
  title: string;
  subtitle: string;
  image: SanityImageSource;
  asset: SanityImageSourceAsset;
  buttonText: string;
  buttonURL: string;
};
