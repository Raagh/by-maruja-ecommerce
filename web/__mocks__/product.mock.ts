import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export const mock = {
  _id: '1',
  name: 'name',
  price: -1,
  discountPrice: -2,
  stock: 0,
  sizeChart: [{ size: '1', stock: 1 }],
  description: 'string',
  images: [
    {
      image: null as SanityImageSource,
      asset: null as SanityImageSourceAsset,
    },
  ],
  tag: 'string',
} as any;
