import React from 'react';
import { NextPageContext } from 'next';

import { sanity } from '../../../lib/sanity';

import Layout from '../../components/shared/layout';
import Faq from '../../components/shared/faq';
import UserReviews from '../../components/home/user-reviews';
import { Product } from '../../model/product';
import ProductItemDisplay from '../../components/product-item/product-item';

import { UserReviewsConfiguration } from '../../model/user-reviews-configuration';
import { CategoryConfiguration } from '../../model/category-configuration';

const ProductItem = ({
  product,
  userReviews,
  categories,
}: {
  product: Product;
  userReviews: UserReviewsConfiguration;
  categories: Array<CategoryConfiguration>;
}) => {
  return (
    <Layout categories={categories}>
      <ProductItemDisplay product={product} />
      {userReviews !== null && <UserReviews {...userReviews} />}
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
    }
    `
  );

  return {
    props: {
      product: productResult,
      userReviews: productResult?.userReviews ?? null,
      categories: homeSettingsResult.categories,
    },
  };
};

export default ProductItem;
