import React from 'react';

import LazyLoadImage from './lazy-image';
import { RemoteImageProps } from './remote-image-props';
import { getDefaultImage, getImageMetadata } from '../../../../lib/sanity';

export default ({ className, asset, alt, image }: RemoteImageProps) => {
  const metadata = getImageMetadata(asset);
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image)?.url()}
      placeholderSrc={metadata?.lqip}
    />
  );
};
