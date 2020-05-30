import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanity = sanityClient({
  projectId: process.env.sanityProjectId,
  dataset: process.env.sanityDataset,
  useCdn: true,
});

// const sanityWriteClient = sanityClient({
//   projectId: process.env.sanityProjectId,
//   dataset: process.env.sanityDataset,
//   token: process.env.sanityAccessToken,
//   useCdn: true,
// });

const builder = imageUrlBuilder(sanity);

export const urlFor = (source: SanityImageSource) => builder.image(source).url();
