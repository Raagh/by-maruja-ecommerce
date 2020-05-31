import React from 'react';
import { NextPage } from 'next';
import { withUserAgent, UserAgent } from 'next-useragent';
import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import Hero from '../components/home/hero';
import ShippingInfo from '../components/home/shipping-info';
import ProductCategories from '../components/home/categories/product-categories';
import { HeroConfiguration } from '../model/hero-configuration';
import { CategoryConfiguration } from '../model/category-configuration';
import { HomeProps, ContextWithUserAgentProps } from '../model/home';

const Home: NextPage<HomeProps> = ({
  hero,
  categories,
  userAgent,
}: {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
  userAgent: UserAgent;
}) => {
  return (
    <Layout>
      <Hero {...hero} />
      <ShippingInfo />
      <ProductCategories categories={categories} isMobile={userAgent.isMobile} />
    </Layout>
  );
};

Home.getInitialProps = async (ctx: ContextWithUserAgentProps) => {
  const sanityResult = await sanity.fetch(
    `
    *[_type == "homeSettings"][0]{hero, categories}
  `
  );

  return { ...sanityResult, userAgent: ctx.ua };
};

export default withUserAgent(Home);
