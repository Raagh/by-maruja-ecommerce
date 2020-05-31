import { WithUserAgentProps } from 'next-useragent';
import { NextPageContext } from 'next';
import { HeroConfiguration } from './hero-configuration';
import { CategoryConfiguration } from './category-configuration';

export interface HomeProps extends WithUserAgentProps {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
}

export interface ContextWithUserAgentProps extends NextPageContext, WithUserAgentProps {}
