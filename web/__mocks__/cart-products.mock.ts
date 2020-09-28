import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export default [
  {
    _id: '1',
    name: 'test 1',
    price: -1,
    discountPrice: -2,
    stock: 0,
    sizeChart: [
      {
        size: '1',
        stock: 1,
      },
    ],
    description: 'string',
    images: [
      {
        image: null as SanityImageSource,
        asset: null as SanityImageSourceAsset,
      },
    ],
    tag: 'string',
    quantity: 1,
  },
  {
    _id: '2',
    name: 'test 2',
    price: -1,
    discountPrice: -2,
    stock: 0,
    sizeChart: [
      {
        size: '1',
        stock: 1,
      },
    ],
    description: 'string',
    images: [
      {
        image: null as SanityImageSource,
        asset: null as SanityImageSourceAsset,
      },
    ],
    tag: 'string',
    quantity: 3,
  },
];
