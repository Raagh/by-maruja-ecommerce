import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getDefaultImage, getImagePlaceholder } from '../../../../lib/sanity';
import { RemoteImageProps } from './remote-image-props';

export default ({ className, image, alt, asset }: RemoteImageProps) => {
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image)?.url()}
      placeholderSrc={getImagePlaceholder(asset)}
      draggable="false"
      effect="blur"
      sizes=""
      srcSet={`
      ${getDefaultImage(image)?.width(600)} 600w,
      ${getDefaultImage(image)?.width(1000)} 1000w,
      ${getDefaultImage(image)} 2000w,
    `}
    />
  );
};
