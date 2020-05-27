import React from 'react';

import styled from 'styled-components';
import { StyledH4 } from '../../../config/global-styled-components';
import { CategoryConfiguration } from '../../../model/category-configuration';
import CategoriesContainer from './categories-container';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 0 1.5rem 0 1.5rem;
`;

const CategoryTitle = styled(StyledH4)`
  margin-bottom: 2.5rem;
  text-align: center;
`;

const ProductCategories = ({ categories }: { categories: CategoryConfiguration[] }) => {
  return (
    <Container>
      <CategoryTitle>Nuestros Productos</CategoryTitle>
      <CategoriesContainer categories={categories} />
    </Container>
  );
};

export default ProductCategories;
