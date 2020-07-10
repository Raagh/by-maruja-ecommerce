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
import UserReviews from '../components/home/user-reviews';
import { UserReviewsConfiguration } from '../model/user-reviews-configuration';
import Faq from '../components/home/faq';

const Home = ({
  hero,
  categories,
  recommended,
  userReviews,
}: {
  hero: HeroConfiguration;
  categories: Array<CategoryConfiguration>;
  recommended: Array<RecommendedConfiguration>;
  userReviews: UserReviewsConfiguration;
}) => {
  return (
    <Layout>
      <Hero {...hero} />
      <ShippingInfo />
      <ProductCategories categories={categories} />
      <Recommended recommended={recommended} />
      <UserReviews {...userReviews} />
      <Faq />
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
       },
       userReviews {
        ...,
        "asset": image.asset-> {
          url,
          metadata 
        }
      },
     }
  `
  );
  return { props: { ...sanityResult } };
};

export default Home;
