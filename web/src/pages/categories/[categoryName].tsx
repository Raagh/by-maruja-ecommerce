import React from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

import { sanity } from '../../../lib/sanity';

import Layout from '../../components/shared/layout';
import { Product } from '../../model/product';
import { CategoryConfiguration } from '../../model/category-configuration';
import ProductList from '../../components/categories/product-list';
import Faq from '../../components/shared/faq';

const toLowerCase = (text: string | string[]) => (text as string).toLowerCase();
const capitalize = (text: string | string[]) => (text as string).charAt(0).toUpperCase() + text.slice(1);

const CategoryDisplay = ({ categories, products }: { categories: CategoryConfiguration[]; products: Product[] }) => {
  const router = useRouter();
  const lowerCaseCategoryName = toLowerCase(router.query.categoryName);

  const formatedCategoryName = capitalize(lowerCaseCategoryName);
  return (
    <Layout categories={categories}>
      <ProductList categoryName={formatedCategoryName} products={products} />
      <Faq isDarkBackgroundColor={true} />
    </Layout>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { categoryName } = context.query;
  const lowerCaseCategoryName = (categoryName as string).toLowerCase();

  const extraQuery =
    lowerCaseCategoryName === 'productos' ? '' : `&& category[0]->searchName == "${lowerCaseCategoryName}"`;

  const sanityCategories = await sanity.fetch(
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

  const sanityProduct = await sanity.fetch(
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

  return { props: { categories: sanityCategories.categories, products: sanityProduct } };
};

export default CategoryDisplay;
