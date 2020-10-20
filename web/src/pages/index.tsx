import React, { useContext, useEffect } from 'react';
import { sanity } from '../../lib/sanity';

import Layout from '../components/shared/layout';
import Hero from '../components/home/hero';
import ShippingInfo from '../components/home/shipping-info';
import Recommended from '../components/home/recommended';
import ProductCategories from '../components/home/categories/product-categories';
import Feed from '../components/home/feed';
import UserReviews from '../components/home/user-reviews';
import About from '../components/home/about';
import Faq from '../components/shared/faq';

import { HeroConfiguration } from '../model/hero-configuration';
import { CategoryConfiguration } from '../model/category-configuration';
import { RecommendedConfiguration } from '../model/recommended-configuration';
import { UserReviewsConfiguration } from '../model/user-reviews-configuration';
import { store } from '../context/store';
import { ActionTypes } from '../model/action-types';


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
  const { dispatch } = useContext(store);

  useEffect(() => {
    const url = window.location.href;
    if (url.includes('?clearCart')) dispatch({ type: ActionTypes.Empty });
  }, []);

  return (
    <Layout categories={categories}>
      <Hero {...hero} />
      <ShippingInfo />
      <ProductCategories categories={categories} />
      <Recommended recommended={recommended} />
      <UserReviews {...userReviews} />
      <Feed />
      <Faq />
      <About />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const sanityResult = await sanity.fetch(
    `
    *[_type == "homeSettings"][0]{
      "categories": categories[]->{
        searchName,
        name,
        image,
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
        "image": images[0],
        "asset": images[0].asset-> {
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
