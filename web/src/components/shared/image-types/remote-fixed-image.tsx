import React from 'react';

import { getImageAsset } from '@sanity/asset-utils';
import { RemoteImageProps } from './remote-image-props';
import LazyImage from './lazy-image';
import { getDefaultImage } from '../../../../lib/sanity';

export default ({ className, asset, alt, image }: RemoteImageProps) => {
  const imageAsset = getImageAsset(asset);
  const placeHolderSrc = imageAsset.metadata.lqip;
  return <LazyImage className={className} alt={alt} src={getDefaultImage(image).url()} placeHolder={placeHolderSrc} />;
};
