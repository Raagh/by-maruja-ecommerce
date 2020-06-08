import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as ExtraSource } from '@sanity/asset-utils';

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

export const builder = imageUrlBuilder(sanity);

export const getDefaultImage = (image: SanityImageSource | ExtraSource) => builder.image(image).auto('format');
