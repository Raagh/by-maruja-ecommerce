import { WithUserAgentProps, UserAgent } from 'next-useragent';
import { NextPageContext } from 'next';
import { HeroConfiguration } from './hero-configuration';
import { CategoryConfiguration } from './category-configuration';

export interface HomeProps extends WithUserAgentProps {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
  userAgent: Partial<UserAgent>;
}

export interface ContextWithUserAgentProps extends NextPageContext, WithUserAgentProps {}
