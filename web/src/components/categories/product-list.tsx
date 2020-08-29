import React, { useState } from 'react';

import styled from 'styled-components';

import { StyledH3Title, CaptionLarge } from '../../config/global-styled-components';
import { colors } from '../../config/global-styles';
import { Product } from '../../model/product';
import ProductFilter from './product-filter';
import ProductListItem from './product-list-item';
import { Tags } from '../../model/filters/tags';
import { Order } from '../../model/filters/order';
import ProductFilterDesktop from './product-filter-desktop';
import { device } from '../../config/device';

const CategoryHeader = styled(StyledH3Title)`
  text-align: center;
  padding: 4rem 1.5rem 4rem 1.5rem;
  background-color: ${colors.ui.grey5percent};
`;

const HeaderSeparation = styled.div`
  height: 4px;
`;

const ProductListContainerDesktop = styled.div`
  display: none;
  padding: 0 3rem 4rem 3rem;
  max-width: 1600px;
  margin: auto;

  @media ${device.large} {
    display: block;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const ProductListContainer = styled.div`
  display: block;

  @media ${device.large} {
    display: none;
  }
`;

const TotalCount = styled(CaptionLarge)`
  text-align: center;
  padding-top: 2rem;
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
      <ProductFilterDesktop filterProducts={onFilterChange} orderProducts={onSortChange} />
      <TotalCount>
        Tenemos <strong>{products.filter(getFilterFunction()).length}</strong> productos para vos
      </TotalCount>
      <ProductListContainer>
        {products
          .filter(getFilterFunction())
          .sort(getSortFunction())
          .map((product: Product) => (
            <ProductListItem key={product.name} product={product} />
          ))}
      </ProductListContainer>
      <ProductListContainerDesktop>
        {products
          .filter(getFilterFunction())
          .sort(getSortFunction())
          .map((product: Product) => (
            <ProductListItem key={product.name} product={product} />
          ))}
      </ProductListContainerDesktop>
    </div>
  );
};

export default ProductList;
