import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityImageSource as SanityImageSourceAsset, getImageAsset } from '@sanity/asset-utils';

export const sanity = sanityClient({
  projectId: process.env.sanityProjectId,
  dataset: process.env.sanityDataset,
  useCdn: true,
});

export const sanityWriteClient = sanityClient({
  projectId: process.env.sanityProjectId,
  dataset: process.env.sanityDataset,
  token: process.env.sanityAccessToken,
  useCdn: false,
});

export const builder = imageUrlBuilder(sanity);

export const getDefaultImage = (image: SanityImageSource) => builder.image(image).auto('format');

export const getImagePlaceholder = (asset: SanityImageSourceAsset) => (asset ? getImageAsset(asset).metadata.lqip : '');

export const getImageMetadata = (asset: SanityImageSourceAsset) => (asset ? getImageAsset(asset).metadata : null);
