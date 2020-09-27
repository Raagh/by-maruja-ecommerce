import React from 'react';
import { NextPageContext } from 'next';

import { sanity } from '../../../lib/sanity';

import Layout from '../../components/shared/layout';
import Faq from '../../components/shared/faq';
import Recommended from '../../components/home/recommended';
import UserReviews from '../../components/home/user-reviews';
import ProductItemDisplay from '../../components/product-item/product-item';

import { RecommendedConfiguration } from '../../model/recommended-configuration';
import { UserReviewsConfiguration } from '../../model/user-reviews-configuration';

import { Product } from '../../model/product';

const ProductItem = ({
  product,
  recommended,
  userReviews,
}: {
  product: Product;
  recommended: Array<RecommendedConfiguration>;
  userReviews: UserReviewsConfiguration;
}) => {
  return (
    <Layout>
      <ProductItemDisplay product={product} />
      <Recommended recommended={recommended} />
      <UserReviews {...userReviews} />
      <Faq isDarkBackgroundColor={true} />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { productId } = context.query;

  const productResult = await sanity.fetch(
    `
    *[_type == "product" && _id == "${productId}"][0]{
      ...,
        "asset": image.asset-> {
          url,
          metadata 
        }
     } 
  `
  );

  const homeSettingsResult = await sanity.fetch(
    `
    *[_type == "homeSettings"][0]{
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

  return {
    props: {
      product: productResult,
      recommended: homeSettingsResult.recommended,
      userReviews: homeSettingsResult.userReviews,
    },
  };
};

export default ProductItem;
