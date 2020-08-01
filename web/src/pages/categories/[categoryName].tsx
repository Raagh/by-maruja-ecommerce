import React from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

import { sanity } from '../../../lib/sanity';

import Layout from '../../components/shared/layout';
import { Product } from '../../model/product';
import ProductList from '../../components/categories/product-list';
import Faq from '../../components/shared/faq';

const CategoryDisplay = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const lowerCaseCategoryName = (router.query.categoryName as string).toLowerCase();

  const formatedCategoryName =
    (lowerCaseCategoryName as string).charAt(0).toUpperCase() + lowerCaseCategoryName.slice(1);
  return (
    <Layout>
      <ProductList categoryName={formatedCategoryName} products={products} />
      <Faq />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { categoryName } = context.query;

  const sanityResult = await sanity.fetch(
    `
    *[_type == "product" && category == "${(categoryName as string).toLowerCase()}"]{
      ...,
        "asset": image.asset-> {
          url,
          metadata 
        }
     }
  `
  );

  return { props: { products: sanityResult } };
};

export default CategoryDisplay;
