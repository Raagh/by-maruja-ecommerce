import React from 'react';

import styled from 'styled-components';
import { CategoryConfiguration } from '../../../model/category-configuration';
import CategoriesContainer from './categories-container';
import { device } from '../../../config/device';
import { StyledH2 } from '../../../config/global-styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 0 1.5rem 0 1.5rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.large} {
    padding: 0 6.75rem 0 6.75rem;
    margin-top: 158px;
  }
`;

const ProductCategoriesTitle = styled(StyledH2)`
  font-style: normal;
  margin-bottom: 2.5rem;
  text-align: center;

  @media ${device.large} {
    display: none;
  }
`;

const ProductCategories = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <Container>
      <ProductCategoriesTitle>Nuestros Productos</ProductCategoriesTitle>
      <CategoriesContainer categories={categories} />
    </Container>
  );
};

export default ProductCategories;
