import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanity = sanityClient({
  projectId: 'x7biewak',
  dataset: 'maruja-dataset',
  token: process.env.sanityAccessToken,
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export const urlFor = (source: SanityImageSource) => builder.image(source).url();
