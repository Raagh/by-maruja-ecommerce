import React from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

import { sanity } from '../../../lib/sanity';

import Layout from '../../components/shared/layout';
import { Product } from '../../model/product';
import ProductList from '../../components/categories/product-list';
import Faq from '../../components/shared/faq';

const toLowerCase = (text: string | string[]) => (text as string).toLowerCase();
const capitalize = (text: string | string[]) => (text as string).charAt(0).toUpperCase() + text.slice(1);

const CategoryDisplay = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const lowerCaseCategoryName = toLowerCase(router.query.categoryName);

  const formatedCategoryName = capitalize(lowerCaseCategoryName);

  return (
    <Layout>
      <ProductList categoryName={formatedCategoryName} products={products} />
      <Faq />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { categoryName } = context.query;
  const lowerCaseCategoryName = (categoryName as string).toLowerCase();

  const extraQuery =
    lowerCaseCategoryName === 'productos' ? '' : `&& category[0]->name == "${capitalize(lowerCaseCategoryName)}"`;

  const sanityResult = await sanity.fetch(
    `
    *[_type == "product" ${extraQuery}]{
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
