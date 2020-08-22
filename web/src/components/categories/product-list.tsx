import React, { useState } from 'react';

import styled from 'styled-components';

import { StyledH3 } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { Product } from '../../model/product';
import ProductFilter from './product-filter';
import ProductListItem from './product-list-item';
import { Tags } from '../../model/filters/tags';
import { Order } from '../../model/filters/order';

const CategoryHeader = styled(StyledH3)`
  text-align: center;
  padding: 4rem 1.5rem 4rem 1.5rem;
  background-color: ${colors.ui.grey5percent};
`;

const HeaderSeparation = styled.div`
  height: 4px;
`;

const ProductList = ({ categoryName, products }: { categoryName: string; products: Product[] }) => {
  const [sort, setSort] = useState(Order.DESC);
  const [filter, setFilter] = useState(Tags.All);

  const getSortFunction = () => {
    if (sort === Order.ASC) return (a: Product, b: Product) => a.price - b.price;
    return (a: Product, b: Product) => b.price - a.price;
  };

  const getFilterFunction = () => {
    if (filter === Tags.All) return (x: Product) => x;
    return (x: Product) => x.tag === filter;
  };

  const onSortChange = (nextSort: Order) => {
    setSort(nextSort);
  };

  const onFilterChange = (tag: Tags) => {
    setFilter(tag);
  };

  return (
    <div>
      <CategoryHeader>{categoryName}</CategoryHeader>
      <HeaderSeparation />
      <ProductFilter filterProducts={onFilterChange} orderProducts={onSortChange} />
      {products
        .filter(getFilterFunction())
        .sort(getSortFunction())
        .map((product: Product) => (
          <ProductListItem key={product.name} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
