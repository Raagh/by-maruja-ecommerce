import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RemoteImageProps } from './remote-image-props';
import { getDefaultImage, getImagePlaceholder } from '../../../../lib/sanity';

export default ({ className, asset, alt, image }: RemoteImageProps) => {
  return (
    <LazyLoadImage className={className} alt={alt} src={getDefaultImage(image)?.url()} effect="blur" placeholderSrc={getImagePlaceholder(asset)} />
  );
};
