import React from 'react';

import styled from 'styled-components';

import { StyledH3 } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { Product } from '../../model/product';
import ProductFilter from './product-filter';
import ProductListItem from './product-list-item';

const CategoryHeader = styled(StyledH3)`
  text-align: center;
  padding: 4rem 1.5rem 4rem 1.5rem;
  background-color: ${colors.ui.grey5percent};
`;

const HeaderSeparation = styled.div`
  height: 4px;
`;

const ProductList = ({ categoryName, products }: { categoryName: string; products: Product[] }) => {
  return (
    <div>
      <CategoryHeader>{categoryName}</CategoryHeader>
      <HeaderSeparation />
      <ProductFilter />
      {products.map((product: Product) => (
        <ProductListItem key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
