import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export type Product = {
  _id: string;
  name: string;
  price: number;
  discountPrice: number;
  stock: number;
  hasSizes: boolean;
  description: string;
  images: [
    {
      image: SanityImageSource;
      asset: SanityImageSourceAsset;
    }
  ];
  tag: string;
};
