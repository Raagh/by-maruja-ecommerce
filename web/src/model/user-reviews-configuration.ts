import { ImageConfiguration } from './image-configuration';

export type UserReviewsConfiguration = ImageConfiguration & {
  text: string;
  instagramTag: string;
};
