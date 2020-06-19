import { ImageConfiguration } from './image-configuration';

export type HeroConfiguration = ImageConfiguration & {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonURL: string;
};
