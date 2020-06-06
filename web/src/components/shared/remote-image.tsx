import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from '../../model/image';
import { sanity } from '../../../lib/sanity';

const builder = imageUrlBuilder(sanity);

export default (config: Image) => {
  return <img alt={config.alt} src={builder.image(config.image).auto('format').url()} />;
};
