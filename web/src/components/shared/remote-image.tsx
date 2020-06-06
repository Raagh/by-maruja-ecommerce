import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from '../../model/image';

import { sanity } from '../../../lib/sanity';

const builder = imageUrlBuilder(sanity);

type RemoteImageProps = Image & {
  className?: string;
};

export default ({ className, image, alt }: RemoteImageProps) => {
  return <img className={className} alt={alt} src={builder.image(image).auto('format').url()} />;
};
