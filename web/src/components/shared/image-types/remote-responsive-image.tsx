import React from 'react';

import { getImageAsset } from '@sanity/asset-utils';
import { Image } from '../../../model/image';
import { getDefaultImage } from '../../../../lib/sanity';
import LazyImage from './lazy-image';

type RemoteImageProps = Image & {
  className?: string;
};

// const DEFAULT_WIDTHS = [320, 480, 640, 800, 1440];

// const createSrcSet = (image: SanityImageSource) =>
//   DEFAULT_WIDTHS.map((sourceW) => `${getDefaultImage(image).width(sourceW).url()} ${sourceW}`).join(',\n');

export default ({ className, image, alt, asset }: RemoteImageProps) => {
  const imageAsset = getImageAsset(asset);
  return (
    <LazyImage
      className={className}
      alt={alt}
      src={getDefaultImage(image).url()}
      placeHolder={imageAsset.metadata.lqip}
      sizes=""
      srcSet={`
      ${getDefaultImage(image).width(600)} 600w,
      ${getDefaultImage(image).width(1000)} 1000w,
      ${getDefaultImage(image)} 2000w,
    `}
    />
  );
};
