import { TaskEither } from 'fp-ts/lib/TaskEither';

type InstagramImage = {
  urlSmall: string;
  urlMedium: string;
  urlBig: string;
};

export type InstagramFeed = {
  images: InstagramImage[];
};

export const getInstagramFeed = async (): TaskEither<Error, InstagramFeed> => {};
