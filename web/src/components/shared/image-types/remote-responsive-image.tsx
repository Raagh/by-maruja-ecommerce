import React from 'react';
import { getDefaultImage, getImageMetadata } from '../../../../lib/sanity';
import { RemoteImageProps } from './remote-image-props';
import LazyLoadImage from './lazy-image';

export default ({ className, image, alt, asset }: RemoteImageProps) => {
  const metadata = getImageMetadata(asset);
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image)?.url()}
      placeholderSrc={metadata?.lqip}
      sizes=""
      srcSet={`
      ${getDefaultImage(image)?.width(600)} 600w,
      ${getDefaultImage(image)?.width(1000)} 1000w,
      ${getDefaultImage(image)} 2000w,
    `}
    />
  );
};
