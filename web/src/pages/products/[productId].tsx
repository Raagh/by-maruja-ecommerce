import React from 'react';
import { NextPageContext } from 'next';

import { sanity } from '../../../lib/sanity';

import Layout from '../../components/shared/layout';
import Faq from '../../components/shared/faq';
import Recommended from '../../components/home/recommended';
import UserReviews from '../../components/home/user-reviews';
import { Product } from '../../model/product';
import ProductItemDisplay from '../../components/product-item/product-item';

import { RecommendedConfiguration } from '../../model/recommended-configuration';
import { UserReviewsConfiguration } from '../../model/user-reviews-configuration';
import { CategoryConfiguration } from '../../model/category-configuration';

const ProductItem = ({
  product,
  recommended,
  userReviews,
  categories,
}: {
  product: Product;
  recommended: Array<RecommendedConfiguration>;
  userReviews: UserReviewsConfiguration;
  categories: Array<CategoryConfiguration>;
}) => {
  return (
    <Layout categories={categories}>
      <ProductItemDisplay product={product} />
      <UserReviews {...userReviews} />
      <Recommended recommended={recommended} />
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
      "images": images[]{
        "image": {
          ...,
         	"asset": { "url": asset->url, "metadata": asset->metadata }
        },
      }	
     } 
  `
  );

  const homeSettingsResult = await sanity.fetch(
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

  return {
    props: {
      product: productResult,
      recommended: homeSettingsResult.recommended,
      userReviews: homeSettingsResult.userReviews,
      categories: homeSettingsResult.categories,
    },
  };
};

export default ProductItem;
