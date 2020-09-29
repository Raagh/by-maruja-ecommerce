import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset } from '@sanity/asset-utils';

export default [
  {
    _id: '1',
    name: 'test 1',
    price: -1,
    stock: 0,
    size: '1',
    image: null as SanityImageSource,
    asset: null as SanityImageSourceAsset,
    quantity: 1,
  },
  {
    _id: '2',
    name: 'test 2',
    price: -1,
    stock: 0,
    size: '1',
    image: null as SanityImageSource,
    asset: null as SanityImageSourceAsset,
    quantity: 3,
  },
];
