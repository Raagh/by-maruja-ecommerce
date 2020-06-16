import React from 'react';
import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import Hero from '../components/home/hero';
import ShippingInfo from '../components/home/shipping-info';
import Recommended from '../components/home/recommended';
import ProductCategories from '../components/home/categories/product-categories';
import { HeroConfiguration } from '../model/hero-configuration';
import { CategoryConfiguration } from '../model/category-configuration';
import { RecommendedConfiguration } from '../model/recommended-configuration';

const Home = ({
  hero,
  categories,
  recommended,
}: {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
  recommended: Array<RecommendedConfiguration>;
}) => {
  console.log(recommended);
  return (
    <Layout>
      <Hero {...hero} />
      <ShippingInfo />
      <ProductCategories categories={categories} />
      <Recommended />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const sanityResult = await sanity.fetch(
    `
    *[_type == "homeSettings"][0]{
      categories[] {   	  
        ...,
         "asset": image.asset-> {
            url,
            metadata 
         }
      },
       hero {
        ...,
         "asset": image.asset-> {
            url,
            metadata 
         }
       },
       recommended[]->{
        ...,
        "asset": image.asset-> {
            url,
            metadata 
         }
       }
    }
  `
  );
  return { props: { ...sanityResult } };
};

export default Home;
