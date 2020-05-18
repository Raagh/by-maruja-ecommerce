import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanity = sanityClient({
  projectId: 'x7biewak', // you can find this in sanity.json
  dataset: 'maruja-dataset', // or the name you chose in step 1
  token: process.env.sanityAccessToken,
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(sanity);

export const urlFor = (source: SanityImageSource) => builder.image(source);
