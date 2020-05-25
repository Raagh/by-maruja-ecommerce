import React from 'react';
import { sanity } from '../../lib/sanity';
import Layout from '../components/shared/layout';
import Hero from '../components/home/hero';
import ShippingInfo from '../components/home/shipping-info';
import ProductCategories from '../components/home/product-categories';
import { HeroConfiguration } from '../model/hero-configuration';
import { CategoryConfiguration } from '../model/category-configuration';

const Home = ({ hero, categories }: { hero: HeroConfiguration; categories: Array<CategoryConfiguration> }) => {
  return (
    <Layout>
      <Hero {...hero} />
      <ShippingInfo />
      <ProductCategories categories={categories} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return sanity.fetch(
    `
    *[_type == "homeSettings"][0]{hero, categories}
  `
  );
};

export default Home;
